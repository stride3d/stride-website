---
title: "Investigating SPIR-V for the shader system - Part 4"
author: youness
popular: false
image: /images/spir.png
tags: ['.NET', 'Shaders']
---

In this blog post, we have a big announcement to make. We'll also talk about the implementation of the mixin system as well as the integration of the new shader system in Stride, what it means and what we can expect for its future.

---

If you're interested in the other parts of this blog series :
  - [Part 1](/blog/investigating-spirv-for-the-shader-system/) An introduction to the project
  - [Part 2](/blog/investigating-spirv-for-the-shader-system-part-2/) we parse and assemble some SPIR-V
  - [Part 3](/blog/investigating-spirv-for-the-shader-system-part-3/) we write a new parser for SDSL
  

Table of Contents:

[[TOC]]


## Big Announcement

I won't keep you waiting much, the new shader system using SPIR-V is [officially merged](https://github.com/stride3d/stride/pull/3134) in Stride's version 4.4 !

You can try it right away by using the latest version of the engine. The new shader system is designed to behave just like the previous one, but with improved platform compatibility and performance.

It’s also not limited to Stride, you can reuse it in your own projects if you need it!

And now, on to what was worked on ...

## Architecture overview: how the new shader/effect compiler works

At a high level, shaders are written through two languages, SDSL and SDFX. SDSL, as we already saw, contain the shader code itself and offer some mixin capabilities, while SDFX provides a DSL to conditionally compose those shaders together based on parameters provided at compile time.

The material system, part of the default forward renderer, uses the mixin system to define each part of the computation. For example, when you switch from the Lambert diffuse model to the Cel Shading model, the shader compiler will just switch the imported mixin `MaterialSurfaceShadingDiffuseLambert` to `MaterialSurfaceShadingDiffuseCelShading` and compiles the new permutation.

Internally, the pipeline now looks roughly like this:

* A virtual file system reading and writing both SDSL/SDFX and shader bytecode 
* A shader and effect parser 
* A mixin compiler that compiles shaders into separate extended SPIR-V snippets
* An effect compiler that merges those SPIR-V snippets based on an SDFX file
* A translation module that converts SPIR-V to HLSL/DXIL or MSL based on the platform we are at.

Stride uses these components to generate SPIR-V bytecode and cache them for future use.


## The effect system: what it is and how it is written

The best way to think about SDFX is this: an `.sdfx` file is a small program that takes a parameter collection and produces a `ShaderMixinSource` ready to be compiled. [Stride’s documentation](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/effect-language.html) is very explicit about that model. The effect language is sort of an executable script that generates one or multiple shader permutations.

A typical SDFX file includes five core language features:

* **`effect` and `partial effect`** to describe effects and compose full permutations for renderers
* **`params` blocks** to declare effect parameters and defaults.
* **`using params`** to import parameter sets (e.g. : `MaterialParameters`).
* **`mixin` statements** to include shader building blocks.
* **`mixin compose` statements** to assign implementations into composition slots exposed by other mixins.

In practice, the effect system sits above the shader mixin system and is a solution to avoid having to write uber shaders by hand. It also helps knowing which permutations we can pre-compile to speed up game loading.


## The future of SDSL

SDSL has been rewritten to be conformant to the language specification it used in the past. It's specification that was created around HLSL when Direct3D 12 did not exist. From now on, the language is free from its HLSL roots and can evolve independently from it.

The best part is that SDSL can now be used outside of Stride quite easily and I hope other people will find some value in using it.

## Conclusion

This has been a long journey. Not a few months of experimentation, but a multi-year effort to rethink that specific part of Stride we knew needed some love to become :

* A bit more predictable
* A bit more robust
* A bit easier to reason about

One of the motivations behind separating the compiler and targeting SPIR-V directly was to make it something that other people, especially C# developers, can take, understand, and reuse. There are not that many shader toolchains in the .NET ecosystem that try to go this far in terms of composition and structure, and hopefully this can be a useful building block for others experimenting with rendering, tooling, or domain-specific languages on top of shaders.

And beyond the technical side, I hope people coming across this blog post will enjoy making games in Stride!