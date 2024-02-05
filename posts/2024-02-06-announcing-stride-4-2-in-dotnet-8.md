---
title: 'Announcing Stride 4.2'
author: vaclav
popular: true
tags: ['4.2','Release']
---

Stride contributors are thrilled to announce the release of Stride 4.2, now fully compatible with .NET 8 and leveraging the latest enhancements in C# 12. This release brings significant improvements in performance, stability, and developer experience.

---

{% img-click 'Stride 4.2 performance enhancements with .NET 8' '/images/blog/release-4.2/stride_4_2_fps.webp' %}

Table of Contents:

[[TOC]]

A massive thank you to the open-source Stride community for your dedicated contributions. This release saw over 75 contributions from more than 22 amazing contributors, each playing a crucial role in making Stride 4.2 a reality.

## Download and Upgrade

You can [download the Stride 4.2 Installer](https://www.stride3d.net/download/) today. Release notes are available [here](https://doc.stride3d.net/latest/en/ReleaseNotes/ReleaseNotes.html).

Make sure you read the [guide to update Stride and projects properly](https://doc.stride3d.net/latest/en/manual/get-started/update-stride.html).

## Unity Licensing Model Impact: A Catalyst for Change

The game development world has seen quite a stir with recent changes in Unity's licensing model. These shifts have led many in our community to rethink their choice of development tools. Stride 4.2 steps up in this scenario as a solid, C#-based alternative, offering a familiar yet distinct approach for game developers.

### Stride's Rising Popularity

It's been an exciting time for us. We've noticed more and more developers giving Stride a try, a trend clearly reflected in our growing user numbers. During the crazy Unity days, we were number 3 in the popularity rankings, just after Godot and Bevy. Also a big shoutout to gamefromscratch for his video "[Stride For Unity Developers](https://www.youtube.com/watch?v=u_ksFlHHXYU)", which definitely helped.

### The Heartbeat of Stride: Our Community

What really makes Stride tick is you – the community. Your feedback, contributions, and ideas have been the driving force behind Stride 4.2. It’s your hands-on experience and insights that have helped shape this release, making Stride not just a tool but a community achievement.

## Addressing the Pace of Updates in Stride

Let's talk about how often Stride gets updated. We know it's something on your mind, and that is why we want to explain the dynamics that influence it.

### The People Behind Stride

Stride is maintained by a group of passionate developers, much like yourself, who contribute in their free time. This means our pace might not match that of other engines backed by full-time teams. Luckily we still have the original creator and lead of Stride among us to tackle tricky issues and infrastructure.

### Facing the Realities: Funding and Resources

Here’s the deal: our funding levels shape how much we can do. We’re grateful for every bit of support we receive, but we’re still on our way to having a full-time development force. This financial reality does affect how fast we can roll out updates. Although we might not be the fastest out there, we focus on making each update meaningful.

## Funding and Resource Allocation

### Challenges in Distribution

The pace at which we distribute funds is often perceived as slow. However, this is not from a lack of willingness but rather the challenge of finding the right talent for the tasks. Nonetheless, we are actively funding projects at this moment, focusing on enhancements in XR, introducing [morph target capabilities for 3D models](https://github.com/stride3d/stride/pull/2136) (aka Blendshapes), and updating the bindings for the Assimp 3D importer to [Silk.NET](https://dotnet.github.io/Silk.NET/).

### Call for Skilled Developers

We are actively seeking skilled developers with experience in C#, the .NET ecosystem, mobile, XR, rendering, and game development. If you have these skills or know someone who does, we encourage you to get involved. There are [opportunities to contribute](https://opencollective.com/stride3d/projects) to critical areas of Stride's development, supported by available funds.

### Join Us on This Journey

We’re always excited to welcome new contributors to the Stride family. Whether it’s through code contributions, spreading the word, or donations, every bit helps us grow stronger. If you’ve got skills in .NET, Android, and iOS development, there’s a special place for you here. [Support us on OpenCollective](https://opencollective.com/stride3d).

### The Impact of Your Support

We believe that every donation has a substantial impact, perhaps more so than in some other projects. Why? Because C# as a language offers high productivity, and the Stride codebase has a great architecture. This means that every dime you contribute goes a long way.

Imagine how much we could do if Stride got as much financial support as other big engines. With C#'s easy productivity and Stride's well-organized code, your donations could help us improve much faster. It's not just about keeping the lights on; your support can take Stride to new heights!

### Looking Ahead

With your support, we’re optimistic about picking up the pace. Our goal is to bring you new features and improvements more regularly, making Stride even better with each release.

## What's New in Stride 4.2
Stride 4.2 includes numerous enhancements and improvements. Here’s what to expect:

- **.NET 8 Integration**: Stride 4.2 is now fully aligned with .NET 8, harnessing its performance improvements and efficiency gains for game development. This means faster execution times, reduced memory footprint, and access to the latest C# features, making your development smoother and more efficient. [Learn more](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-8/)

- **C# 12 Features**: With C# 12, Stride users can write cleaner, more concise code thanks to new language features. These improvements reduce boilerplate and enhance readability. [Discover C# 12](https://devblogs.microsoft.com/dotnet/announcing-csharp-12/)

- **Changed Assimp Binding to Silk.Net.Assimp**: This update transitions the asset compiler's binding from C++/CLR to Silk.Net.Assimp, a move that not only simplifies the codebase but also paves the way for asset compilation on non-Windows systems, broadening Stride's accessibility. [See the pull request](https://github.com/stride3d/stride/pull/1158)

- **Migration NET6+ and More gettextnet#2**: Stride's commitment to staying current with .NET versions continues, ensuring compatibility and leveraging the stability and features of the latest .NET environment across all aspects of the engine. [Check out the update](https://github.com/stride3d/gettextnet/pull/2)

- **Enable Multiple Profiler Consumers and Add a Timeline/Tracing Profiler**: This enhancement introduces a profiler with chrome://tracing output format, significantly improving the debugging and performance tuning process by allowing for a more granular analysis of game performance. [Explore the feature](https://github.com/stride3d/stride/pull/1788)

- **Feature: Add Support for F# and VB Project Types**: Stride now welcomes developers using F# and Visual Basic, offering support for code-only projects in these languages. This opens up Stride to a broader audience. [Learn about F# and VB support](https://github.com/stride3d/stride/pull/1821)

- **Stride Diagnostics Analyzer**: This new tool provides immediate feedback within your IDE, identifying potential compatibility issues with Stride's serialization system. It's about making your development process smoother and helping you catch and resolve issues faster. [Discover how it works](https://www.stride3d.net/blog/new-diagnostic-analyzers-feature/), [the docs page](https://doc.stride3d.net/latest/en/diagnostics/index.html) and [here is the pull request](https://github.com/stride3d/stride/pull/1864).

- **OpenVR Handle Custom Resolution Specified by the User Through VR Settings**: Enhancing VR development, this update allows developers to specify custom resolutions for VR projects, optimizing performance and visual quality for various VR devices. [See the details](https://github.com/stride3d/stride/pull/2000)

- **Editor Enhancements**:

  - **Dynamic Snapping for Selected Objects**: This feature introduces dynamic snapping while transforming objects, improving precision and workflow efficiency within the Stride Editor. [Dynamic snapping PR](https://github.com/stride3d/stride/pull/1801)

  - **Animation Stack Selection for FBX Imports**: Stride now allows you to select specific animations from a stack when importing FBX files, giving you more control over the assets you bring into your projects. [Learn more](https://github.com/stride3d/stride/pull/1977)

  - **Automatic Asset Copying to Resources Directory**: To streamline asset management, the editor can now automatically copy imported assets to the project's Resources directory, ensuring your assets are always where they need to be. [See how it works](https://github.com/stride3d/stride/pull/1827)

## Fixes
Although there have been [many fixes](https://github.com/stride3d/stride/pulls?page=2&q=is%3Apr+merged%3A%3E2023-10-10), we'd like to point some of them out:
- [Runtime rasterized fonts are broken #1750](https://github.com/stride3d/stride/issues/1750)
- [Game Studio doesn't reload sub projects after changes #1703](https://github.com/stride3d/stride/issues/1703)
- [Changing the comparison project related and not UPath related #1704](https://github.com/stride3d/stride/pull/1704)
- [Translations fix #1717](https://github.com/stride3d/stride/pull/1717)
- [C# Beginner Tutorial Build Errors #1652](https://github.com/stride3d/stride/issues/1652)
- [Can not create "C# Beginner" project #1650](https://github.com/stride3d/stride/issues/1650)

See the full list in the [Release Notes](https://doc.stride3d.net/latest/en/ReleaseNotes/ReleaseNotes.html).

## Exciting Development in Stride Physics

Stride 4.2's release isn't just about what's in the box; it's also about what it enables for the future. A standout development in this context is the integration of a new physics package in Stride.

### Introducing Bepu Physics in Stride

Our Discord community is buzzing with the news of Bepu physics, a project initiated by our user [Nicogo1705](https://github.com/Nicogo1705).

[BepuPhysics v2](https://github.com/bepu/bepuphysics2) is a high-performance, multi-threaded physics library, written entirely in C#. Its compatibility with Stride's C# ecosystem offers the perfect alternative to the Bullet 3D physics engine, which relies on C++ Interop.

With additional support from [Doprez](https://github.com/Doprez) and [Eideren](https://github.com/Eideren), the efforts in integrating Bepu physics have already shown impressive results, especially in editor compatibility and performance. As you can see in this video, running on almost 10 year old hardware (yes, cube fountain included):

{% youtube '1OqtaVqSP78' %}

Nicogo's YouTube channel features [some more demo videos](https://www.youtube.com/@Nicogo17/videos).

GitHub: [Nicogo1705/Stride.BepuPhysics](https://github.com/Nicogo1705/Stride.BepuPhysics)

### Future Prospects and Disclaimer
Currently an independent package, Bepu physics is charting a course towards deeper integration within Stride. While it stands as a potential future replacement for Bullet physics, the package is still evolving. Future updates may necessitate adjustments to projects using its current version. We encourage users to stay updated and adaptable as we continue refining Bepu physics with the community's support. The pull request can be found here: [[Physics] Bepu integration](https://github.com/stride3d/stride/pull/2131)

## Also good to know
Although not directly tied to Release 4.2, we have some more big things going on.

For instance to our website and documentation. We also had another community meeting to address all those new members.
- [Website and documentation revamped and build process updated](https://www.stride3d.net/blog/announcing-website-update/)
- [Contributor section moved to docs](https://doc.stride3d.net/latest/en/contributors/index.html)
- [Community meeting October 2023](https://www.stride3d.net/blog/community-meeting-october-2023/)

And last but not least:
### Cross-Platform Evolution: The Stride Editor and Avalonia
One of the most ambitious projects for Stride to date has started: The porting of the entire Stride Editor from WPF to Avalonia, a cross-platform C# UI library. This significant endeavor, undertaken by [Kryptos-FR](https://github.com/Kryptos-FR), a former Stride developer.

Currently, the project is in the early stages but it not only anticipates making the editor compatible with Linux and MacOS but also aligns with the long-standing community desire for broader platform support and enhanced editor functionality, including a robust plugin system.

More details in this pull request: [Cross-platform editor rewrite - prototype](https://github.com/stride3d/stride/pull/2034)

## Links
- GitHub: [{{site.links.github-stride-url}}]({{site.links.github-stride-url}})
- Website: [{{site.links.stride-url}}]({{site.links.stride-url}})
- Documentation: [{{site.links.docs-manual-url}}]({{site.links.docs-manual-url}})
- Twitter: [{{site.links.twitter-url}}]({{site.links.twitter-url}})
- YouTube: [{{site.links.youtube-url}}]({{site.links.youtube-url}})


## Acknowledgements
We extend our heartfelt gratitude for all the hard work and donations we have received. Your generous contributions significantly aid in the continuous development and enhancement of the Stride community and projects. Thank you for your support and belief in our collective efforts.

In particular we want to thank these donors:

### Long time Stride supporters
*  {% include sponsor-org.md key:'vvvv' emoji:'🥇' %}

   <a href="https://visualprogramming.net/"><img src="https://images.opencollective.com/vvvv/8ab0acd/logo/256.png?height=72" alt="vvvv. A visual live-programming environment that takes you from rapid prototyping to final production"></a>

### Platinum Striders
* {% include sponsor-org.md key:'happenstance' emoji:'🏆' %}

  <a href="http://www.happenstancegames.com/"><img width=64 src="https://www.stride3d.net/images/sponsors/HappenLogo.webp" alt="Happenstance games logo"></a>

### Gold Striders

* {% include sponsor-user.md key:'vaclav' emoji:'🥇' %}
* {% include sponsor-org.md key:'lucid' emoji:'🥇' %}
* {% include sponsor-user.md key:'skidvis' emoji:'🥇' %}

This article was co-authored by [Aggror Jorn](https://github.com/Aggror) and [Tebjan Halm](https://github.com/tebjan).
