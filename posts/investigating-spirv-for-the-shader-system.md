---
title: "Investigating spir-v for the shader system - Part 1"
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

When a game has to render on the screen, it starts by preparing the data on the GPU and then sends shaders with commands. The GPU then executes those commands and if everything goes well, the game ends with a lovely picture drawn on the screen !
This single call of a GPU is called a `draw call`.

![shader overview](/images/blog/spirv/shaders-explanation.png)

It can be simplified to this view. There is a first stage called `Vertex stage` which is meant to compute vertices and make sure they are transformed into data that can be rasterized by your GPU, and a final stage called `Pixel stage` or `Fragment stage` that takes the rasterized output of the rasterizer and computes color for each pixel on the screen based on which triangles they belong to.

In both stages, you can provide textures/images and data through buffers, this can help give more details to your rendering, or help you compute more complicated things.

## Rendering in game engines

Drawing a single mesh is simple, one buffer of vertices, maybe some textures, do a draw call and marvel at the screen. Repeat it many times and you get a video, very useful to make video games.

In game engines, objects being drawn the same ways are grouped into `materials`. A material can be seen as a recipe for drawing a mesh with ingredients like shader code, textures, vertices and other informations.

Having many different materials implies creating many shader source code, and depending if you use [forward or deferred shading](https://learnopengl.com/Advanced-Lighting/Deferred-Shading), you might need reuse code from one file to another leading to some duplicate code.

To solve this problem, all game engines have developped shader systems that help create permutation of shader code depending the material you're using. It helps re-use code you've already written, which speeds up development gives you the power to organize your code in more manageable ways!

A good example of that are [shader graphs from Unity](https://unity.com/features/shader-graph) or [the material editor in Unreal](https://docs.unrealengine.com/5.0/en-US/unreal-engine-material-editor-ui/), whenever you add a block/function to the graph, it reuses shader code already written, to create a new permutation.

## How does it work in Stride ?

Stride has its own shader language called SDSL which stands for **S**tri**D**e **S**hader **L**anguage.

SDSL uses a very smart system of composition and inheritance, similar to object oriented programming. You can learn more about it [through the manual](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/index.html).

### The barriers

To create permutations you need to be aware of the many limitations you will face while writing code for GPU.

#### GPUs are all different

As obvious as it sounds, it needs to be reminded. Whenever you write code for your GPU you have to be aware that it will not work for all other GPUs.

10 years ago, two languages were the most used for writing shader code : HLSL and GLSL.
In the case of OpenGL GPU vendors would provide you with their own compilers to work for their GPUs through different drivers. A valid code for one compiler would be a syntax error for another. It was a big mess!

Stride was created during this period and it was designed to run on a wide variety of devices.

The solution chosen for creating code permutations that could work on many different machine was transpilation. Text would be parsed in abstract syntax trees and the text would be translated from one language to another by manipulating those trees. [To have a better idea of how abstract syntax tree work, this playlist will definitely help !](https://www.youtube.com/watch?v=cxNlb2GTKIc&list=PLTd6ceoshpreZuklA7RBMubSmhE0OHWh_&pp=iAQB)

#### Drivers are not all the same

Drivers can be seen as a front-end API to use the GPU. They have different paradigm and logic which may result in your shader code needing to be different across different drivers.

Here's a table of which language is supported by which machine depending on the driver used. I chose the most used machines for gaming.

Note that some APIs are tied to the machine you're developing for, adding more complexity to the shader system, needing to handle GPUs that have very specific features.
<br/>

|                 | Direct3D | Vulkan    | OpenGL | Metal | PSGL | NVN            |
|-----------------|----------|-----------|--------|-------|------|----------------|
| Windows         | HLSL     | HLSL/GLSL | GLSL   |       |      |                |
| Linux           |          | HLSL/GLSL | GLSL   |       |      |                |
| Mac/iOS         |          |           |        | MSL   |      |                |
| Android         |          | HLSL/GLSL | GLSL   |       |      |                |
| Playstation 4/5 |          |           |        |       | PSSL |                |
| Nintendo Switch |          | HLSL/GLSL |        |       |      | NVN language ? |
| XBOX Series X/S | HLSL     |           |        |       |      |                |
<br/>
<br/>

#### Performance Cost

Managed languages like C# are well known to be slower with string objects since they treat them as immutable. On top of that, tree structures, especially the one used for shader compilation in Stride, tend to perform very slowly and are prone to be slow and work against the GC.

## Why investigating spir-v?

Three things happened in the past 10 years, Vulkan was released with a new kind of bytecode shader language called spir-v, .NET core came out with a new high performance feature for operating on slices of array (something that C# is way better at than processing string objects), namely `Span<T>`, and most importantly, tools like [spirv-cross](https://github.com/KhronosGroup/SPIRV-Cross) and [naga](https://github.com/gfx-rs/wgpu/tree/trunk/naga) were created as a mean to translate shaders through spir-v.

It was clear for everyone that we had to investigate how we could compile SDSL to spir-v and use all those very performant tools to transpile SDSL to other languages.

## Problems ahead

SDSL is a very peculiar language and shifting from processing tree structures to processing segments of byte code is a great endeavor, especially for an engine.

The following parts of this series of blog posts will focus on how such system can be made thanks to many new C# and .NET features that came out since .NET Core.

## Summary

Embracing spir-v for Stride's shader system will hopefully empower us with a better control over the shader language but also improve performance for shader compilation!

Thank you for reading!
