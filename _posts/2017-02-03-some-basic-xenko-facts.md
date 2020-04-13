---
layout: post
title: 'Some basic Xenko facts'
author: 'Silicon Studio'
image_thumb: /images/blog/release-1.4/XenkoLogoTM_thumb.png
popular: true
disqus_short_name: paradox3d
---

When looking at new game engines or software, it’s easy to get lost in feature details. So we thought we’d step back and take a moment to discuss some Xenko facts. If you are curious about the basics of Xenko, our **in beta, open source, full C# game engine**, this post will explain some of Xenko’s main characteristics along with system requirements.
 
Some of the benefits that Xenko brings users are its high-quality and flexible rendering, advanced C# scripting system, and upcoming VR support. Xenko’s editor, Game Studio, provides users a straightforward layout which allows users to easily start making games. 

Xenko is still a relatively young game engine, and not yet as mammoth (or dare we say "brittle") as some of the more mature game engines that are commercially available. Being an open-source engine means that it's **easy to customize**, allowing users the ability to control almost every aspect of their development. It’s also worth noting that the **Xenko engine itself is implemented in C#** and  always supporting the latest versions of C# and the .Net framework. C# is the most widely used programming language among game developers, offering a great user experience when it comes to iterate on games quickly and efficiently. 
 
With Xenko, you can currently develop games for the **following platforms** and **graphics backends**:

* Windows (Desktop): DirectX / OpenGL / Vulkan
* Linux/Mac: OpenGL / Vulkan
* iOS/android (via Xamarin): OpenGL ES
* UWP & XBox One: DirectX

  ![Platforms](../../images/blog/2017-02-03-some-basic-xenko-facts/platforms.png)

You can learn more about [supported platforms](http://doc.stride3d.net/latest/manual/platforms/index.html)  in our documentation.

**Note:** since the release of Xenko 1.9β, shared game assemblies are created using .NET Standard rather than PCL (Portable Class Library). You can learn more about why we made that decision in our earlier blog post, [Toward a Better .NET!](http://stride3d.net/blog/toward-a-better-dotnet/)

You can currently develop games with Xenko only on Windows. We do not support Xenko game development on Mac yet. 

For the **system requirements**, the Xenko install takes approximately 5GB and a minimum of 4GB of RAM; however 8GB of RAM is recommended for heavy 3D games or applications development. See Xenko’s [development requirements](http://doc.stride3d.net/latest/manual/requirements/index.html) for more details.

While the Xenko documentation is under way and improving daily, you may also find it beneficial to peruse our blog for each of our earlier beta releases to learn more on which features and techniques are implemented in Xenko. Of course, all of these features are in [our documentation](http://doc.stride3d.net/latest/) as well. 

We hope this quick runthrough helped answer some of the fundamental questions we receive often about Xenko. Stick around for more news coming soon!
