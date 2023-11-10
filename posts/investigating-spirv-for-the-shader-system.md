---
title: "Investigating spir-v for the shader system"
author: youness
popular: false
image: /images/spir.png
tags: ['.NET', 'spir-v', 'shader', 'hlsl', 'glsl', 'sdsl', 'compilation']
---

Let's investigate how the shader system works in Stride and how to make it better thanks to spir-v.
---

Table of Contents:

[[TOC]]

The Stride engine has a powerful shader system, helping users build very complex shaders thanks to its language features like composition and inheritance, and its C# integration through the very powerful material system.

## What are shaders ?

Simply put, they are typically snippets of codes that are run on the GPU, moslty written in C-like languages like GLSL and HLSL.

When a game has to render on the screen, it starts by preparing the data on the GPU and then sends shaders with commands. The GPU then executes those commands and if everything goes well, the game ends with a lovely screen !

## How does it work in Stride ?

To first understand how it works in Stride we have to know the many barriers we're facing.

Stride is meant to run on a wide range of devices, from computers to mobiles. For that we have to make sure our shaders can run on many kind of GPUs through different drivers.

There are 3 most used shader languages and they are, for some, tide to different kind of machines.

* For Windows machines, HLSL and GLSL are the most used languages through Vulkan, OpenGL and Direct3D drivers. Where HLSL with Direct3D is only available on Windows.
* For Linux and Android machines, Vulkan and OpenGL are the most used options.
* For Mac and iOS machines, MSL is used with Metal.

Since there is no one-size-fits-all solution, every game engine has to come up with a more complex solution that makes sure we have one shader language for every machines. A language that will either be transpiled or cross-compiled into another one.

This is where SDSL was born.

## SDSL and transpilation

For the sake of this article we won't dive into the language, but you can learn a lot more about SDSL [through the manual](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/index.html).
From here, the article will assume you have a high level view about how programming languages are compiled and knowledge about shader programming.

SDSL (StriDe Shader Language), was born for the need to transpile HLSL code to GLSL. It is heavily inspired from HLSL but with more features to simplify the process of creating complex shader computations.

The shader system has 3 sides to it, an effect system, a shader mixer and the transpilation.

The effect system will use the many different SDSL features to create uber-shaders/permutations for creating complex pipeline rendering.

Since HLSL and GLSL are very close to each other, all this mixing is done through the abstract syntax tree level(AST). There are very few modification on the code itself, most of the work is done for managing input/output of shaders.

The SDSL AST will then be transformed into HLSL or GLSL depending the graphics driver used.


## Why investigating spir-v?

Unfortunately for us, this complex transpilation involves issues regarding performance. Working with tree structures, especially with string data, makes computations very slow can introduce issues like defensive copies.

We would need tools to help us transpile this SDSL into other languages without going through tree structures, but maybe through arrays.

Three things happened lately, Vulkan was released with a new kind of bytecode shader language called spir-v and .NET core came out with a new feature for operating on arrays without loss of performance, namely `Span<T>`. And most importantly, spirv-cross was created as a mean to perform cross-compilation of shaders in a performant way. 

It was clear for everyone, we had to investigate how we could compile SDSL to spir-v and use tools like spirv-cross.

## Problems ahead

SDSL is a very peculiar shader language, using current spir-v tools to generate spir-v byte code would be extremely difficult to design given how spir-v has a very tight specification.
Another problem is that most spir-v tools are written in system languages like Rust/C/C++, which is another barrier for a .NET based game engine.

To be able to use spir-v to it's fullest we have to create a C#/.NET library from scratch, something that will help us assemble and manipulate spir-v bytecode the way SDSL works.

## Mise en bouche for Part 2 of this article

I've started to work on this issue not long ago through two projects : 

* [A new simplified parser for SDSL](https://github.com/ykafia/SDSLParser)
* [A spir-v assembler library for SDSL](https://github.com/ykafia/SoftTouch.Spirv)

Those will be the core subjects of part 2!

## Summary

Embracing spir-v for Stride's shader system will hopefully empower us with a better control over the shader language but also improve performance for shader compilation!

Thank you for reading!
