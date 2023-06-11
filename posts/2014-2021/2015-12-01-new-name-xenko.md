---
title: 'Huge Update! Paradox Name Change!'
author: silicon-studio
image_thumb: /images/blog/release-1.4/XenkoLogoTM_thumb.png
tags: ['Announcement']
---

With the end of the year upon us, we are starting to get excited for Paradox’s official release for next year. With a new year comes a fresh start, so we’ve decided to update the Paradox name to more fully encompass what we think is great about our game engine and what direction we want to move toward.

 ---

 [[TOC]]

## New Name: Xenko

So, on to the big news! Paradox is officially changing its name to *Xenko*. 
We wanted to show our roots a bit more since we are one of the few Japanese-based gaming engines.

{% img 'Xenko' '/images/blog/release-1.4/XenkoLogoTM.png' %}

*Xenko* was inspired by the Japanese word, *Zenko* 善光. The Japanese characters signify perfection and light. Sticking with the Xenko theme, we will strive to improve your experience with the Xenko engine (ah, feels good to say the new name).

We know this is a big change, and we truly appreciate your patience as we have been honing in on this transition. 
Please note that support and download access to any previous Paradox releases will end on **<u>December, 25th, 2015</u>**. 

We will also be releasing a new version that reflects the transition to the Xenko name. We invite you to download it here.

And before you ask, yes, this new release can be used without affecting the old Paradox releases and contains migration tools so you can continue to work on your Paradox projects with Xenko. The newest update is a transitional release, so it will be mostly similar to the latest version of Paradox (1.3.4) in terms of features.

## New Features With This Release
 
### Users Can Now Edit Documentation

We're so glad to have added this feature that allows users to share information about how to best use Xenko. We know our documentation is not entirely complete yet, so we are really looking forward to hearing and sharing information through the community.

The process for adding to Xenko documentation is real simple. ‘Improve this Doc’ in the top right hand corner and you will be able to edit our documentation. If the user-submitted information passes the verification process, we will add it to the documentation.

{% img 'Edit documentation on GitHub' '/images/blog/release-1.4/EditDocOnGithub.png' %}

### Automatic Symbols and Source Code Download

Being open source is great, but only if you can find the sources matching the binary version you are using. From now on, Xenko will download the right sources and symbols for an optimal debug and programming experience so you don’t have to worry about doing it yourself.

The process is simple. All you need to do is open Visual Studio options, go to Debugging > General, and check “Enable Source Server Support”:

{% img 'Enable PDB' '/images/blog/release-1.4/EnablePDB.png' %}

## Coming Later December

We currently are planning to release updates for the following features later this December:

### New Animation System

We've added a new animation system that allows you to animate any game property throughout the engine. Animating models is great but why limit animation only to the models? With the newest version of the engine, you will be able to animate material color, UI transparency, and generally any property of your game!
 
### Simple, In-Game Profiler

As good as a game engine can get, at some point, you're always going to be limited by the hardware's performance. To help with this, we've added a built-in profiler so that you will easily be able to identify problems and bottlenecks in your game. Even better, you will be able to turn on the built-in profiler at any point during the process of making your game.
 
### Debug Physics Collision Shapes At Run-Time

Debugging physics is never easy. To streamline this, you will be able to display all the physics collision shapes at any time in your game.
 
### Built-In Scripts

Writing scripts takes time and is not necessarily accessible to everyone. To improve on this, we added some built-in scripts to the engine so that users will be able to do basic operations with ease. Things like animating the camera, displaying physics debug shapes, and adding profiling information can be done in just a few clicks.
