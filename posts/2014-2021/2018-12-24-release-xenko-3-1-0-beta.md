---
title: 'Xenko 3.1 Beta Released'
author: virgile
tags: ['Release']
---

Explore the Xenko 3.1.0 beta release, featuring exciting new features, enhancements, and improvements in this powerful 3D game engine by Stride.

---

Just in time for Christmas, **Xenko 3.1 Beta** is out now!

One of the major change is turning the engine into separate NuGet packages, published on [NuGet.org](https://www.nuget.org/profiles/stride3d.net).

Merry Christmas and Happy Holidays!

[[TOC]]

## Xenko 3.1 Loves NuGet!

Xenko was always a big proponent of NuGet: since first version, Xenko was distributed as a NuGet package.

However, due to limitations (hello packages.config and project.json!), we were leveraging NuGet more as a distribution medium than proper NuGet packages: Xenko 3.0 is still a monolithic single package and it would not work out of the box when referenced from Visual Studio without using Xenko Launcher and Game Studio.

Xenko 3.0 paved the way by making Xenko compatible with the new project system (game projects were referencing Xenko using a `PackageReference`).

{% img 'Xenko Solution' '/images/blog/2018-11-13-feature-spotlight-xenko-3-1-and-nuget/xenko-ref-old.png' %}

Today, Xenko 3.1 brings Xenko as a set of smaller NuGet package, each containing one assembly, with proper dependencies:

{% img 'Xenko NuGet references' '/images/blog/2018-11-13-feature-spotlight-xenko-3-1-and-nuget/xenko-ref-new.png' %}

As a result, it is now possible to create a game project that references only the packages you want. Here are a few examples of "core" packages:

* `Xenko.Engine`: allows you to use core engine runtime (including its dependencies)
* `Xenko.Core.Assets.CompilerApp`: compile assets at build time
* `Xenko.Core.Mathematics` or `Xenko.Graphics`: yes, if you want to make a custom project only using Xenko mathematics or graphics API without the full Xenko engine, you can!
* `Xenko.Core.Assets`, `Xenko.Presentation` or `Xenko.Quantum`: all those piece of tech being used to build Xenko tooling are also available for reuse in other projects. Nothing prevents you from generating assets on the fly too!

Then, various parts of the engine are distributed as **optional** packages:

* `Xenko.Physics`
* `Xenko.Particles`
* `Xenko.UI`
* `Xenko.SpriteStudio`
* `Xenko.Video`

If you don't reference those packages, they won't be packaged with your game either. In many situations, it results in a smaller packaged game and improved startup time.

Also, you are free to replace those functionalities with alternative libraries.

## Coming Soon

### Xenko Assets Distribution

Xenko Assets will be packed and distributed with NuGet automatically.

Coming soon in next beta, C# projects containing Xenko assets will have those assets automatically NuGet packaged in a `xenko` folder.

As a result, you will soon be able to generate NuGet package containing Xenko assets out of the box from Visual Studio and publish them on [NuGet.org](https://nuget.org) for general consumption for other Xenko users.

We can't wait to see what will come up!

## Full Switch to .NET Standard

Soon Xenko will support .NET Standard for most of its assemblies.

Xenko games will be able to run on .NET Core for Windows (Linux is already supported).
