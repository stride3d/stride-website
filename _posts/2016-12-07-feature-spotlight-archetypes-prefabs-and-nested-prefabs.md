---
layout: post
title: 'Feature spotlight: archetypes, prefabs, and nested prefabs'
author: 'Silicon Studio'
image_thumb: /images/blog/2016-12-07-prefabs/prefab_thumb.png
popular: true
disqus_short_name: paradox3d
---



We released two really cool features, archetypes and prefabs, back in Xenko 1.6β. Open the post to see how these save our developers time. 

<!--more-->
---

Finding yourself constantly duplicating or updating the elements for your game? In Xenko 1.6β, we introduced **archetypes** and **prefabs**. These let you share properties between assets and elements of your games. Create reference assets and modular blocks for your scenes, embed them together, let Game Studio automatically update them when needed and **save tons of time**!

## Archetypes

With archetypes, you can take an asset and derive a new asset from it. The new asset uses the original asset as the archetype, which means it shares its properties. If you modify the archetype, the derived asset also changes. This means that instead of editing each asset individually, you can edit the archetype and Game Studio automatically updates every derivative asset at the same time.

You can also override specific properties in the derived asset. These properties become specific to the derived asset. They aren't affected by further changes to the value in the archetype, but all other properties stay synchronized. This lets you create different versions of an asset that still share a common base.

<div class="pull-right">
  <a href="../../images/blog/2016-12-07-prefabs/archetypes_pic.png" class="image-popup">
    <div class="rt-image"><div class="zoom-in"></div><img src="../../images/blog/2016-12-07-prefabs/archetypes_pic.png"></div>
  </a>
</div>

## Prefabs

Prefabs are an extension of the archetype feature. A prefab is a bunch of entities organized hierarchically with components like models, collider shapes, lights, scripts, and so on. Then you add instances of that prefab to your scene, just as you would with a model or other asset. This creates a copy of each entity in the prefab, with the same hierarchy, and links them to the corresponding entity in the prefab. Any change you make to an entity in the prefab is automatically applied to all your instances. Game Studio updates entities in **real time**, so you can see every change immediately.

The most common use for prefabs is to create a small piece of your world - like a car, a rock, a piece of furniture, an NPC, or whatever - and duplicate it as many times as you need. When you need to modify that object - for example, if you want to add a light or particle effect, or add or move its entities - you can do it in one place and Game Studio applies the change automatically everywhere at once.

<p>
  <div id="prefab1_popup" class="mfp-video mfp-hide embed-responsive-anyratio">
    <video controls="" loop="" preload="none">
        <source src="../../images/blog/2016-12-07-prefabs/prefab1.mp4" type="video/mp4">
    </video>
  </div>
  <a href="#prefab1_popup" class="video-popup">
    <div class="embed-responsive-anyratio"><div class="zoom-in"></div><div class="video-play-button"></div>
      <video autoplay loop class="responsive-video" poster="../../images/blog/2016-12-07-prefabs/prefab1.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
         <source src="../../images/blog/2016-12-07-prefabs/prefab1.mp4" type="video/mp4">
      </video>
    </div>
  </a>
</p>

You can change the entity hierarchy on the instance side without breaking the link to the original prefab. When you add an entity to the prefab, Game Studio adds it to the same parent or after the same sibling. If you delete the parent entity in the instance, Game Studio discards the entity. This means you can easily instantiate simple prefab subsets.

<p>
  <div id="prefab2_popup" class="mfp-video mfp-hide embed-responsive-anyratio">
    <video controls="" loop="" preload="none">
        <source src="../../images/blog/2016-12-07-prefabs/prefab2.mp4" type="video/mp4">
    </video>
  </div>
  <a href="#prefab2_popup" class="video-popup">
    <div class="embed-responsive-anyratio"><div class="zoom-in"></div><div class="video-play-button"></div>
      <video autoplay loop class="responsive-video" poster="../../images/blog/2016-12-07-prefabs/prefab2.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
  	   <source src="../../images/blog/2016-12-07-prefabs/prefab2.mp4" type="video/mp4">
      </video>
    </div>
  </a>
</p>

### Override prefab properties

Of course, you can override prefab properties, just like with archetypes. Change any prefab instance and the change remains in that instance even if you then edit the original prefab.

<p>
  <div id="prefab3_popup" class="mfp-video mfp-hide embed-responsive-anyratio">
    <video controls="" loop="" preload="none">
        <source src="../../images/blog/2016-12-07-prefabs/prefab3.mp4" type="video/mp4">
    </video>
  </div>
  <a href="#prefab3_popup" class="video-popup">
    <div class="embed-responsive-anyratio"><div class="zoom-in"></div><div class="video-play-button"></div>
      <video autoplay loop class="responsive-video" poster="../../images/blog/2016-12-07-prefabs/prefab3.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
        <source src="../../images/blog/2016-12-07-prefabs/prefab3.mp4" type="video/mp4">
      </video>
    </div>
  </a>
</p>

### Nested prefabs

You can also nest prefabs inside other prefabs. This means you can build your project in a modular way. For example, you can create a room prefab, then use that to create a house prefab, then use that to create a village. Change something in the room prefab - like a piece of furniture - and the change appears in every house and every village where the room is used. Or you could create a basic prefab for every NPC, attach a script, then create variations to implement different NPCs: animals, monsters, AI companions, soldiers - whatever you need. There's no limit to the amount of prefabs you can nest.

<p>
  <div id="prefab4_popup" class="mfp-video mfp-hide embed-responsive-anyratio">
    <video controls="" loop="" preload="none">
        <source src="../../images/blog/2016-12-07-prefabs/prefab4.mp4" type="video/mp4">
    </video>
  </div>
  <a href="#prefab4_popup" class="video-popup">
    <div class="embed-responsive-anyratio"><div class="zoom-in"></div><div class="video-play-button"></div>
      <video autoplay loop class="responsive-video" poster="../../images/blog/2016-12-07-prefabs/prefab4.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
        <source src="../../images/blog/2016-12-07-prefabs/prefab4.mp4" type="video/mp4">
      </video>
    </div>
  </a>
</p>

### Improve performance with prefab models

If building everything at a detailed level with prefabs is affecting performance, Xenko has an experimental feature that lets you generate 3D models from prefabs. Just create a **Prefab Model** asset and drag your prefab into it. When you modify the prefab, every prefab model instance updates with the changes. We're extending the feature to physics colliders, and improving the workflow so you can group entities more easily. We’ll talk about that in a future blog post.

In the meantime, have fun with prefabs! They make managing your project a whole lot easier.