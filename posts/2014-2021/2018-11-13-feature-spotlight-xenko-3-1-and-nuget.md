---
title: 'Feature Spotlight: Xenko 3.1 + NuGet'
author: virgile
tags: ['NuGet']
---

Discover the powerful features of Xenko 3.1, the latest update to the Stride 3D game engine. Learn how NuGet integration streamlines development and enhances your game creation experience. Dive into our detailed blog post now!

---

Today, I would like to highlight some work being done on Xenko.

Xenko 3.1 will bring some big changes in the way Xenko is packaged, distributed and consumed.

[[TOC]]

## Xenko 3.0: Welcome PackageReference!

Xenko was always a big proponent of NuGet: since first version, Xenko was distributed as a NuGet package.

However, due to limitations (hello packages.config and project.json!) we were leveraging NuGet more as a distribution medium than proper NuGet packages: Xenko up to 3.0 is still a monolithic single package and it would not work out of the box when referenced from Visual Studio without using launcher and Game Studio.

Xenko 3.0 paved the way by making Xenko compatible with the new project system (game projects were referencing Xenko using a `PackageReference`).

This Xenko "fat" package is still containing everything: Xenko runtime, editor, compilers, samples. Various features of Xenko are forced onto the users: UI, Physics, SpriteStudio, etc...

Additionally, Xenko assembly references are still manually added through complex target files rather than following package reference layout and see them where they should have been, nested inside the Xenko NuGet reference:

{% img 'GitHub' '/images/blog/2018-11-13-feature-spotlight-xenko-3-1-and-nuget/xenko-ref-old.png' %}

## Xenko 3.1: Enter Modular Xenko

Most of the changes discussed in this section are still in a prototype state, but should hopefully be merged soon in master.

### One Package per Assembly

Xenko 3.1 will bring Xenko more in line with a more proper way of organizing NuGet package: one package per assembly, with proper dependencies:

{% img 'GitHub' '/images/blog/2018-11-13-feature-spotlight-xenko-3-1-and-nuget/xenko-ref-new.png' %}

As a result, it is now possible to create a game project that references only the packages you want. Here are a few examples of "core" packages:

* `Xenko.Engine`: allows you to use core engine runtime (including its dependencies)
* `Xenko.Core.Assets.CompilerApp`: compile assets at build time
* `Xenko.Core.Mathematics` or `Xenko.Graphics`: yes, if you want to make a custom project only using Xenko mathematics or graphics API without the full Xenko engine, you can!
* `Xenko.Core.Assets`, `Xenko.Presentation` or `Xenko.Quantum`: all those piece of tech being used to build Xenko tooling are also available for reuse in other projects. Nothing prevents you from generating assets on the fly too!

Then, various parts of the engine will be distributed as **optional** packages:

* `Xenko.Physics`
* `Xenko.Particles`
* `Xenko.UI`
* `Xenko.SpriteStudio`
* `Xenko.Video`

If you don't reference those packages, they won't be packaged with your game either. In many situations, it will result in a smaller packaged game and improved startup time.

Also, you will be free to replace those functionalities with alternative libraries.

### Package Layout: Following Best NuGet Practices

Previously Xenko references were added to the project using custom targets.

New packages will now be layout as NuGet/Visual Studio expects them, in folders like `lib/net45` and `lib/monodroid10`.

We still have a few custom MSBuild targets but reduced them to minimum.


### Xenko assets are also distributed as part of package

NuGet packages will have a `xenko` folder containing Xenko assets. As a result, user will be able to generate nuget package containing Xenko assets out of the box from Visual Studio and publish them on NuGet for general consumption.

### Distribution Platform: time to switch to nuget.org?

This is still something under consideration and it will need some testing, but it now starts to make sense to distribute Xenko packages on [nuget.org](https://nuget.org) rather than our custom NuGet server.

This will greatly reduce friction to try Xenko (any project would work out of the box in Visual Studio). This might also make our launcher completely optional, if not redundant.

### Xenko tooling will resolve assemblies dynamically using NuGet API

Tools such as GameStudio or Asset Compiler will be distributed as NuGet packages. However, it won't bundle Xenko Runtime, which will simply be encoded as dependency.

When running those tools, they will resolve Xenko runtime assemblies directly in the NuGet cache.

This allows for distributing those tools as very small and easy-to-upgrade packages, avoiding file duplications. This is similar to what `dotnet-cli` is doing with deps file.

This brings lot of technical challenges but should allow us in the future to be more flexible in the future to load the exact runtime and plugins that the user project reference rather than the one hardcoded with the tool.

### Future: Plugin Support for Editor

Xenko 3.1 editor will still be monolithic: editor support for UI, SpriteStudio, Video and other optional modules will be hardcoded.

However, the target is to get rid of them as soon as possible, and treat them as what they are: plugins.

## Conclusion

This is just the beginning, laying out foundations to turn Xenko into a set of reusable libraries. Much more to come soon!

This is an exciting era for Xenko. Hopefully it will open doors to many new use cases, and bring us lot of new potential users and developers!
