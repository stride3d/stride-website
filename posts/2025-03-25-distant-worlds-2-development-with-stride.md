---
title: "A Look Inside Distant Worlds 2: Developing with the Stride Engine"
author: vaclav
popular: true
image: /images/blog/2025/distant-worlds-image.webp
tags: ['Game']
---

Distant Worlds 2, the sequel to the acclaimed 4X strategy game Distant Worlds: Universe, was developed by Code Force and published by Slitherine. In this blog post, the developers answer key questions from the Stride community, offering insights into their experience using the Stride engine to bring their ambitious galaxy-spanning strategy game to life.

---

<div align="center">
    {% img 'Distnat Worlds 2' '/images/blog/2025/distant-worlds-image-2.gif' %}
</div>

Table of Contents:

[[TOC]]

https://www.youtube.com/@SlitherineGames/videos

## Engine and General Development

#### Why did you choose Xenko/Stride over other alternatives for Distant Worlds 2?

Our requirements for the DW2 game engine were:

- Full support for all features of C#/.NET
- High quality rendering, also allowing for the use of custom shaders
- Good asset pipeline support

Stride handles all of these areas very well.

One of Stride’s major strengths is how it integrates with .NET: it is nearly completely written in C# itself, and it stays up-to-date with .NET version releases.

You are not locked into any specific approach to writing code. You have full access to all parts of the .NET environment. You don’t have to use scripting tied to a specific custom version of .NET.

Instead you can simply make your own implementation of the `Game` class, overriding the `Update` and `Draw` methods from the base class. That’s the basic approach we took with DW2. We use Stride in two main ways for DW2:

- Rendering engine, using PBR models and materials with the scene/entity system
- Content/Asset bundling, using the Stride [Game Studio](https://doc.stride3d.net/latest/en/manual/game-studio/index.html) to package assets for loading into the game

Beyond that we write all of our code as a standard .NET application with classes, structs, etc. We don’t use any scripts.

Additionally, because Stride is open-source, if you find an issue you can always fix it yourself. You can also figure out how things work by examining the source itself. Then, if required, modify things to work the way you want.

Stride also has great rendering with PBR materials. And it has a very nice shader model that allows you to write your own custom shaders.

#### How much modification was needed to adapt the engine for your needs? How difficult was this process for the developers involved?

We started experimenting with Stride back when it was called [Paradox](https://en.wikipedia.org/wiki/Stride_(game_engine)), around version 1.2. So there wasn’t much documentation back then. We had to just figure things out by examining the source. [Documentation](https://doc.stride3d.net/latest/en/index.html) improved as the engine progressed through the 1.x versions, and became Xenko.

A key requirement for DW2 was to mix entity-level rendering for units (ships and bases) with custom shaders for the larger galactic environment.

Most of the DW2 environment uses custom procedural shaders to render things like planet surfaces, stars, nebulae and other items ([see this article for details](https://www.matrixgames.com/forums/viewtopic.php?p=4881765#p4881765)).

However for the unit-level rendering we wanted to use Stride’s PBR materials and the scene/entity system. The artists would build space ship models and materials which we would load into a scene.

We achieved this by separating out the custom shader rendering into pre- and post-scene rendering in the `Game.Draw` cycle. So we built our own rendering classes that inherited from [`SceneRendererBase`](https://doc.stride3d.net/latest/en/api/Stride.Rendering.Compositing.SceneRendererBase.html) and inserted them into the [`GraphicsCompositor`](https://doc.stride3d.net/latest/en/api/Stride.Rendering.Compositing.GraphicsCompositor.html).

This also allowed us to have rendering layers that excluded the post-processing effects (bloom, lens flare, etc). This was especially useful for the user interface.

There may be a better way to do all of this in Stride now, but that’s what worked for us.

#### We noticed references to both Xenko and Stride in the build. Are there specific reasons older files were retained during the transition?

Any remaining Xenko files are just a holdover from our development history. We should probably remove them 🙂.

#### How frequently do you update the engine for your project?

Initially we had some small custom changes to better support our pre- and post-scene rendering mentioned above.

When we went more heavily multi-threaded we made some updates in some areas of Stride to better handle this.

And whenever we want to move forward in .NET versions we have updated Stride to whatever version we were moving into (5, 6, 7, 8).

And as Stride itself progressed we have periodically pulled in some of those changes.
Stride’s approach to .NET has been a big plus. It’s quite amazing that we could move Stride to a new version of .NET ourselves.

#### Did you create issues on the Stride GitHub repository?

We have not done that. Much of our changes are very specific to Distant Worlds.

#### What were some notable technical hurdles in using Stride, and how did you overcome them?

Early on, the lack of documentation made progress slower. But this has improved a lot over time.

We worked quite a bit on getting Stride to handle heavily multi-threaded scenarios. We had to make some areas more robust and defensive, particularly around null-checking and iteration of lists.

## User Interface

#### Which library did you use for UI elements in Distant Worlds 2?

We initially tried out the built-in user interface elements of Xenko. But for various reasons we decided to instead build our own user interface system.

So for UI rendering we took the `SpriteBatch` class and built some basic controls: buttons, panels, textboxes, etc.

The input side is just reading keypresses and mouse actions from the `InputManager` class.

From there we added more functionality as we needed it.

Near the start of development it’s often hard to know exactly what you’ll need in the user interface. You have to tweak and extend things as you go. So it is important to have deep control over all parts of the user interface. For us that meant writing our own UI system.

I think this happens quite frequently in games, because they often have very unique and specific UI requirements. So it’s important to have full control over how the UI works, which might mean writing it yourself.

For DW2 we also had a requirement that the user interface be completely scalable. This was a major weakness of DW1, where the UI was fixed-size. So in DW1, as screen resolution increased, all the text became smaller and harder to read.

With DW2, building our own UI system allowed us to bake scaling into everything. So you can change UI scale in DW2 from the game settings and everything just automatically resizes and repositions, regardless of resolution.

#### What led you to choose the current UI solution over others?

See above.

#### Were there any features you found lacking in Stride for UI, and how did you address these gaps?

See above.

#### How is the research screen (e.g., item order, dependencies) created? Are these elements procedurally generated, or are they manually crafted?

How did you create the research graph, including arrows and other visual elements?

The Research screen is custom-rendered. Most of the data in DW2 is heavily moddable, and the tech trees are a big part of this. So the rendering for research projects has to be data-driven.

We use some `SpriteBatch` helper classes to draw the lines and arrows between projects. The projects themselves use some basic textures for the main body.
 
## Artists and Asset Creation

#### How did the artists find the asset creation process when working with Stride?

**Elliot:** DW2 uses lots of ship and base models with all of their associated textures. We utilize all the standard material features like Diffuse maps, Normal maps, Metalness maps, Emissive maps, Ambient Occlusion and Gloss maps.

So the artists use Stride Game Studio to simply bundle all the assets together before handing them over to the development side to use in-game.

**Kevin:** It works well and is easy and intuitive. I like that there's multiple ways to do the same thing (i.e. clicking and dragging or using the 'click to add' interface for assigned textures for instance) 

**Alex:** The workflow is a lot like Unity or Unreal. It’s pretty simple for making PBR 3D models. The material creation is flexible and easy to pick up if you know Unity. It feels smooth and straightforward overall. I found it quick to get started with and the tools don’t get in your way.



