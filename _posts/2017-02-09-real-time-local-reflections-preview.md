---
layout: post
title: 'Real-time local reflections preview'
author: 'Silicon Studio'
image_thumb: /images/blog/2017-02-09-real-time-local-reflections/night-reflections.png
popular: true
disqus_short_name: paradox3d
---

We're excited to be working on Xenko's real-time local reflections feature, coming in Xenko's next release. Real-time local reflections are a great way to visually ground objects in a scene. They give your games richer scenes and increased realism in rendering.

![Without local reflections](../../images/blog/2017-02-09-real-time-local-reflections/ball-and-cube-r-off.png)

<i>Without local reflections</i>

![With local reflections](../../images/blog/2017-02-09-real-time-local-reflections/ball-and-cube-r-on.png)

<i>With local reflections</i>

Where the local reflections effect is available, it replaces image-based lighting (called environment lighting in Game Studio). This has the useful side effect of darkening surfaces where the object meets other objects, similarly to ambient occlusion.

![Darkened area](../../images/blog/2017-02-09-real-time-local-reflections/darkened-area.png)

Local reflections are most obvious when they project bright spots onto other surfaces. The effect looks great in night scenes, which have high contrast, and in rainy conditions with lots of reflective surfaces and highlights. Notice how the vending machine lights are reflected in the ground surface in this screenshot:

![Night reflections](../../images/blog/2017-02-09-real-time-local-reflections/night-reflections.png)

In games without lightmaps or global illumination, objects don't interact with each other as they do in reality, making them appear as if they have simply been Photoshopped in. With local reflections, objects appear to be part of the world rather than having been placed arbitrarily. It makes scenes feel much more grounded, and gives objects a feeling of weight.

To create local reflections, Xenko reflects the current rendered frame on itself. The technique employs a **Hi-Z trace** as described in Yasin Uludag's essay "Hi-Z Screen-Space Cone-Traced Reflections" in the book, "GPU Pro 5: Advanced Rendering Techniques".

Essentially, the effect allows the ray steps during the marching phase to skip large amounts of space. When the ray hits hierarchical depth cells, the algorithm progressively refines the level against which cells are checked until it hits the finest level.

![Local reflections graph](../../images/blog/2017-02-09-real-time-local-reflections/local-reflections-graph.png)

<i>(Image courtesy of [Yasin Uludag and Tomasz Stachowiak's talk on screen space reflections](http://www.frostbite.com/2015/08/stochastic-screen-space-reflections/)) </i>

A series of later treatments generates blurriness to approximate how reflections behave on rough surfaces. We've managed to keep the time per frame relatively low (3ms at 720p on GTX960), but the feature works best on high-end computers.

Local reflections are a great tool to have in your kit, but aren't appropriate for every object. It's a **screenspace effect**, meaning it only reflects images that are already on the screen; it doesn't reflect objects that are off-screen or obscured from the player by other objects. Put simply, if the player can't see an object at that moment, then the object isn't reflected. This means local reflections work well in enclosed areas such as corridors and rooms, but less well in open spaces. They also work best on bumpy surfaces, whose chaotic properties hide imperfections in the reflection. They work less well on glossy, mirror-like surfaces, because you naturally expect these surfaces to reflect the whole world.

The local reflections feature will be released in Xenko soon. In the meantime, keep your eyes peeled for more upcoming features!