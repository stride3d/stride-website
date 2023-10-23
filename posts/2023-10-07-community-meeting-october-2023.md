---
title: "Community Meeting October 2023"
author: aggror
popular: true
tags: ['.NET', 'Meeting', 'Avalonia']
---

On October 7th, a community meeting was held addressing new user influx, planning the release of Stride 4.2, contingent on the .NET 8 launch.

---

## Summary

During this almost 3 hour long session we talked about the following: improving domain knowledge, access rights, and documentation, transferring the Stride Community Toolkit to the official repository, and community-driven initiatives like a new demo project and extending tutorials. Significant attention was given to a substantial editor rewrite from WPF to Avalonia for enhanced cross-platform support, opening it up for community contributions.

Table of Contents:

[[TOC]]

## Short summary of Contributor meeting
A few weeks prior to the community meeting, we held a contributor meeting. This was mostly to address the recent instream of many new users. Since we suddenly got an abundance of user feedback we took and planned some steps.

* Inventorizing domain knowledge and access rights.
  * This overview will be posted soon on GitHub.
* Moving the Stride [Community Toolkit](https://github.com/stride3d/stride-community-toolkit) to the [official Stride repositories](https://github.com/stride3d).
* Investigating nightly/weekly/monthly builds and releases.
  * The idea of having more frequent releases was discussed to provide users with the latest PRs and fixes, whilst also having more publicity.
  * Concerns were raised about the potential impact on development velocity and the need for stabilization phases. As soon as the new build system (arranged by Xen) is up and running, we can decide on how often we make an official (minor) release. More on this later this year.
* Updating contributors' documentation.
  * Next to the [official documentation/tutorials](https://doc.stride3d.net/), we also have various wiki pages per repository. Especially the documentation for Contributors and building from source, needs some love. Aggror is going to make an initial pull request for this.
* Planning and creating videos for contributors.
* Adjusting the strategy with OpenCollective Projects: here we came to the consensus that we required more feedback which we would gather during the community meeting.

## Release of 4.2
Stride 4.2 is around the corner, but when exactly?

* For 4.2 we are waiting for the official release of .NET 8 which is to be release on November 14, 2023.
  * Since we want to release a version for .NET 6 and .NET 8, our goal is to release within a few days after the release of .NET 8.
* Prior to the official release we will have a release candidate. This will be announced when it is available.
* At the moment there is 1 open bug and 1 open pull request for a feature. Other than that, the build is locked for features. Only bug fixes would be allowed in
* The open pull request for [Silk.NET](https://github.com/stride3d/stride/pull/1123). will be moved to 4.3 to ensure stability.
* For more info on the [final items](https://github.com/stride3d/stride/discussions/1699).


## Open Collective
Next we discussed the use of [Open Collective](http://opencollective.com/stride3d) for donations and funding specific projects.
Although not mentioned in the meeting, our current funding is **12,992.34 USD**.

* Up until this point it has been quite a challenge finding the right developers for existing Projects. The most recent successfully funded Project was the [Bug bounty for Vulkan fullscreen](https://opencollective.com/stride3d/projects/bug-bounty-vulkan-fullscreen).
* There have been several suggestions to make funding more attractive, such as increasing compensation and investing in areas like documentation, marketing, and design next to coding Projects.
* Every project should have a referencing GitHub ticket that contains as much detail as possible for the deliverables.
* There are currently two talks ongoing for specific development. Once we have confirmation we will communicate this with the community.

### New projects
We will add several new Projects to the Open Collective. This will give members a clear view on 'targets' that we like to see funded.

* Extending tutorials. Both written and video tutorials
  * New tutorial set for a small 3D (platformer) game
  * Contributor tutorials
* Demo scene 2024 (more on this below)
* Stride editor Avalonia (more on this below)


## New Demo project
We want to have a new demo sample project that demonstrates Strides capabilities. Members who want to help out, can add to the discussion [here](https://github.com/stride3d/stride/discussions/1800).

## Community Toolkit
There is a new initiative called the [Stride Community Toolkit](https://github.com/stride3d/stride-community-toolkit), aimed at aggregating common features, helpers, and extensions to streamline Stride development. It allows community members to test and enhance tools and propose their integration into the engine. This project has come to fruition with the combined effort of several users, and specifically the repositories off [dfkeenan](https://github.com/dfkeenan/StrideToolkit) and [VaclavElias](https://github.com/VaclavElias/).

## Stride Plugins
A topic talked about for several years now and it's quite an important one. Plugins allow you, for one, extend the editor with new functionality without having to build the engine from source. Ideally you want to go to some (NuGet) store and click -> install this awesome extension/plugin for Stride.

If you want to contribute to the discussion on how to do this technically.

We can divide plugin support into 2 categories:

* Asset plugins: these would be purely models, textures, prefabs, components
For this [Manio143](https://github.com/manio143) is taking the lead.
* Editor plugins: this category currently is not viable because of the dependency to another large topic: the need to rewrite the editor to a new library, replacing WPF.

Since we are short on development time here, we need to take into account that it will be a while before we can see the first results of this.

## Stride UI Rewrite
The Stride editor is built with WPF and therefore only works on Windows. WPF isn’t really being developed anymore and on top of that we want to start supporting the editor on Linux. We can only do so by rewriting the editor to another UI framework.

Just like the Plugin topic, the [Editor rewrite](https://github.com/stride3d/stride/discussions/1031) is a big topic. Probably the biggest topic of them all. The editor rewrite has been discussed in great lengths on both Discord and GitHub in the past few years. People have shared their ideas on which framework to use (Avalonia, MAUI, Uno etc), made some prototypes, even ported the Stride launcher. But we never really ‘actively’ made this an official item since it would take a full time developer many months to work on this task.

Members have been asking if they can help out with the rewrite, but up until this point, there wasn't really an official starting point. We also don’t want to waste the prototype/knowledge already collected. That is why we will soon have an official GitHub branch in the Stride repository where all Editor UI rewrites are taking place. We are fully aware that this might take a long time and a lot of effort from multiple people, but we have to start somewhere. We also anticipate that we can use some of the OpenCollective funding for this.

So regardless of time/developer power: we have landed on using the [Avalonia UI framework](https://avaloniaui.net/) to rewrite the editor. Aggror will set up a GitHub topic summarizing how people can contribute to this UI rewrite branch and inventorize how we can split this massive task into subtasks.. More details on this will follow later this year.

## Acknowledgements
We extend our heartfelt gratitude for all the recent donations that have been made. Your generous contributions significantly aid in the continuous development and enhancement of the Stride community and projects. Thank you for your support and belief in our collective efforts.

In particular we want to thanks these donors:


### Long time Stride supporters
*  {% include sponsor-org.md key:'vvvv' emoji:'🥇' %}

   <a href="https://visualprogramming.net/"><img src="https://images.opencollective.com/vvvv/8ab0acd/logo/256.png?height=72" alt="vvvv. A visual live-programming environment that takes you from rapid prototyping to final production"></a>

### Platinum Striders
* {% include sponsor-org.md key:'happenstance' emoji:'🏆' %}
 
   <a href="http://www.happenstancegames.com/"><img width=64 src="https://www.stride3d.net/images/sponsors/HappenLogo.webp" alt="Happenstance games logo"></a>

### Gold Striders

* {% include sponsor-user.md key:'vaclav' emoji:'🥇' %}
* {% include sponsor-org.md key:'lucid' emoji:'🥇' %}
* {% include sponsor-user.md key:'skidvis' emoji:'🥇' %}