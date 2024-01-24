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

The party is over. In the last several years, many commercial software companies have reevaluated their payment models and increased prices. Either they offered their products and services at unsustainably low prices or experienced growing pressure from stakeholders demanding a transition from maximizing growth to maximizing revenue. Now, those dependent on their software must decide between accepting the increased financial burden or switching to alternatives. The video game industry is no exception to this changing tide as major game engine developers explore new ways to monetize their users. While there is never an opportune time to deal with these pricing changes, the rise of free and open-source game engines over the past decade has allowed independent game developers to consider free software for their next project.

## What is FOSS, and why should I use a FOSS game engine?

As the name suggests, free and open-source software (FOSS) includes two notable characteristics: it is free (libre), and its source code is readily available. You can use free (or libre) software for any purpose at your sole discretion. Most commonly you will hear folks refer to this as something to the effect of: "free as in speech, not free as in beer". The user has complete control over the software. The open-source aspect of FOSS describes how everyone has access to the code that makes up the software.

Using a FOSS game engine provides several advantages. Foremost, no licensing fees. While contributors always appreciate donations, none of the notable FOSS game engines expect or require any upfront payment, monthly subscriptions, or ongoing royalties. FOSS engines provide independence from a single organization. If changes to a FOSS engine's terms upset the community, the engine's licensing terms allow developers to stick to the version with the most favorable terms and even fork off [maybe link to an explanation of what this means?] if they choose.

The community guides the development and growth of their FOSS engine of choice. Many FOSS game engines have active and passionate communities who share their knowledge, advocate for their engine, and help newcomers. These vibrant and dedicated communities serve as a potent learning resource when working solo or as a small team. Some community members even contribute directly to their engine, ultimately improving the quality of the engine for everyone.

Open source allows teams or projects to change game engines to fit their needs. For example, if the engine lacks a specific feature, has a persistent bug, or needs quality-of-life improvements, anyone can freely update it as necessary. They can even take the additional step of contributing the changes to the project for everyone's benefit. Ultimately, one of the greatest strengths of FOSS game engines lies in their communities and a willingness for everyone to work towards a collective good.

## What FOSS game engines are available today?

Although FOSS game engines have been around for decades, the past several years have seen an explosion in the number of game engines available, as well as the number of contributors, money, and resources dedicated to them. It would be impossible to cover all the FOSS game engines available now. In fact, if you have a passion for a particular language or framework, more likely than not, someone has a game engine written for it.

This post will primarily focus on some of the most notable FOSS game engines currently: Bevy, Godot, Open 3D Engine, and (of course) Stride. This post will not be a head-to-head comparison of the different engines. The summaries here are not exhaustive nor meant to highlight features exclusive to each engine. Rather, I really want this to be a celebration of the FOSS game development community and, instead, spotlight each engine's notable features. No engine is one-size-fits-all and some may be better fit for certain tasks than others. With that out of the way, let's start.

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
As the most popular Rust-based game engine, Bevy offers a rich code-only development environment (an editor is coming eventually) capable of running on all major operating systems (Windows, Mac, and Linux). At the heart of Bevy's vision for game development lies the Entity Component System (ECS) paradigm. While there are other resources available which can explain the benefits of ECS, in a nutshell, the ECS breaks down the code into three core pillars: entities, components, and systems. Entities are composed of components which can then interact with each other using systems. For example, the player character could be an entity with a health component which tracks the player character's health bar. An enemy character could also use that component for the same purpose. ECS encourages modularity and reusability by enabling developers to create components applicable to distinct entities. While other game engines can approximate a similar system, Bevy uniquely makes this part of its core design ethos.

As established with Bevy's use of ECS, the engine's developers care deeply about making modularity. The engine's plugin system accentuates their commitment to that principle in every part of Bevy. Developers can organize the game's systems into discrete plugins. An example of this is organizing all the UI systems code into a UI plugin. From there, developers can slot the plugin into the game's initialization step. This helps organize the code, while also encouraging modularity by allowing the developer to add or remove the plugin based on their needs. This paradigm even applies to the engine's core features, as they are all organized into plugins. It becomes trivial to activate or deactivate any part of the engine—including rendering, audio playback, and event loops—as the developer sees fit.

Asset libraries provide a wealth of resources that empower developers to learn the tools quickly and get their game to a playable state. Unique to Bevy, the community assembled a library of assets available on the official website for the community to use and share. The library includes tutorials, plugins, and templates that address subjects like physics, networking, and input management. Bevy's structure encourages developers to use any of the resources from this library freely as part of the building blocks that will ultimately make up their game.

### Godot
* Written in C++, Supported Languages: GDScript, C#
* Platforms:
    * Development: Windows, Linux, Mac
    * Target: Windows, Linux, Mac, iOS, Android, WASM, HTML5
* Features:
    * Lightweight, multiplatform editor (win, linux, mac)
    * GDExtensions
    * Nodes (+ signals)

As the most popular modern FOSS game engine to date, Godot encourages developers to shape the engine around their needs. The engine comes with a lightweight, multi-platform editor capable of running on any major operating system (Windows, Mac, and Linux). In fact, it can even run in a web browser. Godot can meet developers on whatever platform works best for them. For those who are interested in creating utilities and tools like as is common practice in Unity or Unreal Engine, Godot provides the option to customize the editor to your liking. Because the editor runs on Godot itself, it is possible to tinker with or extend the editor with GDScript, Godot's scripting language, by simply appending @tool to the top of the file. The engine encourages using its features to shape the developer experience.

GDScript is Godot's primary programming language. While the prospect of learning a proprietary language may turn you off at first, don't fret! It shares a lot of commonalities with Python and Godot provides detailed documentation on how to use the language. Assuming you already have some experience with object-oriented programming, it won't take long to get going with GDScript. That said, if you would still like to write some code in another language, Godot provides the means to use alternative programming languages by the way of GDExtension. GDExtension theoretically supports any programming language that can interact with its C-based API. The system allows the community to introduce new language bindings to Godot's development ecosystem, including Rust, Python, Lua, and Java. Not all language bindings are feature complete, but many are in active development. With that in mind, it's not necessary to commit to one language for an entire project either, as GDExtension languages can work alongside GDScript. This means developers can, for example, even use GDScript with other languages in the same project.

### Open 3D Engine
* Written in C++, Supported Languages: Lua
* Platforms
    * Development: Windows, Linux
    * Target: Windows, Linux, Mac, iOS, Android

Open 3D Engine's origins trace back to Amazon's foray into game development. Amazon licensed Crytek's CryEngine 3 and then used it as the foundation for their own game engine: Amazon Lumberyard. In the years that followed, Amazon offered Lumberyard for free to the community with specific terms requiring online features to use Amazon Web Services. By 2021, Amazon overhauled Lumberyard, rebranded it as Open 3D Engine (O3DE), and placed it under the supervision of the Linux Foundation. Now, O3DE is available as a free and open-source engine under the Apache License for everyone, no strings attached.

Only a few game engines offer visual scripting out of the box, and O3DE is one of them. For folks less inclined to write code, Script Canvas, OD3E's visual scripting environment, can be an incredibly powerful and approachable tool for getting your game up and running. Visual scripting provides a way to write game logic without needing to write code in C++ or Lua. It presents programming concepts like functions, variables, and events as nodes that can be strung together in a graph. Script Canvas also allows developers to write custom nodes either in C++ or within Script Canvas itself to better fit their workflow. Fortunately, anything written using O3DE's visual scripting system will not incur any serious performance hits, as the engine ultimately converts the graphs into Lua scripts.

The transition from Lumberyard to O3DE included a significant rewrite of the engine's rendering system. Now dubbed the Atom Renderer, it boasts a robust set of features, including ray tracing and a multi-render pipeline, as well as support for several high-profile graphical backends (DirectX, Vulkan, and Metal). The Render Pipeline Interface (RPI) and Rendering Hardware Interface (RHI) constitute the primary channels for working with the Atom renderer. The RPI provides the tools necessary for customizing the rendering pipeline and implementing higher-level graphical features, such as split screen or additional rendering passes. Meanwhile, the RHI abstracts access to the GPU's functionality, allowing developers to write lower-level graphics logic without needing to target specific graphics APIs like DirectX or Vulkan. With Atom, O3DE strives to provide an advanced renderer that is also exceptionally customizable.

O3DE modularizes its engine by breaking down major components into plugins called Gems. Broadly, Gems fall into one of two categories: Code Gems and Asset Gems. Code Gems are packed with code and assets, while Asset Gems only contain content like 3D models, animations, and textures. O3DE manages all its major features and plugins through this paradigm. In fact, O3DE provides a library of gems for the community to use, including gems for robotics simulation, navigation, and AWS support. The modularity afforded to O3DE through Gems allows developers to add and remove components of the engine with relative ease–using as many or as few of the features they want and in whatever combination best fits their needs.

# What engine should you pick? And other closing thoughts

There is no one right answer. Be suspicious of anyone who claims otherwise. Here is the truth: the answer lies in whichever one you enjoy using the most. Game development is a process. It requires commitment and discipline. Anyone can do it, but you need to put in the effort. The better your tools fit with your way of working and thinking, the more likely you'll be to commit to your project and put in your full effort.

All these engines are available for free and include active communities ready to help new folks. Pick whichever engines strike your fancy and try them. Maybe one of them has that one specific feature that hits just right. Maybe another has a community you just love hanging out with or integrates well with a tool you're using already. Whatever the case, it's a matter of taste and what works best for you.

Wanting to know if an engine can make a specific type of game is asking the wrong question. People make games in Excel. You can make just about any game in any engine. It's not always a trivial task, but you can do it. Instead, ask yourself which tools you enjoy using the most. Make creating something rewarding in and of itself. If you enjoy working in your environment, you will enjoy the act of development. If you can manage that, creating anything, game or otherwise, will feel immensely satisfying in its own right.

# Acknowledgements

These people helped fact check, etc etc.