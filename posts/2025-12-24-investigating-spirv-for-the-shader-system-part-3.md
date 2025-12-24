---
title: "Investigating SPIR-V for the shader system - Part 3"
author: youness
popular: false
image: /images/spir.png
tags: ['.NET', 'Shaders']
---

In this blog post, we will focus on how the new SDSL parser has been implemented through writing a prototype expression parser as an example. We will see how this can be possible without sacrificing performance and allocating the least amount of memory possible. And finally see how this improved on the current shader parser system in Stride.

---

If you're interested in the other parts of this blog series :
  - [Part 1](/blog/investigating-spirv-for-the-shader-system/) An introduction to the project
  - [Part 2](/blog/investigating-spirv-for-the-shader-system-part-2/) we parse and assemble some SPIR-V
  

Table of Contents:

[[TOC]]

So many things happened since the [the last blog post](/blog/investigating-spirv-for-the-shader-system-part-2/) but none were written in a blog post format, fortunately for me, with the holidays I have time to tell more about it.

## Preface

Last time we went through SPIR-V and how to parse/assemble SPIR-V using C#, this time we'll see how the new SDSL parser was built from the ground up. I'll go through the implementation of a small parser to illustrate the design chosen for SDSL.

We're also keeping the same principles that this project started with : 

- Fast
- Low heap allocation
- Easy to update/modify

This post will show much more code, most of it will serve as an example, it won't always compile and might need some tweeking but can be used as a base to understand how the new SDSL parser works. 

## Why not using a library ? 

Why should we ? 🤔 

SDSL is not going to change much and we're only maintaining one language so we can write a simple parser that will only work for SDSL. 

Parsing a programming language is easy, the difficult part comes after parsing a language.

I've experimented twice with very powerful libraries, they were easy to use and would have us maintain fewer lines of code by sacrificing on speed and heap allocation.

The third experiment with parsing SDSL was with a handmade recursive descent parser, it was the easiest and fastest to implement and apparently used in major compiler frontends [like clang](https://discourse.llvm.org/t/where-can-i-download-the-ebnf-syntax-description-document-for-c-syntax-parser-by-clang/87614).

At the time, I hadn't had the chance of finding a proper (read *idiot proof*) explanation of how to implement a recurisve descent parser but I'd like to mention [Kay Lack's video](https://www.youtube.com/watch?v=ENKT0Z3gldE) which is the clearest explanation I could ever found on this subject. I recommend you give a watch to have a better understanding of what will be written.

## The 3rd experiment

It started as an expression/statement parser to compare with the current parser. In our case statements are what takes the most processing in SDSL, a low hanging fruit that we can reach fast and benchark against our current shader system. It ended up working so well it became the main parser for SDSL !

To avoid allocation, we will avoid creating classes as much as we can except for the abstract syntax tree (AST). 

### The tree

We'll define some basic nodes for our AST, the first will be an abstract node and we'll derive everything from it.

```csharp
// This struct will retain data of which part of text a node in our AST will represent
public record struct TextLocation(string Text, Range Range);

// Each node will have to store location
public abstract class ASTNode(TextLocation location)
{
    TextLocation Location { get; set; } = location;
}

// Expressions are values or a combinations of them with 
public abstract class Expression(TextLocation location) : ASTNode(location);

// Literals will contain the basic values we'll be dealing with in expressions
public abstract class Literal(TextLocation location) : Expression(location);

// Such as :

public class IntegerLiteral(long value, TextLocation location) : Literal(location);
public class FloatLiteral(double value, TextLocation location) : Literal(location);

// And others but this will be enough, I'm also leaving implementation details out for simplicity

// We'll first focus on binary operations, but there are unary and ternary operations too

public enum Operators 
{
    None,
    Multiply,
    Divide,
    Moderand,
    Add,
    Subtract,
    LeftShift,
    RightShift,
    //...

}


public class BinaryExpression(Expression left, Operator operator, Expression right, TextLocation location) : Expression(location);



```

### Scanning code

For our parser we need a construct that will keep track of the position of the parser in the text. Then we'll need to define our rules which, when matched, will advance our position in the text and when not, will reset the position. For that we create a scanner object with two parameters, the code being scanned and the position we're at.

Our parser rules will be written as plain function, they don't need to be abstracted any other ways as functions are reusable enough and we don't allocate anything on the heap by calling a function.

We should still be mindful of the limitations of recursion!


```csharp
public ref struct Scanner(string code)
{
    public string Code { get; } = code;
    public int Position { get; set; } = 0;

    // Sometimes we'd like to peek one or more characters to reject rules early
    public int Peek() => (int)Code[Position];
    public ReadOnlySpan<char> Peek(int size) => Code[Position..(Position+size)];

    public bool Match(string matchString, bool caseSensitive)
    {
        // The implementation is fairly straightforward :) 
    }
}
```


### Building blocks

For our parser, the rules will be functions returning a boolean, taking as parameters the scanner and an `out` reference to a node of the tree.

Here's an example for the integer parser :

```csharp
// A utility function that checks if the char is a digit with a specific value or in a range

bool IsDigitValue(char c, int value)
    => char.IsDigit(c) && (c - '0' == value);

bool IsDigitRange(char c, Range range);


bool ParseIntegerLiteral(ref Scanner scanner, out IntegerLiteral literal)
{
    // We keep track of the position before we match anything
    // We can also create copies of the struct instead by storing it in different variables
    // but I prefer copying the least amount of data possible
    var start = scanner.Position;
    // If we get a zero, that's our value :D, integer literals never start with a zero
    if(IsDigitValue(scanner.Peek(), 0))
    {
        scanner.Position += 1;

        literal = new(0, new((int)(scanner.Peek() - '0'), new(scanner.Code, position..scanner.Position)));
        return true;
    }
    // We keep scanning until there is no digits
    else if(char.IsDigit(scanner.Peek()))
    {
        while(char.IsDigit(scanner.Peek()))
            scanner.Position += 1;

        literal = new(0, new(int.Parse(scanner.Code[position..scanner.Position]), new(scanner.Code, position..scanner.Position)));
        return true;
    }
    // If we don't match any digit then we have to go back in the starting position
    // This is not necessary here so we can omit this line of code
    // In some cases this line of code will prove very relevant
    scanner.Position = start;

    // In some cases we never allocate the node in the heap because we haven't matched our rules
    // This is perfect for reducing allocation in our case
    literal = null!;
    return false;
}

```


We can derive this integer parser into a float parser quite easily, each language has its own rules of writing floating point numbers and it's up to the author of the language to decide which one is best.


### Abstractions

After implementing the floating point parser we can abstract both those parsers into one encompassing everything very simply. 


```csharp
bool ParseNumberLiteral(ref Scanner scanner, out NumberLiteral number)
{
    var start = scanner.Position;
    if(ParseIntegerLiteral(ref scanner, out var integerLiteral))
    {
        number = (NumberLiteral)integerLiteral;
        return true;
    }
    else if(ParseFloatLiteral(ref scanner, out var floatLiteral))
    {
        number = (NumberLiteral)floatLiteral;
        return true;
    }
    // Same as before :)
    scanner.Position = start;
    number = null!;
    return false;
}

```


We can even go one step higher and use this number parser to create our first binary operation parser :

```csharp


// A utility function that resets the position. We can modify it to catch errors
bool ExitParser<TNode>(ref Scanner scanner, out TNode node, int position) where TNode : ASTNode;

// A utility function that looks ahead by skipping some white space.
// Looking ahead is something that happens quite often when parsing SDSL.

bool FollowedByAny(ref Scanner scanner, string chars, out char value, bool withSpaces = false, bool advance = false);


bool Spaces(ref Scanner scanner, int min = 0)
{
    var start = scanner.Position;
    while(char.IsWhiteSpace(scanner.Peek()))
        scanner.Position += 1;
    if(scanner.Position - start >= min)
        return true;
    else
    {
        scanner.Position = start;
        return false;
    }
}

bool Mul(ref Scanner scanner, out Expression expression)
{
    // Mulitplicative expressions can be stringed together, so we should use a loop
    char op = '\0';
    expression = null!;
    var position = scanner.Position;
    do
    {
        Spaces(ref scanner, 0);
        // If we have reached an operator and have already parsed a first expression
        if (op != '\0' && expression is not null)
        {
            // We nest the multiplications by creating a binary expression containing the binary expression we just finished parsing
            if (ParseNumberLiteral(ref scanner, out var number))
                expression = new BinaryExpression(expression, op.ToOperator(), number, scanner[position..scanner.Position]);
            else return ExitParser(ref scanner, out expression, position);
        }
        // In the case we haven't reached an operator
        else if (expression is null && op == '\0')
        {
            // Our number becomes our result expression
            if (ParseNumberLiteral(ref scanner, result, out var number))
                expression = number;
            else return ExitParser(ref scanner, out expression, position);
        }
    }
    // We keep parsing until we don't see any multiplicative operators
    while (FollowedByAny(ref scanner, "*/%", out op, withSpaces: true, advance: true));
    if (expression is not null)
        return true;
    else return ExitParser(ref scanner, result, out expression, position, orError);
}

```

We can also write the addition/subtraction parser, following the operator precedence : 


```csharp
bool Add(ref Scanner scanner, out Expression expression)
{
    char op = '\0';
    expression = null!;
    var position = scanner.Position;
    do
    {
        Spaces(ref scanner, 0);
        if (op != '\0' && expression is not null)
        {
            if (Add(ref scanner, out var mul))
                expression = new BinaryExpression(expression, op.ToOperator(), mul, scanner[position..scanner.Position]);
            else return ExitParser(ref scanner, out expression, position);
        }
        else if (expression is null && op == '\0')
        {
            if (Mul(ref scanner, result, out var prefix))
                expression = prefix;
            else return ExitParser(ref scanner, out expression, position);
        }
    }
    while (FollowedByAny(ref scanner, "+-", out op, withSpaces: true, advance: true));
    if (expression is not null)
        return true;
    else return ExitParser(ref scanner, result, out expression, position, orError);
}

```

The sharpest ones will notice I'm not using recursion for everything, i'm using a while loop. This is a small optimisation called [precedence climbing](https://eli.thegreenplace.net/2012/08/02/parsing-expressions-by-precedence-climbing) to avoid to many recursions when parsing long and complex expressions.

And that's the gist of it! The rest is about adding all the other elements of the language. For SDSL that was about parsing a subset of HLSL, add the SDSL extra features and digging through all of the source code to find any quirks of the language and make sure we can handle them.

In the future SDSL will be less reliant on HLSL syntax and follow one more similar to C# to avoid any confusion when switching between the two languages.

## Benchmarks 

It wouldn't mean anything without benchmarks, so let's have a typical SDSL shader to benchmark for.


```hlsl
namespace MyNameSpace
{
    shader Parent 
    {

        struct MyStruct {
            int a;
        };

        stream int a;

        stage abstract void DoSomething();

        void Method()
        {
            int a = 0;
            float4 buffer = float4(1,3, float2(1,2));
            float4x4 a = float4x4(
                float4(1,2,3,4),
                float4(1,2,3,4),
                float4(1,2,3,4),
                float4(1,2,3,4)
            );
            for(;;)
            {
                if(i == 5)
                {
                    Print(i);
                }
            }
            int b = (a - 10 / 3 ) * 32 +( streams.color.Normalize() + 2);
            if(a == 2)
            {
            }
        }
    };
}
```

After some text crunching we get these numbers!

DRUM ROLL 🥁 ...

```pwsh
AMD Ryzen 7 3700X 3.60GHz, 1 CPU, 16 logical and 8 physical cores
.NET SDK 10.0.101
  [Host]     : .NET 10.0.1 (10.0.1, 10.0.125.57005), X64 RyuJIT x86-64-v3
  DefaultJob : .NET 10.0.1 (10.0.1, 10.0.125.57005), X64 RyuJIT x86-64-v3

| Method         | Mean     | Error    | StdDev   | Gen0    | Gen1   | Allocated |
|--------------- |---------:|---------:|---------:|--------:|-------:|----------:|
| ParseShaderOld | 151.3 us | 1.490 us |  1.16 us | 22.2168 | 5.1270 | 183.17 KB |
| ParseShaderNew | 32.28 us | 0.295 us | 0.276 us |  1.6479 |        |  13.78 KB |
```

We run 5 times faster and allocate 20 times less memory than before. Objects allocated are not promotted to Gen1.

That's exciting news to me! We could theoritically parse 4 more shaders while in a single core without worrying too much about GC pauses. This will surely improve startup times for the Stride engine!


## Conclusions

Let's check our goals again ...

- ✅ Fast
    5x faster allows me to stamp that parser with ✨*Blazingly fast*🚀
- ✅ Low heap allocation
    20x less allocation is going to help us a lot, especially during runtime compilation
- ✅ Easy to update/modify
    Going the functional way has only made it easier to make changes. We also own all our parsing code, nothing is hidden behind API which is great!

I could leave with a very nonchalant "Code speaks for itself" but I have to convince you that writing a handmade parser for your programming language is almost always the best decision you could make, there are many ways to write one but recursive descent parsers can be a very helpful start until you have a very specific need for your language.

I'm excited to show more of SDSL's new compiler progress and writing that parser was a huge endeavor, espcially going through two different implementations before settling to what it is now.

In the next blog post we'll see how bridging the parser with the SPIR-V assembler was done, hopefully with an example of a working version of the compiler.

Thanks for reading!
