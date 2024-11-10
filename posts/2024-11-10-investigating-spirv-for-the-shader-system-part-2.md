---
title: "Investigating SPIR-V for the shader system - Part 2"
author: youness
popular: false
image: /images/spir.png
tags: ['.NET', 'Shaders']
---
This second part is going to dive deeper in how the current SDSL compiler works and how we are improving on it for the SPIR-V compiler. This will be a sort of personal log book of my research on the subject.

---

<style>
    .stride-quote {
        padding : 1rem;
        border-radius : 0.25rem;
        border-left : 0.25rem solid lightgray;
        font-style : italic;
        opacity: 0.75;
    }
    img[alt=thinking] {
        max-width: 24rem;
        max-height: 24rem;
        display: block;
        float: none;
        margin-left: auto;
        margin-right: auto;
    }
    img[alt=creeping] {
        max-width: 24rem;
        display: block;
        float: none;
        margin-left: auto;
        margin-right: auto;
    }
    img[alt=onfire] {
        max-width: 24rem;
        display: block;
        float: none;
        margin-left: auto;
        margin-right: auto;
    }
</style>

Table of Contents:

[[TOC]]

[In the last blog post](/blog/investigating-spirv-for-the-shader-system/), we've briefly went through the why SPIR-V was an interesting shader format for our new shader compiler. After a year of research on this subject we're coming back with ideas and implementations!

## Preface

Rewriting the shader system is a complicated task in itself. As you may already know, Stride was initially a commercial product that was open-sourced not long ago, and some of the original devs left. This has led to a difficulty to gather information on the inner working of the engine.

Fortunately we still have some of the original team members helping and answering questions, and the source code is well written and easy to understand, this has helped a lot of contributors to be able to fix issues quite fast.

As for me, I started this project with no prior knowledge of how compiler works and a very faint idea of how shaders works. I've learned some things and am trying my best, so if you have any ideas, improvements and criticism, I'll be happy to discuss it on our Discord server or in a GitHub discussion! 😊

Also credit to Felicia Salomone/[@phaelicis](https://www.instagram.com/phaelicis/) for the art!

## How it works currently

There are two components to SDSL :

1. The effect system
2. The shader mixin system

The effect system is at a higher level than the shader mixins. It drives the creation of shader permutations through mixin operations of shader mixins.

A shader mixin is a building block for shaders in Stride, they are mixed and merged together to produce one final shader that will be used in rendering pipelines. Mixins is another way to reuse code without going through an inheritance hierarchy, there are many ways to go about it and SDSL has very specific kind of rules.

A quick example for this :

```hlsl
// Let's define two shader mixins with different fields and simple method
shader MixinA
{
    int a;
    void Foo()
    {
        int bar = a + 3;
    }
}
shader MixinB
{
    float b;
    void Foo()
    {
        float bar2 = b * 0.5f;
    }
}
// And one that is going to inherit our two first shaders
shader MixinC : MixinA, MixinB
{
    float c;
}
```

The inheritance is going to reuse the code present in the mixins and mix them together using a set of rules.

In this case the MixinC will internally look like :

```hlsl
shader MixinC : MixinA, MixinB
{
    // MixinC fields from MixinA and MixinB are copied as is
    int a;
    float b;
    float c;
  
    // Methods are merged together, statements appear in order of apparition of mixins.
    void Foo()
    {
        int bar = a + 3;
        float bar2 = b * 0.5f;
    }
}
```

This system makes it surprisingly easy to add shaders to material parts, say you want to add a shader to compute the emissive component of a material, just create a `CustomAwesomeEmissiveMixin`, inherit `Texturing, ComputeColor`, implement the `float4 ComputeColor()` method and 🪄*woopdeedoo*🪄 Stride will automatically generate a new permutation of our material shader by adding in the emissive mixin!

The way it's implemented is exactly what you would expect :

1. Generate syntax trees representing the SDSL code
2. Mix syntax trees together
3. Convert tree into HLSL code

But this has some issues regarding performance :

* Mixing tree structures together to generate new permutations involves a lot of deep cloning/defensive copies.
* Reading text is slower than binary data
* The garbage collector is going to be stressed and have some stutters here and there

It's important to note that these issues are only about shader permutation generation so far.

## The idea for SPIR-V

Dealing with tree structure is very rarely the fastest option, especially with programming languages with managed memory. So let's be very pragmatical about it and just decide to cut off the tree processing part, we're left with just a parser that result in an AST. We then need to find a way to generate SPIR-V from this AST.

What is SPIR-V? How could it help? 🤔

Let's check the official specification as of today, to understand what it is :

<blockquote class="stride-quote">

SPIR-V is a simple binary intermediate language for graphical shaders and compute kernels. A SPIR-V module contains multiple entry points with potentially shared functions in the entry point’s call trees. Each function contains a control-flow graph (CFG) of basic blocks, with optional instructions to express structured control flow. Load/store instructions are used to access declared variables, which includes all input/output (IO). Intermediate results bypassing load/store use static single-assignment (SSA) representation. Data objects are represented logically, with hierarchical type information: There is no flattening of aggregates or assignment to physical register banks, etc. Selectable addressing models establish whether general pointer operations may be used, or if memory access is purely logical.

</blockquote>

Okay great, what about the goals for it :

<blockquote class="stride-quote">

> SPIR-V has the following goals:
>
> * Provide a simple binary intermediate language for all functionality appearing in Khronos shaders/kernels.
> * Have a concise, transparent, self-contained specification (sections [Specification](https://registry.khronos.org/SPIR-V/specs/unified1/SPIRV.html#Specification) and [Binary Form](https://registry.khronos.org/SPIR-V/specs/unified1/SPIRV.html#Binary)).
> * Map easily to other intermediate languages.
> * Be the form passed by a client API into a driver to set shaders/kernels.
> * Support multiple execution environments, specified by client APIs.
> * Can be targeted by new front ends for novel high-level languages.
> * Allow the first steps of compilation and reflection to be done offline.
> * Be low-level enough to require a reverse-engineering step to reconstruct source code.
> * Improve portability by enabling shared tools to generate or operate on it.
> * Reduce compile time during application run time. (Eliminating most of the compile time during application run time is not a goal of this intermediate language. Target-specific register allocation and scheduling are still expected to take significant time.)
> * Allow some optimizations to be done offline.

</blockquote>

WAIT! What if... we could extend the spec...

![thinking](/images/blog/2024-11-10-spirv2/thumbnail_Youness3.png)


<blockquote class="stride-quote">

> SPIR-V can be extended by multiple vendors or parties simultaneously:
>
> * Using the [**OpExtension**](https://registry.khronos.org/SPIR-V/specs/unified1/SPIRV.html#OpExtension) instruction to add semantics, which are described in an extension specification.
> * Reserving (registering) ranges of the token values, as described further below.
> * Aided by instruction skipping, also further described below.

</blockquote class="stride-quote">

WOW! Now we're cooking! 🍽️

Here's the main idea :

1. We extend the SPIR-V specification with our own instruction set, telling Stride how to mix SPIR-V files together
2. We produce partial SPIR-V bytecode for those mixins, since mixins only contain partial code
3. We mix-in together those partial SPIR-V files at runtime, or offline

Using SPIR-V is not going to be any faster than using GLSL or HLSL, those languages already have very performant compilers, but for SDSL, it would make a huge difference. The tree structure manipulation we have is suboptimal and .NET is faster at manipulating buffers anyway, but using SPIR-V would make sure we process only binary buffers and allow us to potentially make all shader front-end processing offline, we would effectively skip the whole front-end written in C# at runtime, huge win for us. Now we just need an...

## Implementation

### The easy way

The first instinct I had was to lookup for some libraries to generate SPIR-V bytecode with some constraints :

* It should give us the ability to extend SPIR-V to support our mixin system
* It should be easy to integrate in the engine and easy to package with games, the new shader compiler should not add more complexity to the engine
* The libraries should be a native, with which we can easily generate bindings, or written in C#
* If written in C# it should be AOT compatible, for potential future console support.
* It should also be fast, or use the recommended practices to run fast

Searching through the web there are many ways to go about it. The first one I've considered was LLVM, there was an ongoing work to add SPIR-V generation, this seemed like a neat idea but was nowhere near ready.

Shaderc and SPIR-V Tools have some SPIR-V generation capabilities to some degrees but from C# it would be hard to extend the SPIR-V definition. It has great support nonetheless, and our friends over at Silk.NET have some bindings for these tools.

Another one was the Nintendo Switch emulator Ryujinx, written in C#, it can generate SPIR-V on the fly to translate/compile the console's shaders. They have generated C# code based on the SPIR-V headers and specification and are using it to assemble some SPIR-V modules.

I decided to start from this Ryujinx code and made a little proof of concept by writing a little tool that takes the output of Stride's parser and convert it into shader modules. It only supported a very tiny subset of SDSL but it was enough to prove the compiler can be made, and to remind me that I do not know SDSL nor SPIR-V that well, and the Ryujinx code was not exactly suited for Stride. But then, the most intrusive thought a dev can have just crept in my mind...

![creeping](/images/blog/2024-11-10-spirv2/thumbnail_Youness1.png)

### "I should rewrite it from scratch..."

And make sure it fits our needs, the constraints i've listed in the previous section. The Ryujinx code at the time would do a lot of needless allocation as instructions were represented by classes in a list, something we could have changed by just representing instructions by a struct stored in a list/buffer of integers, these buffers could be rented from a pool etc.

As I went through the code, I started drawing ideas on how to improve things here and there and little by little the Stride SPIR-V took shape.

### Buffers and instructions

According to the specification, instructions are made out of words/integers, they have a variable size and the size of the instruction is written in the high 16 bits of the first word.

Instructions would be represented as slices of this buffer and to access those instructions we would need to iterate through this buffer.

IT'S CODING TIME!


![onfire](/images/blog/2024-11-10-spirv2/thumbnail_Youness2.png)

```csharp

// A RefInstruction will hold a Span and some cool methods and tools to extract information from this instruction. 
// We could also create an Instruction struct containing a Memory<int> and doing the same...
public ref struct RefInstruction(Span<int> words)
{
    public Span<int> Words { get; } = words;
    // ...
}

// A buffer class to represent our SPIR-V buffer, disposable because we're using MemoryOwner from the high performance community toolkit
public class SpirvBuffer : IDisposable
{
    // This will represent words and we'll extract instructions from it by taking Span<int> slices
    public MemoryOwner<int> Words { get; }
  
    public Enumerator GetEnumerator() => new(this);

    // An enumerator for our instructions
    public ref struct Enumerator(SpirvBuffer buffer)
    {
  	    int position = 0;
        // We're just creating a RefInstruction which wraps a Span<int> to help us process the slice of words
	    public RefInstruction Current => new(buffer.Words.Span[position..(position + buffer.Words.Span[position] >> 16)]);

        public bool MoveNext()
        {
            // A simple advance, we read the size in the high bits, and just skip words based on this size.
            position += buffer.Words.Span[position] >> 16 < buffer.Words.Length;
            return position < buffer.Words.Length;
        }
    }

    public void Dispose() => Words.Dispose();
}
```

According to the specification, instructions can have a variable number of operands and each operands can be one or multiple words. The simplest way to extract operand information from this slice is to generate C# source code with information on how to parse each instructions based on its type and size.

And with just that, we can parse SPIR-V and even write our own SPIR-V disassembly tool!

### Generation

Now that we can load SPIR-V and parse it, the next step is to be able to write instructions. Fortunately for us, the SPIR-V headers repository provide a C# file containing all the enums and constants needed for instructions operands and some JSON files describing instructions and their operands as well as if the operands are optional or have to be passed as an array of values. With a few more, we can generate methods to add or insert instruction in a buffer!

Here's an excerpt from the current unified core grammar of SPIR-V and its corresponding generated C# code :

```json
{
      "opname" : "OpFAdd",
      "class"  : "Arithmetic",
      "opcode" : 129,
      "operands" : [
        { "kind" : "IdResultType" },
        { "kind" : "IdResult" },
        { "kind" : "IdRef",        "name" : "'Operand 1'" },
        { "kind" : "IdRef",        "name" : "'Operand 2'" }
      ],
      "version": "1.0"
}
```

```csharp
public static Instruction AddOpFAdd(this SpirvBuffer, IdResultType resultType, IdRef operand1, IdRef operand2)
{
    // Extend the buffer and put the data needed
}
```

After going through the core and the glsl grammar, we end up with a library that can both parse and assembler SPIR-V.

### Extending SPIR-V

This one was the easiest step, everything was already there, we just need an additional JSON grammar file specially made for SDSL and the generator will give us the necessary code to add those instruction, there's really nothing else to it!

What was left is creating a little tool that can read those extensions and pre-process many SPIR-V together to generate a valid SPIR-V module that can be consumed by Vulkan, OpenGL, WGPU and soon DirectX 12. I have made a prototype that works quite well but can be improved in the future, it's not a complicated task, it just takes time and efforts.

Finally we can make sure we can generate SPIR-V mixins from the AST generated by the current Stride shader system. This should be easy, right? RIGHT?

## The Irony

The current shader parser was made for the specific use case of mixin abstract trees. Modifying the code would be a huge endeavor as I would have to dive into what's existing and try my best to understand what i can change without breaking anything, worse than that, the parser was written with Irony, a very good C# library to help anyone parse things in an LALR fashion, but with a lacking documentation and, in my personal opinion, has an "easy to write, hard to read" kind of API.

I started working on updating the abstract syntax tree types as well as the parser, it was becoming painful by the minute, and then... the most intrusive thought a dev can have just creeped in my mind... AGAIN!!!

But that's for another blog post, so much happened since last year and this blog post is getting long. 😀

## Conclusions

Writing this SPIR-V library was very fun, I've learned a lot about SPIR-V and some of the possible use cases for it in the context of Stride. As you might have imagined, this was the easy part of this shader system rewrite. In the next installment we'll see the little adventure I went through to make the most of our shader system!

NB: The code should be available in the [SDSL repository of Stride](https://github.com/stride3D/SDSL). Hopefully it'll be merged in the Stride repository itself in the future!
