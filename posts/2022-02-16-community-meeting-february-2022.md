---
title: 'Community Meeting February 2022'
author: aggror
popular: true
tags: ['Meeting']
---

The Striders discussed allocating their $4,220.48 USD budget for bug bounties and new features. Funding proposals include fullscreen Vulkan support, UI slowness bug research, Linux runtime support, decal support, morphing target animation support, and embedding Stride into UI frameworks. Release 4.1 is in progress, and an Epic grant proposal is being prepared.

---

## Summary

On February 16th, we held a whopping 2.5-hour community meeting covering various subjects.

[[TOC]]

## Current Funding

With a budget of **$4,220.48 USD** at the moment of the community meeting happening, we wanted to decide on whether to allocate money for bugs and new features. So a big thanks to all those who are donating to this project. In particular:

* {% include sponsor-org.md key:'ore' emoji:'💎' %}
* {% include sponsor-org.md key:'vvvv' emoji:'🥇' %}
* {% include sponsor-user.md key:'vaclav' emoji:'🥇' %}

{% img 'Ore Logo' '/images/sponsors/ore_system-next_gen_nfts_dark.png' %}

## Funding for bug bounties
* Fullscreen Vulkan support
    * [Github ticket](https://github.com/stride3d/stride/issues/455)
    * Bounty: $200,- USD
    * AggrorJorn will provide the texts for the bounty and once approved by other contributors/developers in the team, this will be updated on the Open Collective project for [Bug bounties](https://opencollective.com/stride3d/projects/bug-bounties).
* UI slowness bug
    * [Github ticket](https://github.com/stride3d/stride/issues/455)
    * A smaller $50,- USD bounty for more research on this bug. If it can be pinpointed what exactly is causing this, we can also estimate better whether it is worth spending more money on it.
    * Depending on the outcome we might skip this bug and spend time researching/implementing a replacement UI.
    * AggrorJorn will provide the texts for the bounty and once approved by other contributors/developers in the team, this will be updated on the Open Collective project for [Bug bounties](https://opencollective.com/stride3d/projects/bug-bounties)

## Funding for features
* Linux runtime support
    * [Github ticket](https://github.com/stride3d/stride/discussions/1202)
    * Requires mores fleshed out details and deliverables   
    * Once that is done, we can decide on funding
        * Either fixed amount or use xx,xx amount per hour with a certain limit.
    * New Open collective project [Linux runtime](https://opencollective.com/stride3d/projects/linux-runtime-support)
* Decal support
    * [Github discussion](https://github.com/stride3d/stride/issues/24) requires more deliverables
    * New Open collective project [Decals]( https://opencollective.com/stride3d/projects/decals) added and will be updated once deliverables are clear:]
* Morphing target animation support
    * [Github discussion](https://github.com/stride3d/stride/issues/339) requires more deliverables
    * New Open collective project [Morhping Target](https://opencollective.com/stride3d/projects/morph-targets) added and will be updated once deliverables are clear:
* Embed stride into UI frameworks
    * There already is a [work in progress PR](https://github.com/stride3d/stride/pull/1315) that allows developers to specify a custom render context.
    * New Open collective Project for [Embedding Stride into UI frameworks](https://opencollective.com/stride3d/projects/embed-stride-ui-frameworks)
* [Silk.NET](https://github.com/dotnet/Silk.NET)
    * New Open collective project [Silk.NET](https://opencollective.com/stride3d/projects/stride3d-silknet)


## Release 4.1
* [Release notes wip](https://hackmd.io/McqTXGtyQuSu1-QJz34xKw) are prepared by Eideren/Vaso/Yka.
* Final checks by Xen2: VS plugin
    

## Additional task for Xen2
* Documentation needs to auto-release when Release branch is updated
* Ask previous implementer of SPIR-V shader system if he is interested in new work for Stride
    

## Work in progress
* Code only project: will enter beta phase
    * When merged into Stride 4.2 beta, we will add an Open collective page for additional examples.
* C# Pong game example: finishing touches (sound)
* The following C# intermediate tutorials are written but not yet recorded:
    * UI basics
        * Both via the editor as well as entirely through code
    * Scene loading
        * Loading/Unloading
        * Reloading scenes
        * Child scenes
    * Collision triggers
    * Raycasting
    * Animation basics
    * Audio
        * Small tutorial really
    * Navigation meshes and pathfinding
        * Both editor as well as code only approaches
    * Sync vs Async
        * Difference and 2 examples


## Epic grant
* Yka and AggrorJorn have a look at Epic grant and make final proposal in the 3rd week of February
