---
title: "Unity's Licensing Changes: Discovering Stride, a Community-Driven Open Source Engine"
author: vaclav
popular: true
---
## Intro

Stride is written in C# and you get native .NET C# tooling. You have full control over the entry point. The Stride projects are normal C# projects `csproj` grouped in the normal solutions.

## Difference Between Unity and Stride

Unity is developed by a large team and offers a feature-rich experience. On the other hand, [Stride](https://github.com/stride3d) is open-source and built by community contributors. 

This means that Stride might not have all the features that Unity has, simply because there aren't as many people working on it. However, the open-source nature of Stride allows you to customize it according to your needs and provides a solid foundation for any rendering project.

Additionally, Stride allows you to utilize any [NuGet](https://www.nuget.org/profiles/Stride) package and even provides access to the `Main` function of your game. You can also find useful resources such as documentation, community toolkits, and guides for migrating from Unity to Stride.

https://doc.stride3d.net/latest/en/manual/stride-for-unity-developers/index.html

## Licensing

Stride is released under the **MIT** license, which is important because it grants you significant freedoms to use, modify, and distribute the engine.

## What game were made using Stride?

For examples of games developed using Stride, check out [Made with Stride](https://github.com/Doprez/Awesome-Stride#made-with-stride) section.

## Hardware Support

- Editor: Windows
- Runtime: Windows, Linux, Android, iOS

## IDE Support

Stride games are "standard" C# projects, meaning you can use a variety of IDEs:

- VSCode
- Visual Studio 2022
- Rider
- Blocknote + MsBuild
- VVVV

> **Note:** There's a Visual Studio Code extension for syntax highlighting and shader build keys.

> **Note:** Another extension offers syntax highlighting only.

## Multiplayer Support

Stride does not offer built-in multiplayer or Server/Client architecture. However, you can easily integrate any .NET networking library to implement these features. You have the freedom to choose from a variety of libraries and resources. For a curated list, you can check out [Awesome-Stride's Networking section](https://github.com/Doprez/Awesome-Stride#networking).

## Unity Assets

You can import some 3D models from the Unity store into Stride. However, scripts will need modification since the two engines differ.

These are the [Scripting diferences](https://doc.stride3d.net/latest/en/manual/stride-for-unity-developers/index.html#event-functions-start-update-execute-etc) simply:
- StartupScript is a Monobehaviour without the Update method that's not run every frame
- SyncScript is a Monobehaviour that runs every frame
- AsyncScript is unique and run per-frame asynchronously

## Screen Capture

To capture a frame, you can use the following code snippet:

```
var commandList = GraphicsContext.CommandList;

commandList.RenderTarget.Save(commandList, stream, ImageFileType.Png);
```

## Shaders Available
Yes. SDSL, written on top of HLSL.

- https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html
- https://github.com/tebjan/Stride.ShaderExplorer

## Build Automation
Yes, since Stride uses .NET, automating the build process works out-of-the-box.

## Add-ons and Extensions
You can not extend the editor in the same way as Unity but you can create custom code extensions as seen in the following:
- [Terrain add-on](https://github.com/johang88/TR.Stride)
- [Level editor add-on](https://github.com/Basewq/XenkoProofOfConcepts/tree/master/LevelEditorExtensionExample)

## Transformations

The [`TransformComponent`](https://doc.stride3d.net/latest/en/api/Stride.Engine.TransformComponent.html) class in Stride is a fundamental component for representing an entity's position, rotation, and scale within a 3D scene.

### Important Features:

- **`LocalMatrix` and `WorldMatrix`**: These matrices manage the transformations of the entity.
  
- **`Position`, `Rotation`, and `Scale`**: These properties represent the entity's position, rotation, and scale in the local coordinate system. The `Position` property is a [`Vector3`](https://doc.stride3d.net/latest/en/api/Stride.Core.Mathematics.Vector3.html), defining the entity's position. The `Rotation` property uses a `Quaternion` to represent the entity's rotation, and the `Scale` property is a `Vector3` that sets the scale. You can modify these properties to transform the entity.

- **`UpdateLocalMatrix()` and `UpdateWorldMatrix()`**: These methods update the local and world matrices, respectively.

- **`Parent` and `Children`**: These properties allow you to establish parent-child relationships between entities, affecting their transformations accordingly.

## Rendering
Stride primarily uses forward rendering, with some additional features. Read more in the docs.

- https://doc.stride3d.net/latest/en/manual/graphics/rendering-pipeline/index.html
- https://doc.stride3d.net/latest/en/manual/graphics/graphics-compositor/index.html

## Gamepads
https://doc.stride3d.net/latest/en/manual/input/gamepads.html

## Other Q&A

### What is Coroutine in Stride?
Unlike Unity, which uses `IEnumerator` for asynchronous code execution, Stride leverages C#'s built-in `await` and `async` features. This can be accomplished using `AsyncScript`, which essentially acts as a `SyncScript` (the Stride equivalent of Unity's MonoBehaviour) but with asynchronous methods. You can use async methods within sync scripts, the same as standard C#.

### What is a StartupScript?
A `StartupScript` in Stride includes a `Start` method that is invoked when it's added to the scene tree. This is similar to Unity's `Start` or `Awake` methods. However, `StartupScript` does not contain `Update` methods and therefore doesn't execute code every frame.

### Using Other Assemblies/Projects in Stride
In Unity, the packaging system is built on top of a `csproj` file, which allows Unity to protect its proprietary source code. Stride, however, grants you full access to your `csproj` and `sln` (Solution) files. This enables you to include any NuGet packages or other C# projects in the usual way, by adding project references. If you add a new subproject to your main project through the Stride editor, it will be correctly configured by default, including folder location and references to the Stride engine.

### Is There an Asset Store for Stride?
No, Stride does not have a dedicated Asset Store. However, most additional libraries specially designed for Stride can be found on GitHub or NuGet. For easier discovery, a summary has been made available at [Awesome-Stride](https://github.com/Doprez/Awesome-Stride).

### Null Checking in Stride vs Unity
Does `is null` and `== null` work? Unlike Unity, which has overridden the `Equals` operator to be compatible with its C++ engine, Stride allows you to use `is null` and `== null` to compare the existence of an Entity or Component directly.

## Troubleshooting Common Issues

### .NET SDK Version Error

**Q:** When trying to build my project, I receive the following error: "The current .NET SDK does not support targeting .NET 6.0. Either target .NET 5.0 or lower, or use a version of the .NET SDK that supports .NET 6.0."  

**A:** Make sure you have the **.NET 6.0 SDK** installed. Also, ensure you are using an IDE that supports .NET 6.0, such as Visual Studio 2022.

> **Note:** This question holds true if certain features seem to be misbehaving or commonly crashing. Always make sure the latest [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) version is installed with Stride 4.1
