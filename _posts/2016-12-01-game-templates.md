---
layout: post
title: 'Newly Added Game Templates'
author: 'Silicon Studio'
image_thumb: /images/blog/2016-12-01-game-templates/template_thumb.png
disqus_short_name: paradox3d
---



With Xenko 1.9β, we’ve released our brand spanking new Game Templates! Super fun stuff, so open the blog post to see more!

<!--more-->
---

Templates were designed to help bring your game ideas to life faster. With **Xenko 1.9β** you can now create a project more efficiently with our new templates, which will help kickstart your game development efforts!


We’ve started transitioning from small individual samples to more complete game templates and asset libraries to help you get the most out of Xenko. In the spirit of transitioning Xenko to an overall-game-dev-solution-provider, we’ve implemented templates for three popular game design genres - which you can now use as a starting point for your game.


The three templates we’ve added are:


* **First-person shooter**
* **Third-person platformer**  
* **Top-down camera RPG**


Specifically:


# First-Person Shooter

Arguably one of the most popular game genres today. Xenko’s FPS template helps our developers put together a game with a pre-set, first-person camera where you can shoot at the Xenko crates. The controls support both controllers and mouse/keyboard input. The crates come with physics' collider bodies and are fully interactive. The template also shows how to spawn particle effects alternating between bullet impact effect and a smoke trail depending on if you shoot a wall or a crate. Production quality model and animation assets make it easy to learn about controlling and switching animations.

<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
    <video autoplay loop class="responsive-video" poster="../../images/blog/2016-12-01-game-templates/templateFPS.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
      <source src="../../images/blog/2016-12-01-game-templates/templateFPS.mp4" type="video/mp4">
    </video>
  </div>
</p>

# Third-Person Platformer

This template is a great starting point for ever-popular platformer games. While the template is set in 3D it can be easily tweaked to become a 2D platformer. Just disable camera rotation in your 3D game to transform your game into a 2D platformer. Additionally, we’ve implemented a few techniques which we hope will be useful to you. Controls will now support both controllers and mouse/keyboard style input. The animation controller seamlessly blends the idle, walk and run animations providing striking visual feedback.

<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/2016-12-01-game-templates/templateTPP.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
	   <source src="../../images/blog/2016-12-01-game-templates/templateTPP.mp4" type="video/mp4">
	</video>
  </div>
</p>

# Top-Down Camera RPG

This template positions the camera at a fixed angle above the character and enables touch screen controls as well as mouse point-and-click, similar to many traditional RPGs. It also uses the Navigation Mesh feature so your character won’t get stuck in bad pathfinding or hit walls. On the game logic side, the template shows several kinds of interactions with game objects, like collecting coins and loot and attacking and breaking objects.


<p>
  <div class="embed-responsive-anyratio"><div class="video-play-button"></div>
	<video autoplay loop class="responsive-video" poster="../../images/blog/navmeshes/NoOutlineAE.jpg" onplay="feature_video_onplay(event)" onpause="feature_video_onpause(event)">
	   <source src="../../images/blog/navmeshes/NoOutlineAE.mp4" type="video/mp4">
	</video>
  </div>
</p>

# New Game Template

![New Game Template](../../images/blog/2016-12-01-game-templates/new_game_template.png)

Our New Game template has access to existing production quality assets we used to create our templates! We have particle effects, physically-based materials, lots of animations for our new Xenko mannequin model and building blocks with physics ready for your rapid level prototyping. Unlike the templates, which are kept concise, the extra packages contain many more assets. You’ll even find some props which are not in the templates (swords for example!).

As always, we are committed to offering you best-in-class game dev solutions directly in Xenko’s Game Studio. 


Additionally, we are looking to be able to give our users the opportunity to make their own templates that you will be able to share with other Xenko users. Of course, we’re planning on offering more templates as well. Keeping in line with our goal to become one of the best game engines for VR, we are also planning on adding a VR template in the not very distant future. 


Do you have a template that you’d like to see on our Roadmap? Let us know in the comments! 
