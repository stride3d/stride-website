---
layout: post
title: 'Navigation Mesh Preview'
author: 'Silicon Studio'
popular: true
image_thumb: /images/blog/navmeshes/thumb.jpg
disqus_short_name: paradox3d
---

Another reason we’re psyched for **Xenko 1.9β!** Open post for more details about Xenko’s navigation mesh.




<!--more-->


In Xenko 1.9β, you can create a **navigation mesh** powered by [Recast and Detour](https://github.com/recastnavigation/recastnavigation) with **real-time feedback** directly in the **Xenko GameStudio!** The navigation mesh is especially useful for RPGs or top-down strategy games, as you can use it to **guide characters through complex scenes**. The real-time feedback makes it easy to adjust and conveniently customize AI movement and the dimensions of the navigation mesh itself. The green outline of Xenko’s Navigation Mesh shows where the AI comes into play and where the colliders are set.


<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/navmeshes/withOutlineAE.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
	   <source src="../../images/blog/navmeshes/withOutlineAE.mp4" type="video/mp4">
	</video>
  </div>
</p>

In the videos, you can see how the AI navigates the level using the logic within the navigation mesh, and how the colliders will automatically be set in real-time. Of course, you can script AI movement manually, too.


<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/navmeshes/NoOutlineAE.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
	   <source src="../../images/blog/navmeshes/NoOutlineAE.mp4" type="video/mp4">
	</video>
  </div>
</p>

