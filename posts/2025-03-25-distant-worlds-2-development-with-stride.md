---
title: "A look inside Distant Worlds 2: Development with Stride engine"
author: vaclav
popular: true
image: /images/spir.png
tags: ['Game']
---

Distant Worlds 2 is the sequel to the critically acclaimed Distant Worlds: Universe, a real-time space 4X strategy game developed by Code Force and published by Slitherine. In this blog post, the developers are answering questions from the Stride community about their experience developing Distant Worlds 2 with the Stride engine.

---

Table of Contents:

[[TOC]]

https://www.youtube.com/@SlitherineGames/videos

## Engine and General Development

### Why did you choose Xenko/Stride over other alternatives for Distant Worlds 2?

Our requirements for the DW2 game engine were:

- Full support for all features of C#/.NET
- High quality rendering, also allowing for the use of custom shaders
- Good asset pipeline support

Stride handles all of these areas very well.

One of Stride’s major strengths is how it integrates with .NET: it is nearly completely written in C# itself, and it stays up-to-date with .NET version releases.

You are not locked into any specific approach to writing code. You have full access to all parts of the .NET environment. You don’t have to use scripting tied to a specific custom version of .NET.

Instead you can simply make your own implementation of the Game class, overriding the Update and Draw methods from the base class. That’s the basic approach we took with DW2. We use Stride in two main ways for DW2:

- Rendering engine, using PBR models and materials with the scene/entity system
- Content/Asset bundling, using the Stride Game Studio to package assets for loading into the game

Beyond that we write all of our code as a standard .NET application with classes, structs, etc. We don’t use any scripts.

Additionally, because Stride is open-source, if you find an issue you can always fix it yourself. You can also figure out how things work by examining the source itself. Then, if required, modify things to work the way you want.

Stride also has great rendering with PBR materials. And it has a very nice shader model that allows you to write your own custom shaders.

### How much modification was needed to adapt the engine for your needs? How difficult was this process for the developers involved?

We started experimenting with Stride back when it was called [Paradox](https://en.wikipedia.org/wiki/Stride_(game_engine)), around version 1.2. So there wasn’t much documentation back then. We had to just figure things out by examining the source. Documentation improved as the engine progressed through the 1.x versions, and became Xenko.

A key requirement for DW2 was to mix entity-level rendering for units (ships and bases) with custom shaders for the larger galactic environment.

Most of the DW2 environment uses custom procedural shaders to render things like planet surfaces, stars, nebulae and other items (see this article for details: https://www.matrixgames.com/forums/viewtopic.php?p=4881765#p4881765)

However for the unit-level rendering we wanted to use Stride’s PBR materials and the scene/entity system. The artists would build space ship models and materials which we would load into a scene.

We achieved this by separating out the custom shader rendering into pre- and post-scene rendering in the `Game.Draw` cycle. So we built our own rendering classes that inherited from [`SceneRendererBase`](https://doc.stride3d.net/latest/en/api/Stride.Rendering.Compositing.SceneRendererBase.html) and inserted them into the [`GraphicsCompositor`](https://doc.stride3d.net/latest/en/api/Stride.Rendering.Compositing.GraphicsCompositor.html).

This also allowed us to have rendering layers that excluded the post-processing effects (bloom, lens flare, etc). This was especially useful for the user interface.

There may be a better way to do all of this in Stride now, but that’s what worked for us.
