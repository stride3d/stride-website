---
title: 'Announcing Stride 4.2'
author: aggror
popular: true
tags: ['4.2','Release']
---

Stride contributors are thrilled to announce the release of Stride 4.2, now fully compatible with .NET 8 and leveraging the latest enhancements in C# 12. This release brings significant improvements in performance, stability, and developer experience.

---

Table of Contents:

[[TOC]]

A massive thank you to the open-source Stride community for your dedicated contributions. This release saw X contributions from over Y amazing contributors, each playing a crucial role in making Stride 4.2 a reality.

## Download and Upgrade

You can [download the Stride 4.2 Installer](https://www.stride3d.net/download/) today. Release notes are available [here](https://doc.stride3d.net/latest/en/ReleaseNotes/ReleaseNotes.html).

## Improvements Summary

Stride 4.2 includes numerous enhancements and improvements:

- Full compatibility with .NET 8, taking advantage of [improved runtime performance](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-8/)
- Support for the latest [C# 12 features](https://devblogs.microsoft.com/dotnet/announcing-csharp-12/), enhancing coding efficiency and reducing boilerplate code
- [Changed Assimp binding to Silk.Net.Assimp #1158](https://github.com/stride3d/stride/pull/1158)
- [Can not create "C# Beginner" project. #1650](https://github.com/stride3d/stride/issues/1650)
- [C# Beginner Tutorial Build Errors #1652](https://github.com/stride3d/stride/issues/1652)
- [Game Studio doesnt reload sub projects after changes #1703](https://github.com/stride3d/stride/issues/1703)
  - [fix #1703 Changing the comparison project related and not UPath related #1704](https://github.com/stride3d/stride/pull/1704)
- [Translations fix #1717](https://github.com/stride3d/stride/pull/1717)
- [Change Assimp to Silk.NET.Assimp implementation #1719](https://github.com/stride3d/stride/pull/1719)
- [Runtime rasterized fonts are completely broken #1750](https://github.com/stride3d/stride/issues/1750)
- [Migration NET6+ and more gettextnet#2](https://github.com/stride3d/gettextnet/pull/2)
- [Added the ability to copy imported assets automatically to the Resources dir #1827](https://github.com/stride3d/stride/pull/1827)
- [Feature: Add Support for F# and VB Project Types #1821](https://github.com/stride3d/stride/pull/1821), currently only for code-only projects
  - [F# examples](https://stride3d.github.io/stride-community-toolkit/manual/code-only/examples/basic-examples-fs.html)
  - [Visual Basic examples](https://stride3d.github.io/stride-community-toolkit/manual/code-only/examples/basic-examples-vb.html)
- [[Editor] Add dynamic snapping for selected objects #1801](https://github.com/stride3d/stride/pull/1801)
- [Stride Diagnostics Analyzer #1864](https://github.com/stride3d/stride/pull/1864)
- [Let the user pick which animation stack to import in an fbx #1977](https://github.com/stride3d/stride/pull/1977)
- [[OpenVR] Handle custom resolution specified by the user through VR settings #2000](https://github.com/stride3d/stride/pull/2000)

<!--- [Direct3D with Silk.NET #1123](https://github.com/stride3d/stride/pull/1123)-->
<!--- [Silk.NET D3D Discussion #1176](https://github.com/stride3d/stride/issues/1176)-->

<!-- Probably not needed -->

## What's new in Stride 4.2

- **.NET 8 Integration**: Experience the power and efficiency of the latest .NET version in your game development.
- **C# 12 Features**: Utilize cutting-edge language features to write more concise and maintainable code.

<!-- ToDo: Add F#, Visual Basic examples, but maybe in a separate post -->

## Links 

- GitHub: [{{site.links.github-stride-url}}]({{site.links.github-stride-url}})
- Website: [{{site.links.stride-url}}]({{site.links.stride-url}})
- Documentation: [{{site.links.docs-manual-url}}]({{site.links.docs-manual-url}})
- Twitter: [{{site.links.twitter-url}}]({{site.links.twitter-url}})
- YouTube: [{{site.links.youtube-url}}]({{site.links.youtube-url}})