---
layout: post
title: 'Xenko 2.0 released now!'
author: 'Silicon Studio'
image_thumb: /images/blog/release-2.0/thumbnail.jpg
popular: true
disqus_short_name: paradox3d
---

After nearly two years of open beta, we’re proud to announce that **Xenko is now available as a commercial product**. Xenko 2.0 adds features such as full VR support, a pipeline rendering editor, light probes, and scene streaming management, along with greatly improved stability (more details below).

![Starbreach Image](/images/blog/release-2.0/starbreach.jpg)

We’d like to thank all our beta users for their feedback, which helped us improve Xenko immeasurably over the last two years. We couldn’t have done it without you!

<br/>
<a class="x_download hidden-sm hidden-xs" href="/download" target="_self"><span>(icon)</span> Get Xenko 2.0</a>
<br/>

## Pricing

Xenko remains **free for individual users, small studios**, and **educational purposes**. It will be available to larger businesses through a **monthly subscription**. 

Pricing for Xenko is broken into four tiers:
 
* **Xenko Personal** – Free but limited to small studios, personal use, and students
* **Xenko Pro** – Designed for smaller studios at **$75 per** month per user
* **Xenko Pro Plus** – Designed for larger studios at **$150** per month per user
* **Xenko Custom** – Available for teams with special requirements or large-scale projects

While the Xenko **runtime source code remains open to everyone**, the Game Studio source code is only available in the **Pro Plus** and **Custom** tiers. **Personal** and **Pro** users will be able to extend Game Studio via a plug-in system available later this year.

Xenko **Personal** is not available to non-profit organizations and companies with yearly income above $200k. Additionally, Xenko **Personal** users must display a “Made with Xenko” splash screen in their applications.

For more information about the pricing plan, see the official website [page](/download/)

## Xenko Pro is free until December 31st
To give everybody a chance to check out Xenko 2.0, Xenko **Pro** is **free until December 31st 2017**.

During this period, you can use Xenko without creating a Xenko account and the **Pro Plus** version will be available only by contacting the Xenko team.

The Xenko Store opens on January 1st. From that date, Xenko **Pro** users must purchase a subscription, or switch to the Xenko **Personal** subscription if they’re eligible. The Xenko **Pro Plus** plan will also be available to buy from the online store.

For more information about the welcome campaign, see the official website [page](/download/).

## No need to make your game open-source

From Xenko 2.0, all Xenko users (on any tier) can modify the source code and recompile the engine without having to open the codebase of their game. You can also redistribute modified Xenko source code to other Xenko licensees having access to the same plan as you.

## What about the beta versions?

Beta Xenko versions will remain available for now under the same conditions as before, but will no longer receive updates. We’ll remove the beta versions at some point, so we encourage you to switch to Xenko 2.0. Remember that Xenko is free for individuals and small businesses.

## What’s new in Xenko 2.0?

#### Scene hierarchy and scene streaming

Working with scenes has become more flexible. Instead of a single scene, your game can now use a hierarchy of scenes to organize entities into levels, areas or layers, and let teams collaborate on them more efficiently.

Game Studio displays child scenes together with their parent. Individual scenes can be loaded, unload, locked and moved around.

<video autoplay loop class="responsive-video" poster="/images/blog/release-2.0/scene_editor_640.jpg">
   <source src="/images/blog/release-2.0/scene_editor_640.mp4" type="video/mp4">
</video>

When running your game, the **default scene** set in your **game settings** is loaded as the **root scene** and can be used to store persistent entities. More scenes can be dynamically loaded and unloaded from scripts and added as **child scenes**.

```
var childScene = Content.Load<Scene>("myChildScene");
SceneSystem.SceneInstance.RootScene.Children.Add(childScene);
```

<video autoplay loop class="responsive-video" poster="/images/blog/release-2.0/scene_streaming_640.jpg">
   <source src="/images/blog/release-2.0/scene_streaming_640.mp4" type="video/mp4">
</video>

To get started, take a look at the new built-in `SceneStreamingScript`. It demonstrates background scene loading when passing through trigger volumes. 

You can now use a scene's `Offset` to move its entities both at design time and runtime.

The `ChildSceneComponent` has been removed. We encourage all entities to be managed by a single **entity manager** and rendered by a single **graphics compositor**.

#### Virtual Reality

Enabling VR is now as simple as a single click!

Xenko's clustered forward rendering, with its multisample anti-aliasing, makes it ideal for VR. Xenko uses a single API for every device, with native support for Oculus and HTV Vive (more devices coming very soon).

Xenko comes with a VR game sample that shows you how to implement VR gameplay, including environment interaction and teleportation:

<video autoplay loop class="responsive-video" poster="/images/blog/release-2.0/vr_template_640.jpg">
   <source src="/images/blog/release-2.0/vr_template_640.mp4" type="video/mp4">
</video>

Save valuable time by visualizing and testing VR directly from the scene editor:

<video autoplay loop class="responsive-video" poster="/images/blog/release-2.0/vr_editor_640.jpg">
   <source src="/images/blog/release-2.0/vr_editor_640.mp4" type="video/mp4">
</video>

#### Global illumination with light probes

Light probes capture the lighting at the position you place them. They simulate indirect light, the effect of light bouncing off surfaces and illuminating other surfaces.

They can make a dramatic difference to the mood and appearance of your scene.

<video autoplay loop class="responsive-video" poster="/images/blog/release-2.0/light_probes_640.jpg">
   <source src="/images/blog/release-2.0/light_probes_640.mp4" type="video/mp4">
</video>

Light probes can be **placed freely** and are processed **per pixel**. This means you can use them not only on small dynamic objects, but also large or static objects (until we have light maps for those!).

Last but not least, you can now very easily capture a DDS cubemap from current camera position in editor, for use as a diffuse or specular skybox light.

#### Light shafts

Xenko now supports shadow map-based light shafts for directional lights.

<video autoplay loop class="responsive-video" poster="/images/blog/release-2.0/lightshaft_CoS_640.jpg">
   <source src="/images/blog/release-2.0/lightshaft_CoS_640.mp4" type="video/mp4">
</video>

Our implementation uses ray-marching rather than post effects, making the shaft visible and cool-looking even if the light source isn't visible.

<video autoplay loop class="responsive-video" poster="/images/blog/release-2.0/lightshaft_640.jpg">
   <source src="/images/blog/release-2.0/lightshaft_640.mp4" type="video/mp4">
</video>

#### Graphics compositor

The graphics compositor is now a separate asset.

Rendering parameters (such as VR) and post effect parameters can be tweaked in just a few clicks.

![Graphics compositor](/images/blog/release-2.0/graphics_compositor.jpg)

This is just the first step towards making the graphics compositor easy to customize and extend. Stay tuned for more changes in future releases! 

#### Improved Visual Studio experience

We now have full support for **Visual Studio 2017**!

* Xenko Visual Studio extension now supports Visual Studio 2017
* GameStudio recognize Visual Studio 2017.
* Games can use C# 7.0, and our script editor can recognize C# 7.0 and offer C# 7.0 refactoring thanks to Roslyn (you need to make your solution VS2017+ for it to work).
* Our internal `AssemblyProcessor` which perform various operations on generated assemblies can now work with portable PDB (as generated by .NET Standard projects)

Programmers working with Xenko often go back and forth between Game Studio and Visual Studio. To make their lives easier, we made a few key improvements to the Xenko Visual Studio extension:

* You can now open the current solution in Game Studio directly from Visual Studio.
* Syntax highlighting didn't behave well when switching theme.
* Previously, when assets are compiling, MSBuild didn't report any progress until finished. It now displays information, warnings and errors while it compiles.

Also, our whole build infrastructure and script editor is now based on the latest version of MSBuild 2017 and Roslyn. Supporting the new VS2017 Project System with .NET Standard is just a few steps away!

#### Faster & lighter

In order to provide a better experience for users, we've been working hard on various fronts to make the editor smoother and more responsive. This is still a work in progress and expect regular progress.

Also, package size has been almost divided by 3, resulting in much faster download and install time.

For the full release notes, see the dedicated [page](http://doc.stride3d.net/2.0/ReleaseNotes/).
