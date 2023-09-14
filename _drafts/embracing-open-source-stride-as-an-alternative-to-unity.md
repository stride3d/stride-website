---
title: "Unity's Licensing Changes: Discovering Stride, a Community-Driven Open Source Engine"
author: vaclavelias
popular: true
---

## Difference Between Unity and Stride

Unity is developed by a large team and offers a feature-rich experience. On the other hand, Stride is open-source and built by community contributors. 

This means that Stride might not have all the features that Unity has, simply because there aren't as many people working on it. However, the open-source nature of Stride allows you to customize it according to your needs and provides a solid foundation for any rendering project.

Additionally, Stride allows you to utilize any NuGet package and even provides access to the `Main` function of your game. You can also find useful resources such as documentation, community toolkits, and guides for migrating from Unity to Stride.

## Licensing

Stride is released under the MIT license, which is important because it grants you significant freedoms to use, modify, and distribute the engine.

## What game were made using Stride?

For examples of games developed using Stride, check out [this awesome URL](#your-anchor-to-section).

## Hardware Support

- Editor: Windows
- Runtime: Windows, Linux, Mac, Android, iOS

## IDE Support

Stride games are "standard" C# projects, meaning you can use a variety of IDEs:

- VSCode
- Visual Studio
- Rider
- Blocknote + MsBuild

> **Note:** There's a Visual Studio Code extension for syntax highlighting and shader build keys.
> **Note 2:** Another extension offers syntax highlighting only.

## Multiplayer Support

Multiplayer functionality is not built-in. However, you can integrate any .NET networking library. [Here's a link to various libraries and resources](#your-github-link).

## Unity Assets

You can import some 3D models from the Unity store into Stride. However, scripts will need modification since the two engines differ.

## Screen Capture

To capture a frame, you can use the following code snippet:

```
var commandList = GraphicsContext.CommandList;

commandList.RenderTarget.Save(commandList, stream, ImageFileType.Png);
```

## Shaders Available
Yes. YEAH ! with the best shader laguage of the world : SDSL ! (source tebjan)
https://github.com/tebjan/Stride.ShaderExplorer

## Build Automation
Yes, since Stride uses .NET, automating the build process works out-of-the-box.

## Add-ons and Extensions
Being open-source, Stride allows for custom add-ons, although implementing them might require additional work.

## Transformations
In Stride, positions are represented as Vector3 and rotations use quaternions, similar to Unity

## Rendering
Stride primarily uses forward rendering, with some additional features. Read more in the docs.

Gamepads ?
yeah => docs

## Other Q&A

### What is Coroutine in Stride?
Unlike Unity, which uses `IEnumerator` for asynchronous code execution, Stride leverages C#'s built-in `await` and `async` features. This can be accomplished using `AsyncScript`, which essentially acts as a `SyncScript` (the Stride equivalent of Unity's MonoBehaviour) but with asynchronous methods.

### What is a StartupScript?
A `StartupScript` in Stride includes a `Start` method that is invoked when it's added to the scene tree. This is similar to Unity's `Start` or `Awake` methods. However, `StartupScript` does not contain `Update` methods and therefore doesn't execute code every frame.

### Using Other Assemblies/Projects in Stride
In Unity, the packaging system is built on top of a `csproj` file, which allows Unity to protect its proprietary source code. Stride, however, grants you full access to your `csproj` and `sln` (Solution) files. This enables you to include any NuGet packages or other C# projects in the usual way, by adding project references. If you add a new subproject to your main project through the Stride editor, it will be correctly configured by default, including folder location and references to the Stride engine.
