---
layout: post
title: 'Feature spotlight: particle effects'
author: 'Silicon Studio'
image_thumb: /images/blog/2017-01-18-particles/thumb.png
disqus_short_name: paradox3d
---

Happy 2017! 

For our first post of the year, we're moving the spotlight back to a cool Xenko feature: particles. Particles are such an important aspect of almost every game and as a follow-up to our particles tutorial, we wanted to share with you a little more info about our particle system.

<p>
  <div id="Particles_popup" class="mfp-video mfp-hide embed-responsive-anyratio">
    <video controls="" loop="" preload="none">
        <source src="../../images/blog/2017-01-18-particles/particle-effects-final-compressed.mp4" type="video/mp4">
    </video>
  </div>
  <a href="#Particles_popup" class="video-popup">
    <div class="embed-responsive-anyratio"><div class="zoom-in"></div><div class="video-play-button"></div>
      <video autoplay loop class="responsive-video" poster="../../images/blog/2017-01-18-particles/particle-effects-final-pic.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
         <source src="../../images/blog/2017-01-18-particles/particle-effects-final-compressed.mp4" type="video/mp4">
      </video>
    </div>
  </a>
</p>

With Xenko's powerful particles system, you can implement effects like rain, explosions fire, smoke, electricity, magic spells, and lots more. Particles are a great way to bring your game worlds to life.

You can build particle effects completely inside Xenko Game Studio. Just add a Particle System component to your entity. The system is extensible, and any part can be customized in depth. And because Xenko is open-source, you can modify the code as you need.

Unlike legacy game engines, the Xenko particle system is modular: you add only the options you need, and remove anything you don't. This means no wasted CPU cycles loading effects you're not using.

To demonstrate how you can build particle effects from scratch in Xenko, we've put together a [trail effect tutorial](http://doc.xenko.com/latest/manual/particles/tutorials/create-a-trail.html). Follow the steps to add a trail effect to a sword slash animation.

And to give you a taste of where you can go after that, here's a more elaborate trail that combines multiple particle effects:

<p>
  <div id="Swordslash_popup" class="mfp-video mfp-hide embed-responsive-anyratio">
    <video controls="" loop="" preload="none">
        <source src="../../images/blog/2017-01-18-particles/sword-slash.mp4" type="video/mp4">
    </video>
  </div>
  <a href="#Swordslash_popup" class="video-popup">
    <div class="embed-responsive-anyratio"><div class="zoom-in"></div><div class="video-play-button"></div>
      <video autoplay loop class="responsive-video" poster="../../images/blog/2017-01-18-particles/sword-slash.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
         <source src="../../images/blog/2017-01-18-particles/sword-slash.mp4" type="video/mp4">
      </video>
    </div>
  </a>
</p>

If you'd like to see how this particular effect works, [download the project file](http://doc.xenko.com/latest/manual/particles/tutorials/media/MyTrailEffect.zip) and take a look.

Don't forget, Xenko comes with some pre-made particles included as prefabs in the asset packs, too. To check them out, just select the Particles asset pack when you create a project.

We're really busy working on some important new features. Stay tuned for more news about what's to come. 

Happy tinkering!