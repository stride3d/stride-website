---
title: "FOSS Game Engines: An overview of the free and open source engine community"
author: parham
popular: false
image: 
tags: ['Education']
---

Lorem ipsum

---

Table of Contents:

[[TOC]]

The party is over. In the last several years, many commercial software companies have reevaluated their payment models and increased prices. Either they offered their products and services at unsustainably low prices or experienced growing pressure from stakeholders demanding a transition from maximizing growth to maximizing revenue. Now, those dependent on their software must decide between accepting the increased financial burden or switching to alternatives. The video game industry is no exception to this changing tide as major game engine developers explore new ways to monetize their users. While there is never an opportune time to deal with these pricing changes, the rise of free and open-source game engines over the past decade has finally allowed independent game developers to consider free software for their next project.

## What is FOSS, and why should I use a FOSS game engine?

As the name suggests, free and open-source software (FOSS) includes two notable characteristics: it is free (libre), and its source code is readily available. Free (or libre) software can be used for any purpose at the user's sole discretion. In other words, the user has complete control over the software. The open-source aspect of FOSS describes how everyone has access to the code that makes up the software.

With this in mind, using a FOSS game engine provides several advantages. First and foremost, no licensing fees. While contributors always appreciate donations, none of the notable FOSS game engines expect or require any upfront payment, monthly subscriptions, or ongoing royalties. To that end, FOSS engines provide independence from a single organization. If any unsavory changes are made to a FOSS engine's terms of use, its licensing terms allow the community to stick to the version with the most favorable terms and even fork off [maybe link to an explanation of what this means?] it if they so choose.

The community guides the development and growth of their FOSS engine of choice. Many FOSS game engines have active and passionate communities who share their knowledge, advocate for their engine, and help out newcomers. These vibrant and dedicated communities serve as a potent learning resource when working solo or as a small team. Some community members even contribute directly to their engine, ultimately improving the quality of the engine for everyone.

The "open source" in FOSS means game engines can be entirely modified to fit the needs of the team or project. For example, if the engine lacks a specific feature, has a persistent bug, or needs quality-of-life improvements, anyone can freely modify it as necessary. They can even take the additional step of contributing the changes to the project for everyone's benefit. Ultimately, one of the greatest strengths of FOSS game engines lies in their communities and a willingness for everyone to work towards a collective good.

## What FOSS game engines are available today?

Although FOSS game engines have been around for decades, the past several years have seen an explosion in the amount of game engines available, as well as the number of contributors, money, and resources dedicated to them. It would be impossible to cover all the FOSS game engines available now. In fact, if you have a passion for a particular language or framework, more likely than not, someone has some form of game engine written for it.

This post will primarily focus on some of the most significant and notable FOSS game engines currently: Bevy, Godot, Open 3D Engine, and (of course) Stride. To celebrate the wider FOSS game development community, this post will not be a head-to-head comparison of the different engines. Instead, it will serve as an overview of each engine's notable features. No engine is one-size-fits-all and some may be better fits for some tasks out of the box than others. With that out of the way, let’s start.


### Stride 
* Written in C#, Supported Languages: C# and F#
* Platforms:
    * Development: Windows, Linux (Code only)
    * Target: Windows, Linux, Android, iOS
* Features:
    * Need to still list these. Want to consult the community first.

### Bevy
* Written in Rust, Supported Languages: Rust
* Platforms:
    * Development (no Editor): Windows, Mac, Linux
    * Target: Windows, Linux, Mac, iOS, WASM
As the most popular Rust-based game engine, Bevy offers a rich code-only development environment (an editor is planned eventually) capable of running on all major operating systems (Windows, Mac, and Linux). At the heart of Bevy’s vision for game development lies in the Entity Component System (ECS) paradigm. While there are other resources available which can explain the benefits of ECS, in a nutshell, the ECS breaks down the code into three core pillars: entities, components, and systems. Entities are composed of components which can then interact with each other using systems. For example, the player character could be an entity with a health component which tracks the player character’s health bar. That same component could also be used for an enemy character. ECS encourages modularity and reusability by enabling developers to create components applicable to different types of entities. While other game engines can approximate a similar system, Bevy uniquely makes this part of its core design ethos.

As established with Bevy’s use of ECS, the engine’s developers care deeply about making modularity. The engine’s plugin system accentuates their commitment to that principle in every part Bevy. The game’s systems can be organized into discrete plugins. For example, all of the UI systems code could be contained in a UI plugin. From there, the the plugin can be slotted into the game’s initialization. This helps organize the code, while also incentivizing modularity by allowing the developer to simply add or remove the plugin based on their needs. This paradigm even applies to the engine’s core features, as they are all organized into plugins. It becomes trivial to activate or deactivate any part of the engine—including rendering, audio playback, and event loops—as the developer sees fit.

Asset libraries provide a wealth of resources that empower developers to quickly learn the tools and get their game to a playable state. Unique to Bevy, the community assembled a library of assets available on the official website for the community to use and share. The library includes tutorials, plugins, and templates that address subjects like physics, networking, and input management. Bevy’s structure encourages developers to freely use any of the resources from this library as part of the building blocks that will ultimately make up their game.


### Godot
* Written in C++, Supported Languages: GDScript, C#
* Platforms:
    * Development: Windows, Linux, Mac
    * Target: Windows, Linux, Mac, iOS, Android, WASM, HTML5
* Features:
    * Lightweight, multiplatform editor (win, linux, mac)
    * GDExtensions
    * Nodes (+ signals)


### Open 3D Engine
* Written in C++, Supported Languages: Lua
* Platforms
    * Development: Windows, Linux
    * Target: Windows, Linux, Mac, iOS, Android
* Features:
    * Visual scripting (Script Canvas)
    * Atom renderer (DX12, Vulkan, real time raytracing)
    * Gems

# What engine should you pick? And other closing thoughts

Summary will go here. Try the ones that interest you and pick based on your own experiences etc etc.

# Acknowledgements

These people helped fact check, etc etc.