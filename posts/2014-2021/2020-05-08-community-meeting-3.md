---
title: 'Community Meeting May 2020'
author: jorn
tags: ['Meeting']
---

On May the 8th we held another community meeting in the Discord. Its main goal was to talk about the ongoing work on Stride and its first official release after the rename to Stride.

---

[[TOC]]

## Summary
- Official Stride 4.0 release. The plan is to release Stride 4.0 officially within the next 2 weeks. It depends a little on whether .Net 3.1 is going to be part of it. If this can be done within reasonable time than we rather incorporate this into the official release of 4.0
    - The release notes will be written in a more friendly way.
    - Aggror will look into making a video regarding the release as well as some of the new key features like VXGI cone tracing.
- Xen2 has filled in the application for joining the [.NET Foundation](https://dotnetfoundation.org/), a non-profit organization (NPO). At the moment of writing this blog, no response to this yet.
- Roadmap The GitHub [roadmap](https://github.com/stride3d/stride/projects/3) will be updated. From now on it will only contain features that Xen2 or others will actively work on. This means some epics will be removed from the roadmap, and some new ones will be added. The epics that are removed will still be visible as requests in Github issues.
- There is now a `stride` tag on gamedev.stackexchange (tag might be changed to `stride-engine` soon btw). We can use this site for Q&A and additional "How to? questions. https://gamedev.stackexchange.com/questions/tagged/stride
- Documentation
    - Recording of [C# beginner video tutorials](https://www.youtube.com/playlist?list=PLRZx2y7uC8mNySUMfOQf-TLNVnnHkLfPi) is ongoing. Videos are listed on the official Stride Youtube account. Basically, every page will have an accompanying video. The playlist is being updated on the go.
    - Started making the C# intermediate tutorial section.
    - Continuation of the editor video tutorials once the programming tutorials are up to speed again.
- Some people showed interest in working on a community showcase demo for Stride. A new discord channel #showcasing-team was created.


## VVVV and VL.Stride
User Tebjan explained some more about VVVV and VL.Stride.

Here is a short overview of what we at vvvv are doing and will release somewhen this year:

**What is vvvv gamma?**

- vvvv gamma is a live programming environment for .NET
- VL is our visual programming language that works with every .NET assembly
- Development, compilation and state hot-reload at runtime, we believe this is the future of software development
- You can see the data while you develop
- Can export .NET executables
- More info and download at: [visualprogramming.net](https://visualprogramming.net/)

**What is VL.Stride?**

- Stride will be our 3d rendering library of choice
- We are working on making the Stride features available as convenient nodes in vvvv gamma
- High-Level nodes for: Mainloop, Windowing, Scene Graph, Materials, Models, Textures, etc.
- Low-Level nodes for: Drawing API, Visual Shaders, Vector Math, etc.
- Load a Stride project at runtime and use all content of it
- You can see dev captures at: [vl-xenko-3d-engine-update-3](https://vvvv.org/blog/vl-xenko-3d-engine-update-3)

We actively support the Stride open-source community and financially support the Stride development: [vvvv-meets-xenko](https://vvvv.org/blog/vvvv-meets-xenko)


## Sponsoring and gold members
We welcome our new gold sponsor David Jeske. We would also like to thank him for contributing the work on VXGI last year. He is using Stride for one of his projects.

OUTDATED: As off November 2021, we will use [Open collective](https://opencollective.com/stride3d).

Also, a friendly reminder, that if you [sponsor Stride through Github](https://github.com/sponsors/xen2), the reward is doubled by Github.

~~You can also still sponsor through [Patreon](https://www.patreon.com/stride3d)~~.

## Links 
In case you missed them, here are the new links that you should be using:

- Github: [{{site.links.github-stride-url}}]({{site.links.github-stride-url}})
- Website: [{{site.links.stride-url}}]({{site.links.stride-url}})
- Documentation: [{{site.links.docs-manual-url}}]({{site.links.docs-manual-url}})
- Twitter: [{{site.links.twitter-url}}]({{site.links.twitter-url}})
- Youtube: [{{site.links.youtube-url}}]({{site.links.youtube-url}})

If you have any further questions, feel free to reach out on Discord or the forum.
