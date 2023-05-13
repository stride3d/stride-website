---
title: 'Forums Opened, New Release With Image-Based Lighting'
author: silicon-studio
image_thumb: /images/blog/release-1.0-beta3/CubemapIBLSample_thumb.jpg
---

Discover the latest Stride release featuring Cubemap Image-Based Lighting and join our newly opened forums for discussions, support, and collaboration.

---

[[TOC]]

## Forums

<p>Due to popular demand, we have just opened a shiny new <a href="http://forums.stride3d.net">Xenko discussion forums</a>!</p>
<p>We hope this place will become an important place for our community to discuss, help each other, collaborate, improve Xenko and show us some of their work.</p>
<p>Even though Xenko Team will follow discussions and might answer, we currently won't provide any official support here and might not answer your bug/feature requests (a forum is not well suited for that).</p>
<p>Please use <a href="https://github.com/SiliconStudio/paradox/issues">Xenko GitHub</a> for bug/enhancement requests, and our <a href="http://answers.stride3d.net">AnswersHub website</a> for Q&A.</p>

## Cubemap Image-Based Lighting

{% img 'Cubemap IBL Sample' '/images/blog/release-1.0-beta3/CubemapIBLSample.jpg' %}

<p>Over the next few months, on top of working on a level editor, we also want to improve the rendering quality. We know Xenko can scale well from mobile to high-end and we want to prove it!</p>
<p>As part of this effort, this release includes image-based reflection lighting, with parallax correction.</p>
<p>It supports multiple cubemaps: they will be accumulated during a specific deferred rendering step, similar to prelight rendering.</p>
<p>Feel free to try it easily with a new dedicated sample, that you can create with only a few clicks inside Xenko Studio.</p>

## Spotlight Shadowmaps

<p>On top of our already existing cascade directional shadowmaps, this release adds support for spotlight shadowmaps.</p>

## Improvements

<p>We have done numerous bugfixes and improvements (see full details in changelog).</p>

<p>Amongst them are a new UI slider component, physics has been modularized, Windows Phone/Store support has been improved (PCL support, properly build packages), GameStudio property grid should behave much better, etc...</p>

## Version 1.0.0-beta03

<p>Release date: 2014/11/11</p>

### New Features

<ul>
    <li>Engine: Add cubemap components to place cubemaps in the scene or render them at runtime.</li>
    <li>Graphics: Add skybox renderer from a TextureCube (similar to background renderer).</li>
    <li>Graphics: Add cubemap reflections for deferred rendering.</li>
    <li>Graphics: Support of shadow mapping in forward rendering for spot lights. Only 1 cascade is supported at the moment.</li>
    <li>Samples: Add CubemapReflection sample.</li>
    <li>Samples: Add spot light shadow in ForwardRendering sample.</li>
    <li>Shaders: Add several cubemap shaders for sampling, reflection, parallax correction etc.</li>
    <li>UI: Add new UI element: Slider</li>
    <li>Website: <a href="http://forums.stride3d.net">Xenko Forums</a> has just been opened. Feel free to use it to discuss about Xenko, help each other, collaborate and show off what you did with Xenko!</li>
</ul>

### Enhancements

<ul>
    <li>Studio: Property grids have been reworked to be more efficient and easily extendable.</li>
    <li>Studio: Numeric input controls have been improved.</li>
    <li>Physics: Physics assembly now depends on Engine (instead of the opposite). Soon Physics (and some other modules) will become optional.</li>
    <li>Input: Allow emulation of several touch pointers at a same time with mouse different buttons.</li>
</ul>

### Issues fixed

<ul>
    <li>Assets: Fix shininess import from FBX files.</li>
    <li>Core: EnumerableExtensions.LastIndexOf() wasn't working properly (<a href="https://github.com/SiliconStudio/paradox/issues/62">#62</a>).</li>
    <li>Game: Properly support windows with height 0 when AllowUserResizing is true (<a href="https://github.com/SiliconStudio/paradox/issues/65">#65</a>).</li>
    <li>Game: GameForm is created with a black background, to avoid initial flickering while Windows is being initialized (<a href="https://github.com/SiliconStudio/paradox/issues/54">#54</a>).</li>
    <li>Input: Alt+F4 is now properly working on Windows Store/Phone platforms (<a href="https://github.com/SiliconStudio/paradox/issues/74">#74</a>).</li>
    <li>Input: Properly maps all extended keyboard keys on Windows Store/Phone platforms (<a href="https://github.com/SiliconStudio/paradox/issues/84">#84</a>).</li>
    <li>Input: Fix several crashes and bugs in GestureRecognizers and mouse button states.</li>
    <li>Misc: PCL can now be used in Windows Store/Phone platforms (<a href="https://github.com/SiliconStudio/paradox/issues/72">#72</a>).</li>
    <li>Samples: SimpleDynamicTexture was using expected screen size instead of actual screen size, resulting in incorrect picking in fullscreen mode (<a href="https://github.com/SiliconStudio/paradox/issues/75">#75</a>).</li>
    <li>Shaders: Geometry shaders are forced to transmit SV_Position stream to pixel shaders.</li>
    <li>Shaders: Compositions (especially arrays) couldn't be used in child classes of the one containing their declaration. Function and member calls weren't correctly resolved.</li>
    <li>Studio: Fix preview and thumbnail of materials with normal map.</li>
    <li>Studio: Fix binding errors in the property grid (<a href="https://github.com/SiliconStudio/paradox/issues/29">#29</a>).</li>
    <li>Studio: Fix undesired hue changes and loss of precision in extremal values in the color picker.</li>
    <li>Studio: Fix "Show in explorer" on assets.</li>
    <li>UI: UIImage borders were not properly rendered when image had Orientation.Rotated90.</li>
</ul>

### Breaking changes

<ul>
    <li>Graphics: Remove Rotated180 and Rotated90C from ImageOrientation enumeration for code simplicity and efficiency purpose.</li>
    <li>Graphics: Change ImageFragment.Region type from Rectangle to RectangleF and corresponding batch draw function API (SpriteBatch/UIBatch).</li>
    <li>Graphics: CopyRegion now contains additional parameters for subresource indices and destination offset.</li>
    <li>Graphics: RasterizerState and DepthStencilState constructors are now private to match other Graphics classes. static New() should be used instead (<a href="https://github.com/SiliconStudio/paradox/issues/83">#83</a>).</li>
    <li>Physics: Physics engine initialization has changed since now Physics is a optional module. (please check updated samples)</li>
    <li>Physics: Added Convex Hull simple wrap shape and complex decomposition as well.</li>
</ul>

### Known Issues

<ul>
    <li>Physics: Complex convex hull decomposition can be a very long process and there is visual feedback for it.</li>
    <li>Physics: Convex hull shape debug shapes in game studio are not rendering very well, although the asset will be OK.</li>
</ul>

