---
layout: post
title: 'Feature spotlight: particle effects'
author: 'Xenko Team'
image_thumb: /images/blog/2017-01-18-particles/thumb.png
---

Happy 2017! 

For our first post of the year, we're moving the spotlight back to a cool Xenko feature: particles. Particles are such an important aspect of almost every game and as a follow-up to our particles tutorial, we wanted to share with you a little more info about our particle system.

{% include video src="../../images/blog/2017-01-18-particles/particle-effects-final-compressed" %}

With Xenko's powerful particles system, you can implement effects like rain, explosions fire, smoke, electricity, magic spells, and lots more. Particles are a great way to bring your game worlds to life.

You can build particle effects completely inside Xenko Game Studio. Just add a Particle System component to your entity. The system is extensible, and any part can be customized in depth. And because Xenko is open-source, you can modify the code as you need.

Unlike legacy game engines, the Xenko particle system is modular: you add only the options you need, and remove anything you don't. This means no wasted CPU cycles loading effects you're not using.

To demonstrate how you can build particle effects from scratch in Xenko, we've put together a [trail effect tutorial](http://doc.xenko.com/latest/manual/particles/tutorials/create-a-trail.html). Follow the steps to add a trail effect to a sword slash animation.

And to give you a taste of where you can go after that, here's a more elaborate trail that combines multiple particle effects:

{% include video src="../../images/blog/2017-01-18-particles/sword-slash" %}

If you'd like to see how this particular effect works, [download the project file](http://doc.xenko.com/latest/manual/particles/tutorials/media/MyTrailEffect.zip) and take a look.

Don't forget, Xenko comes with some pre-made particles included as prefabs in the asset packs, too. To check them out, just select the Particles asset pack when you create a project.

We're really busy working on some important new features. Stay tuned for more news about what's to come. 

Happy tinkering!