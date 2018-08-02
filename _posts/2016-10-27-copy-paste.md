---
layout: post
title: 'Copy-Paste Improvements Coming Soon!'
author: 'Silicon Studio'
popular: true
image_thumb: /images/blog/copy_paste/thumb.jpg
disqus_short_name: paradox3d
---

Xenko team is working on some new features for 1.9!

Click to read more about the new functions added to our Copy-Paste feature.

<!--more-->
 ---

We are working hard to add some important new features to our next release and we’re pretty sure you’ll be pleased with our improvements to the cut, copy and paste interactions, for one. Our development team is excited to offer you **one of the most advanced clipboard support systems** found in other game engines today. In the past we only supported copy and pasting of assets, but now you can **copy-paste pretty much anything!**


Any entities in a scene are now copyable, as well as any sprites of a sprite sheet, UI elements, or even a single property in the property grid! For instance, in our implementation of Copy-Paste, you can copy a list (assuming the type of values are compatible) and perform any of the following operations:


Insert it into another list at various positions, for example:

<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/copy_paste/Copy_InsertIntoList.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
	   <source src="../../images/blog/copy_paste/Copy_InsertIntoList.mp4" type="video/mp4">
	</video>
  </div>
</p>

*Copy and insert into the list (by pasting at a list item level).*


<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/copy_paste/Copy_AppendToList.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
	   <source src="../../images/blog/copy_paste/Copy_AppendToList.mp4" type="video/mp4">
	</video>
  </div>
</p>
*Copy and append to a list, for example, append it to the end of the list.*


<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/copy_paste/Copy_ReplaceList.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
   		<source src="../../images/blog/copy_paste/Copy_ReplaceList.mp4" type="video/mp4">
	</video>
  </div>
</p>

*Copy and replace the whole list.*

A bit more difficult to explain, but perhaps easier to show than write about is **copy and replace at an item level**. This action (shown in the video below) will remove the item (at its position in the list) and insert the copied ones starting at the same position of the item in the list. In our example below, the copy replace starts from Item 2 in List 2:

<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/copy_paste/Copy_ReplaceIntoList.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
	   <source src="../../images/blog/copy_paste/Copy_ReplaceIntoList.mp4" type="video/mp4">
	</video>
  </div>
</p>


Some information about copying entities and prefabs:

**An entire hierarchy of entities can be copied from one scene or prefab to another scene or prefab**. Prefab instance will keep their reference to the source prefab as illustrated in the following example:



<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/copy_paste/CopyPaste_BetweenScenes2.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
	   <source src="../../images/blog/copy_paste/CopyPaste_BetweenScenes2.mp4" type="video/mp4">
	</video>
  </div>
</p>

*The prefab “MyHero” is copied into the scene. Links to the prefab are maintained.*


It is also possible to **copy a component from an entity and paste it into another entity**.


In fact, **absolutely any property that can be serialized can be copied**. You can copy something from one scene to another scene, from a sub-element in one scene to another scene and even from a scene to a text file, back and forth as needed. You can also copy simple values in the property grid (e.g., primitives such as int, vector3, string…) between separate Game Studio instances if that is something you find practical and useful.


Here’s an example of copying between scripts and transform entities in the GameStudio Property Grid:  


<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/copy_paste/CopyPaste_PropertyGrid.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
	   <source src="../../images/blog/copy_paste/CopyPaste_PropertyGrid.mp4" type="video/mp4">
	</video>
  </div>
</p>

Look for this feature in our forthcoming **beta release 1.9, coming soon!** As always, we are committed to offering you best-in-class game dev solutions directly in GameStudio.


