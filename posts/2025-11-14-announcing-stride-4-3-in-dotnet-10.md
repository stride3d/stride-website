---
title: 'Announcing Stride 4.3'
author: vaclav
popular: true
tags: ['4.3','Release']
---

Stride 4.3 brings .NET 10 and C# 14, Bepu Physics, Vulkan compute shaders, custom assets, cross-platform build strides, mesh buffer helpers, Rider/VSCode support, and performance/stability fixes.

---

Table of Contents:

[[TOC]]

## Download and Upgrade

You can [download the Stride 4.3 Installer](https://www.stride3d.net/download/) today. Release notes are available [here](https://doc.stride3d.net/latest/en/ReleaseNotes/ReleaseNotes.html).

Make sure you read the [guide to update Stride and projects properly](https://doc.stride3d.net/latest/en/manual/get-started/update-stride.html).

## What's new in this release

Stride 4.3 includes numerous enhancements and improvements. Here’s what to expect:

- **.NET 10 Integration**: Stride 4.3 is now fully aligned with .NET 10, harnessing its performance improvements and efficiency gains for game development. This means faster execution times, reduced memory footprint, and access to the latest C# features, making your development smoother and more efficient. [Learn more](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-10/)
 
- **C# 14 Features**: With C# 14, Stride users can write cleaner, more concise code thanks to new language features. These improvements reduce boilerplate and enhance readability. [Discover C# 14](https://learn.microsoft.com/en-gb/dotnet/csharp/whats-new/csharp-14)

## What has changed since Stride 4.2

### Bepu physics integration

Adding support for [Bepu Physics](https://github.com/bepu/bepuphysics2), a ridiculously fast physics engine written entirely in C#.

Having both a game and physics engine in the same ecosystem reduces the cost of maintaining and improving it, the overhead that we may incur when communicating between the two APIs, and the barrier to entry for contributors.

Bullet is still the default physics engine, and we welcome any contribution towards it, but our efforts will be focused on Bepu from now.

The integration is effectively done, with Bepu's feature set now being slightly ahead of Bullet's. Have a look at [this page](https://doc.stride3d.net/latest/en/manual/physics/configuration.html) if you want to migrate to Bepu.

### Vulkan compute shader support

Vulkan graphics backend has been modified to support compute shaders, the shader compiler has also been modified to support computer shader generation for GLSL.

### User-defined Assets

Introducing [Custom Assets](https://doc.stride3d.net/latest/en/manual/scripts/custom-assets.html), a way to define and store data which can be referenced across multiple components, scenes and through other assets.

The asset compiler also gives you the ability to build more complex systems like custom file importers.

### Ongoing efforts to build projects *from* Linux and Apple desktops

Stride can build games under Windows to target the different devices we support, but building directly from those devices was not supported up till now.

We've introduced a couple of changes to improve on that front:
- Replacing our custom C++/CLI FBX importer with [Assimp](https://github.com/assimp/assimp)
- Fixing the asset compiler to run on all desktop OSes
- Many build-system refactors to move toward fully cross-platform development
- Building VHACD for Linux
- Adjust FreeImage and DirectXTex for all platforms

Some work is still required on this front, but simpler projects can now be built from those platforms.

### Efficient API to manipulate meshes

Vertex buffers do not have a standardized layout, each mesh may have its own specific layout and data type it uses for its vertices. Some have blend weights, or tangents, while others only have positions - they may also use different data types, for example Half4 positions, 4byte color ...

We added in two helpers in [VertexBufferHelper](https://doc.stride3d.net/latest/en/api/Stride.Graphics.VertexBufferHelper.html) and [IndexBufferHelper](https://doc.stride3d.net/latest/en/api/Stride.Graphics.IndexBufferHelper.html) to provide a standardized way to read and write to those buffers.

### Open project with Rider and VSCode from the GameStudio

While any IDE can open and build Stride projects, the editor button to open said project only had special handling for Visual Studio. [Jklawreszuk](https://github.com/Jklawreszuk) added support for Rider and VSCode.

### Interface processor

Stride has a [component processors](https://doc.stride3d.net/latest/en/manual/engine/entity-component-system/usage.html), a user-defined class which can collect and process all components of a given type in the running game. It is also known as the `System` part of the `ECS` acronym.

The new [flexible processing system](https://doc.stride3d.net/latest/en/manual/engine/entity-component-system/flexible-processing.html) provides more type safety, and the ability to process components by their interfaces. You could, for example, implement a custom update callback any component could receive through this API.

### And more minor changes

- [HDR Rendering Support for D3d/Windows](https://github.com/stride3d/stride/pull/2711)
- [User-defined gizmos](https://doc.stride3d.net/latest/en/manual/scripts/gizmos.html)
- [Haptic feedback integration for VR runtimes](https://github.com/stride3d/stride/pull/2169)
- [API for OpenXR Passthrough](https://github.com/stride3d/stride/pull/2141)

### Fixes

Although there have been [many fixes](https://github.com/stride3d/stride/pulls?page=2&q=is%3Apr+merged%3A%3E2023-10-10), we'd like to point some of them out:

- Major performance improvements, particularly for graphics and UI
- Multiple fixes improving Vulkan, OpenGL, games under Linux and OpenXR stability
- And fixes for edge cases when reloading assemblies in the game studio

### Also good to know

[WIP]
We are already hard at work on a bunch of ongoing projects for version 4.4 and beyond;
- Continuing work to allow for building games *from* other platforms
- Converting our Windows-only GameStudio to cross-platform through Avalonia
  We welcome anyone willing to contribute to this project over [Here](https://github.com/orgs/stride3d/projects/6) - just have to make sure to add a comment to one of the unassigned issues you want to work on
- Improvements to shader compilation, reducing in-game hangs while building shader permutations. [Here](https://github.com/stride3d/SDSL)
- More work on D3d12 and Vulkan as we slowly transition away from D3d11

## Funding and Resource Allocation

### Call for Skilled Developers

We are actively seeking skilled developers with experience in C#, the .NET ecosystem, mobile, XR, rendering, and game development. If you have these skills or know someone who does, we encourage you to get involved. There are [opportunities to contribute](https://opencollective.com/stride3d/projects) to critical areas of Stride's development, supported by available funds.

### Join Us on This Journey

We’re always excited to welcome new contributors to the Stride family. Whether it’s through code contributions, spreading the word, or donations, every bit helps us grow stronger. If you’ve got skills in .NET, Android, and iOS development, there’s a special place for you here. [Support us on OpenCollective](https://opencollective.com/stride3d).

## Links

- GitHub: [{{site.links.github-stride-url}}]({{site.links.github-stride-url}})
- Website: [{{site.links.stride-url}}]({{site.links.stride-url}})
- Documentation: [{{site.links.docs-manual-url}}]({{site.links.docs-manual-url}})
- Twitter: [{{site.links.twitter-url}}]({{site.links.twitter-url}})
- YouTube: [{{site.links.youtube-url}}]({{site.links.youtube-url}})
- Stride Community Toolkit: [{{site.links.stride-community-toolkit-url}}]({{site.links.stride-community-toolkit-url}})

## Acknowledgements

We extend our heartfelt gratitude for all the hard work and donations we have received. Your generous contributions significantly aid in the continuous development and enhancement of the Stride community and projects. Thank you for your support and belief in our collective efforts.

In particular we want to thank these donors:

### Long time Stride supporters
*  {% include sponsor-org.md key:'vvvv' emoji:'🥇' %}

   <a href="https://visualprogramming.net/"><img src="https://images.opencollective.com/vvvv/8ab0acd/logo/256.png?height=72" alt="vvvv. A visual live-programming environment that takes you from rapid prototyping to final production"></a>

### Gold Striders

* {% include sponsor-org.md key:'happenstance' emoji:'🏆' %}
* {% include sponsor-user.md key:'vaclav' emoji:'🥇' %}
* {% include sponsor-org.md key:'lucid' emoji:'🥇' %}
* {% include sponsor-user.md key:'widowmakes' emoji:'🥇' %}
* {% include sponsor-user.md key:'norbo' emoji:'🥇' %}
* {% include sponsor-user.md key:'first-hour' emoji:'🥇' %}

This article was co-authored by [Eideren](https://github.com/Eideren).