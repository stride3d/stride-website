---
title: "Unity's Licensing Changes: Discovering Stride, a Community-Driven Open Source Engine"
author: vaclav
popular: true
image: /images/blog/2023-09-14-embracing-open-source/stride-vs-unity-opening-image-2.webp
tags: ['.NET']
---

Explore the key differences between Unity and Stride, a C#-based, open-source game engine powered by .NET 6 (soon .NET 8). Learn how Stride's flexibility and native .NET support offer a unique development experience.

---

Table of Contents:

[[TOC]]

## Introduction to Stride

Stride is not just another game engine; it's written entirely in C# and serves as a powerful platform in the .NET ecosystem. This unique focus on C# offers developers the native .NET tooling and functionalities they are already comfortable with. What sets Stride apart is its project structure; Stride projects are standard `csproj` files, allowing them to integrate effortlessly into your existing .NET solutions.

## Difference Between Unity and Stride

Unity is developed by a large team and offers a feature-rich experience. On the other hand, [Stride](https://github.com/stride3d) is open-source and built by community contributors. 

This means that Stride might not have all the features that Unity has, simply because there aren't as many people working on it. However, the open-source nature of Stride allows you to customize it according to your needs and provides a solid foundation for any rendering project.

Additionally, Stride allows you to utilize any [NuGet](https://www.nuget.org/profiles/Stride) package and even provides access to the `Main` function of your game. You can also find useful resources such as documentation, community toolkits, and guides for migrating from Unity to Stride.

- [Stride for Unity Developers](https://doc.stride3d.net/latest/en/manual/stride-for-unity-developers/index.html)

## Licensing

Stride is released under the **MIT** license, which is important because it grants you significant freedoms to use, modify, and distribute the engine.

## What games were made using Stride?

For examples of games developed using Stride, check out [Made with Stride](https://github.com/Doprez/Awesome-Stride#made-with-stride) section.

## Operating System Support

- Editor: Windows
- Runtime: Windows, Linux, <span class="text-warning">macOS</span>, Android, iOS

## IDE Support

Stride games are "standard" C# projects, meaning you can use a variety of IDEs:

- VS Code
- Visual Studio 2022
- Rider
- Blocknote + MsBuild
- VVVV

> **Note:** There's a Visual Studio extension for syntax highlighting, shader build keys and error checking.

> **Note:** Another extension offers syntax highlighting only.

## .NET Hot Reload Support

Stride has the capability of using [.NET Hot Reload](https://learn.microsoft.com/en-us/visualstudio/debugger/hot-reload?view=vs-2022) for C# scripts, allowing real-time code modifications as your game runs. Importantly, this feature is also available when editing the engine side, giving you even more flexibility. Standard .NET hot reload rules are in effect.

This feature streamlines development by minimizing the delay between coding and observing results, enhancing both efficiency and ease of use. If you're familiar with .NET and C#, you'll find that Hot Reload in Stride feels intuitively familiar.

{% youtube 'NG773m0SxyM' %}

## Multiplayer Support

Stride does not offer built-in multiplayer or Server/Client architecture. However, you can easily integrate any .NET networking library to implement these features. You have the freedom to choose from a variety of libraries and resources. For a curated list, you can check out [Awesome-Stride's Networking section](https://github.com/Doprez/Awesome-Stride#networking).

## Unity Assets

You can import some 3D models from the Unity store into Stride. However, scripts will need modification since the two engines differ.

These are the basic [Scripting Differences](https://doc.stride3d.net/latest/en/manual/stride-for-unity-developers/index.html#event-functions-start-update-execute-etc):
- `StartupScript` is a MonoBehaviour without the Update method
- `SyncScript` is a MonoBehaviour with an Update method that runs every frame
- `AsyncScript` is unique and runs asynchronously

## Screen Capture

To capture a frame, you can use the following code snippet:

```csharp
var commandList = GraphicsContext.CommandList;

commandList.RenderTarget.Save(commandList, stream, ImageFileType.Png);
```

## Shaders Available
SDSL is a shader language written on top of HLSL.

- [Shading language](https://doc.stride3d.net/latest/en/manual/graphics/effects-and-shaders/shading-language/index.html)
- [ShaderExplorer](https://github.com/tebjan/Stride.ShaderExplorer)

## Build Automation
Yes, since Stride uses .NET, automating the build process works out-of-the-box.

## Add-ons and Extensions
You cannot extend the editor in the same way as Unity, but you can create custom code extensions as seen in the following:
- [Terrain add-on](https://github.com/johang88/TR.Stride)
- [Level editor add-on](https://github.com/Basewq/XenkoProofOfConcepts/tree/master/LevelEditorExtensionExample)

## Transformations

The [`TransformComponent`](https://doc.stride3d.net/latest/en/api/Stride.Engine.TransformComponent.html) class in Stride is a fundamental component for representing an entity's position, rotation, and scale within a 3D scene.

**Important Features:**

- **`LocalMatrix` and `WorldMatrix`**: These matrices manage the transformations of the entity.
- **`Position`, `Rotation`, and `Scale`**: These properties represent the entity's position, rotation, and scale in the local coordinate system. The `Position` property is a [`Vector3`](https://doc.stride3d.net/latest/en/api/Stride.Core.Mathematics.Vector3.html), defining the entity's position. The `Rotation` property uses a `Quaternion` to represent the entity's rotation, and the `Scale` property is a `Vector3` that sets the scale. You can modify these properties to transform the entity.
- **`UpdateLocalMatrix()` and `UpdateWorldMatrix()`**: These methods update the local and world matrices, respectively.
- **`Parent` and `Children`**: These properties allow you to establish parent-child relationships between entities, affecting their transformations accordingly.

## Rendering

Stride primarily uses **clustered** forward rendering, with some additional features. Read more in the docs.

- [Stride Rendering Pipeline](https://doc.stride3d.net/latest/en/manual/graphics/rendering-pipeline/index.html)
- [Stride Graphics Compositor](https://doc.stride3d.net/latest/en/manual/graphics/graphics-compositor/index.html)

## Gamepads

- [Gamepads](https://doc.stride3d.net/latest/en/manual/input/gamepads.html)

## Other Q&A

### What is the Equivalent of a Coroutine in Stride?
Unlike Unity, which uses `IEnumerator` for asynchronous code execution, Stride leverages C#'s built-in `await` and `async` features. This can be accomplished using `AsyncScript`, which essentially acts as a `SyncScript` (the Stride equivalent of Unity's MonoBehaviour) but with asynchronous methods. You can use async methods within sync scripts, the same as standard C#.

### What is a StartupScript?
A `StartupScript` in Stride includes a `Start` method that is invoked when it's added to the scene tree. This is similar to Unity's `Start` or `Awake` methods. However, `StartupScript` does not contain `Update` methods and therefore doesn't execute code every frame.

### Using Other Assemblies/Projects in Stride
In Unity, the packaging system is built on top of a `csproj` file, which allows Unity to protect its proprietary source code. Stride, however, grants you full access to your `csproj` and `sln` (Solution) files. This enables you to include any NuGet packages or other C# projects in the usual way, by adding project references. If you add a new subproject to your main project through the Stride editor, it will be correctly configured by default, including folder location and references to the Stride engine.

### Is There an Asset Store for Stride?
No, Stride does not have a dedicated Asset Store. However, most additional libraries specially designed for Stride can be found on GitHub or NuGet. For easier discovery, a summary has been made available at [Awesome-Stride](https://github.com/Doprez/Awesome-Stride).

### Null Checking in Stride vs Unity
Does `is null` and `== null` work? Unlike Unity, which has overridden the `Equals` operator to be compatible with its C++ engine, Stride allows you to use `is null` and `== null` to compare the existence of an Entity or Component directly.

## Where to Start

Getting started with Stride is easy, thanks to a wealth of resources available. Here are some you shouldn't miss:

- [Stride's Manual](https://doc.stride3d.net/latest/en/manual/): A comprehensive guide that covers everything from basic setup to advanced features.
- [Stride's Tutorials](https://doc.stride3d.net/latest/en/tutorials/): Step-by-step tutorials to help you get your first project off the ground.
- [Discord]({{ site.links.discord-url }}): Join the community on Discord for real-time discussions and the latest updates.

## How to Find Answers

Consider checking these platforms where your query may have already been addressed or where you can gain more context:

- [Discord]({{ site.links.discord-url }}): Use the search functionality in our Discord channel to see if your topic has been discussed before.
- GitHub Issues: Navigate to [Stride's GitHub Issues](https://github.com/stride3d/stride/issues) to see if your question is related to a known issue or feature request.
- GitHub Discussion: Participate in [Stride's GitHub Discussions]({{ site.links.github-discussions-url }}) to engage with the community and explore various topics.

This proactive approach not only helps you get immediate answers but also makes it easier for the community to focus on unresolved or unique queries.

## 🤝 Join Us: Stride Bug Bounties and Feature Funding 🛠️

We invite talented developers to collaborate with us through our [Bug and Feature Bounties](https://opencollective.com/stride3d/projects). With tasks ranging from Vulkan support to decals and morph targets, there's something for everyone! Reach out via the specific [GitHub Bounty tickets](https://github.com/stride3d/stride/labels/bounty) to get involved.

📬 For suggestions on new bounties, don't hesitate to connect with us on our Discord server or directly through GitHub.

Participating in our bug bounties is a win-win! Not only will you be able to hone your skills, but you'll also contribute to the expansion and enrichment of the Stride community—and get **compensated** for your efforts! 💰

[Stride's Open Collective Projects](https://opencollective.com/stride3d/projects)

## Flappy Bird - Stride Engine Demo

[Ned Reid](https://nedreid.itch.io/), a new member of the Stride community, has created a  [Flappy Bird demo](https://nedreid.itch.io/flappy-bird-stride), while exploring Stride as an alternative to Unity. He shared the following thoughts on his experience:

<p class="border-start border-5 ps-3"> I decided a couple of days ago that I would explore engines outside of Unity (for obvious reasons), and wanted to start with something simple. Over a fairly relaxed weekend, I've managed to put together a neat little Flappy Bird clone!</p>

{% img 'Flappy Bird Stride Demo' '/images/blog/2023-09-14-embracing-open-source/flappy-bird-demo.webp' %}

## Closing Thoughts 🙂

If you've made it this far, congratulations 🎉! You now have a comprehensive understanding of Stride, its capabilities, and how it compares to Unity. The world of game development is vast and ever-changing 🌍, but the emergence of community-driven, open-source engines like Stride showcases the exciting directions the industry is taking. With its C# focus 🎯, extensive .NET support 💻, and flexible licensing 📜, Stride is a formidable option for both new and experienced developers.

As the saying goes, the best way to learn is by doing 🛠️. So dive in 🏊, start a project 🚀, and don't hesitate to participate in the community discussions on Discord or GitHub 👨‍💻👩‍💻. Your journey with Stride is what you make of it, and the resources and community are here to support you every step of the way 🤗.

Thank you for reading 📖, and happy coding 💻👩‍💻👨‍💻!
