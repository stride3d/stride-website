---
title: "Open Worlds: An Exploration of Open-Source Game Engines"
author: parham
popular: false
image: /images/blog/2024-03-12-foss-engines-overview/foss-engine-girl.webp
tags: ['Education']
---

With so many open-source game engines out there, where do you even start?

---

<div align="center">
    {% img 'Girl thinking about game development' '/images/blog/2024-03-12-foss-engines-overview/foss-engine-girl-banner.webp' %}
</div>

Table of Contents:

[[TOC]]

The party is over. After years of offering their products and services at unsustainably low prices, the growing pressure from stakeholders to transition from maximizing growth to maximizing revenue has pushed many commercial software companies to reevaluate their business models. This means price increases and new fees wherever they can squeeze them in. Those dependent on their software must now decide between accepting the increased financial burden or switching to alternatives. The video game industry is no exception to this changing tide as major game engine developers explore new ways to monetize their users. It raises a lot of questions for the community. How will we, as developers, manage these rising costs? Just as importantly, given how devastating licensing changes can be for game developers, do we want companies like Epic and Unity to continue having outsized roles in how we make games? While there is never an opportune time to wrestle with these questions, the rise of free and open-source game engines over the past decade gives independent game developers an opportunity to evaluate where free and open-source software can have a role in their next project.

## Before we dive in

I want to make this clear from the start: I will not be doing a head-to-head comparison of open-source game engines. The summaries of each engine discussed will not be exhaustive nor specifically highlight exclusive features. This is a celebration of the hard work of the open-source game development community. I want to use this as a platform to get you excited about open-source game development and consider options beyond proprietary engines like Unity, Unreal, or GameMaker.

If I tried to cover every feature of every modern open-source engine, this wouldn't be an single article, but an entire book series. For that reason, I identified notable features and characteristics of some handpicked open-source engines I thought would be worth sharing. While reading this, keep in mind that no engine is one-size-fits-all, and, as I’ll explain later, picking an engine is about choosing the right tool for _you_. With that out of the way, let’s start!

## What is FOSS, and why should I use a FOSS game engine?

As the name suggests, free and open-source software (FOSS) includes two notable characteristics: it is free (libre), and its source code is available. You can use free (or libre) software for any purpose at your sole discretion. Most commonly, you will hear something like: “free as in speech, not free as in beer.” It may be available at no cost, but even more importantly, the user has complete control over the software. The open-source aspect of FOSS describes how everyone has access to the code that makes up the software.

Using a FOSS game engine provides several advantages. First, no licensing fees. While contributors always appreciate donations, none of the notable FOSS game engines expect or require upfront payment, subscriptions, or ongoing royalties. FOSS engines also provide independence from a single organization. If changes to a FOSS engine’s terms upset the community, the engine’s licensing terms allow developers to stick to the version with the most favorable terms and even [fork off the project](https://en.wikipedia.org/wiki/Fork_(software_development)) if they choose.

The community guides the development and growth of their FOSS engine of choice. Many FOSS game engines have active and passionate communities who share their knowledge, advocate for their engine, and help newcomers. These vibrant and dedicated communities serve as a potent learning resource when working solo or as a small team. Some community members even contribute to their engine, improving the quality of the engine for everyone.

Open source allows teams or projects to change game engines to fit their needs. For example, if the engine lacks a specific feature, has a persistent bug, or needs quality-of-life improvements, anyone can update it as necessary. They can even take the additional step of contributing the changes to the project for everyone’s benefit. One of the greatest strengths of FOSS game engines lies in their communities and a willingness for everyone to work towards a collective good.

## What FOSS game engines are available today?
Although FOSS game engines have existed for decades, the past several years have seen an explosion in the number of game engines available, as well as the number of contributors, money, and resources dedicated to them. It would be impossible to cover all the FOSS game engines available now. In fact, if you have a passion for a particular language or framework, more likely than not, someone built a game engine with it.

This post will focus on some of the more notable modern FOSS game engines: Bevy, Godot, Open 3D Engine, and (of course) Stride. However, this is not an exhaustive list. As I mentioned before, [there are more engines out there than I could ever cover in a single blog post](https://enginesdatabase.com/?software_license=1). Many skilled and dedicated folks have put serious time and effort into making game engines and shared them with the world. I want to encourage you to use this post as a starting point and look at what each community offers.
 
<br>
<br>

<div align="center">
{% img 'Bevy' '/images/blog/2024-03-12-foss-engines-overview/bevy-logo.webp' %}
</div>

### Bevy
* Written in Rust, Supported Languages: Rust
* Platforms:
    * Development (Code Only): Windows, Mac, Linux
    * Build Targets: Windows, Mac, Linux, iOS, Android, Web

As the most popular Rust-based game engine, Bevy offers a rich code-only development environment (an editor is coming in the future) capable of running on all major operating systems (Windows, Mac, and Linux). At the heart of Bevy’s vision for game development lies the [Entity Component System (ECS)](https://bevyengine.org/learn/quick-start/getting-started/ecs/) paradigm. While there are other resources available that can explain the benefits of ECS better, in a nutshell, ECS breaks down the code into three core pillars: entities, components, and systems. Entities are composed of components that can interact with each other using systems. For example, the player character could be an entity with a health component that tracks the player character’s health bar. An enemy character could also use that component for the same purpose. ECS encourages modularity and reusability by enabling developers to create components applicable to distinct entities. While other game engines can approximate a similar system, Bevy makes this part of its core design ethos.

As established with Bevy’s use of ECS, the engine’s developers care deeply about modularity. [The engine’s plugin system](https://bevyengine.org/learn/quick-start/getting-started/plugins/) accentuates their commitment to that principle in every part of Bevy. Developers can organize the game’s systems into discrete plugins. An example of this is organizing all the UI systems code into a UI plugin. From there, developers can slot the plugin into the game’s initialization step. The plugin system helps organize the code and encourages modularity by allowing developers to add or remove the plugin based on their needs. This paradigm even applies to the engine’s core features, as they are all organized into plugins. It becomes trivial to activate or deactivate any part of the engine—including rendering, audio playback, and event loops—as the developer sees fit.

Asset libraries provide a wealth of resources that empower developers to learn the tools quickly and get their game to a playable state. [The community assembled a library of assets available on the official website for the community to use and share](https://bevyengine.org/assets/). Bevy’s library includes tutorials, plugins, and templates that address subjects like physics, networking, and input management. Even entire games and applications are available in the asset library to either build on or use as a reference while learning the engine. Bevy’s structure encourages developers to use any of the resources from this library freely as part of the building blocks that will make up their game. In conjunction with Rust’s package manager, there is a strong emphasis on modularity at every level of the engine.

<br>
<br>

<div align="center">
{% img 'Godot' '/images/blog/2024-03-12-foss-engines-overview/godot-logo.webp' %}
</div>

### Godot
* Written in C++, Supported Languages: GDScript, C#
* Platforms:
    * Development: Windows, Mac, Linux, Android (Experimental), Web
    * Target: Windows, Mac, Linux, iOS, Android, Web

Godot has the largest and most active community among all the modern FOSS game engines available to date. As the drama around Unity has unfolded, you have likely heard mentions of Godot on more than a few occasions. It is not without merit, as Godot encourages developers to shape the engine around their needs. Coming in at only 40 MB, the engine includes a lightweight, multi-platform editor capable of running on any major operating system (Windows, Mac, and Linux). In fact, [you can even use a web-based](https://editor.godotengine.org/releases/latest/) or [Android version](https://godotengine.org/download/android/) of the editor, albeit with some constraints. Godot can meet developers on whatever platform works best for them.

GDScript is Godot’s primary programming language. While the prospect of learning an engine-specific language may turn you off at first, don’t fret! It shares a lot of commonalities with Python and Godot provides detailed documentation on how to use the language. Assuming you already have some experience with object-oriented programming, it won’t take long to get going with GDScript. You can even use C# for scripting if that is more up your alley, as it’s the other language officially supported by Godot. That said, if you would still like to write some code in another language entirely, Godot provides the means to use alternative programming languages by way of GDExtension.

Theoretically, GDExtension supports any programming language that can interact with its C-based API. While Godot officially supports scripting in GDScript and C#, GDExtension allows the community to introduce new language bindings to Godot’s development ecosystem, including [Rust](https://godot-rust.github.io/), [Go](https://github.com/grow-graphics/gd), [Swift](https://github.com/migueldeicaza/SwiftGodot), and [Haxe](https://hxgodot.github.io/). Not all language bindings are feature-complete, but many are in active development. With that in mind, committing to one language for an entire project is unnecessary, as GDExtension languages can work alongside GDScript. This means developers can, for example, even use GDScript with other languages in the same project.

Work in an editor long enough and you will probably want to tinker with it. For those interested in creating utilities and tools, as is common practice in Unity or Unreal Engine, [Godot provides the option to customize the editor to your liking](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/making_plugins.html). You don’t need to write in C++ and re-compile Godot to create plugins. Because the editor runs on Godot itself, it is possible to tinker with or extend the editor with GDScript, Godot’s scripting language, by simply appending @tool to the top of the file. Writing a plugin becomes as easy as writing code for your game.

<br>
<br>
{% img 'Open 3D Engine' '/images/blog/2024-03-12-foss-engines-overview/o3de-logo.webp' %}
</div>

### Open 3D Engine
* Written in C++, Supported Languages: C++, Lua
* Platforms:
    * Development: Windows, Linux
    * Target: Windows, Mac, Linux, iOS, Android

Open 3D Engine’s origins trace back to Amazon’s foray into game development. Amazon licensed Crytek’s CryEngine 3 and then used it as the foundation for their own game engine: Amazon Lumberyard. In the following years, Amazon offered Lumberyard for free to the community with specific terms requiring online features to use Amazon Web Services. By 2021, Amazon overhauled Lumberyard, rewrote 95% of the code, rebranded it as Open 3D Engine (O3DE), and placed it under the supervision of the Linux Foundation. Now, O3DE is available as a free and open-source engine under dual Apache and MIT Licenses for everyone, with no strings attached.

Only a few game engines offer visual scripting out of the box, and O3DE is one of them. O3DE supports both C++ and Lua for scripting, but for folks less inclined to write code, there is also [Script Canvas](https://docs.o3de.org/docs/user-guide/scripting/script-canvas/), OD3E’s visual scripting environment. Visual scripting provides a way to write game logic without needing to write code in C++ or Lua. It presents programming concepts like functions, variables, and events as nodes that can be strung together in a graph. Script Canvas also allows developers to write custom nodes either in C++ or within Script Canvas itself to better fit their workflow. Fortunately, anything written using O3DE’s visual scripting system will not incur any serious performance hits, as the engine ultimately converts the graphs into Lua scripts.

O3DE modularizes its engine by breaking down major components into plugins called [Gems](https://www.docs.o3de.org/docs/user-guide/gems/). This is the paradigm through which O3DE manages all its features and plugins. It is possible to swap out features like the physics engine, for example, allowing developers to choose between PhysX 4, PhysX 5, or another solution entirely, custom or commercial. The modularity afforded to O3DE through Gems allows developers to add and remove components of the engine with relative ease–using as many or as few of the features they want and in whatever combination best fits their needs.

With [the Atom Renderer](https://www.docs.o3de.org/docs/atom-guide/), the engine’s rendering system, O3DE strives to provide an advanced renderer that is also exceptionally customizable. The Render Pipeline Interface (RPI) and Rendering Hardware Interface (RHI) constitute the primary channels for working with the Atom renderer. The RPI provides the tools necessary for customizing the rendering pipeline and implementing higher-level graphical features, such as split screen or additional rendering passes. Meanwhile, the RHI abstracts access to the GPU’s functionality, allowing developers to write lower-level graphics logic without needing to target specific graphics APIs like DirectX or Vulkan. In short, the rendering stack provides incredible flexibility to developers.
 
<br>
<br>

<div align="center">
    {% img 'Stride' '/images/blog/2024-03-12-foss-engines-overview/stride-logo.webp' %}
</div>

### Stride
* Written in C#, Supported Languages: C#, F#, Visual Basic
* Platforms:
    * Development: Windows
    * Target: Windows, Linux, iOS, Android

Stride began life as Xenko (and before that, Paradox): Silicon Studio’s premium game engine. After several years of providing Stride to the public through a subscription-based model, Silicon Studio released the engine’s source code and editor freely to the community under the MIT license. Among the higher profile FOSS game engines available, it is unique because Silicon Studio completely wrote it in C# from top to bottom. There is no delineation between the language used for the core engine and the language you would write with day-to-day while working on the game. It becomes much easier to override or change any inherent engine behavior when coding in the same language. No need to develop an interop system to interface with the engine’s core logic. With that said, [the code-only version of Stride](https://stride3d.github.io/stride-community-toolkit/manual/code-only/index.html) supports any language that is part of the .NET family (C#, F#, and Visual Basic), providing some flexibility in language choice.

The engine offers a pure .NET experience that includes many of the advantages inherent to the framework, like hot reloading. At the time of writing, Stride runs on .NET 8 (the latest version of the framework) and supports C# 12. Because the engine closely follows the .NET update schedule, you often get the most modern and up-to-date implementation of C#. You can seamlessly incorporate almost any C#-based library or tool available through NuGet, GitHub, or other platforms into Stride, enhancing your workflow. Stride is modular enough that [sections of Stride are available as standalone NuGet packages](https://www.nuget.org/profiles/Stride). The engine provides the ability to tailor-make your game development experience.

The engine does its best to ensure it does not become a technical bottleneck for your game. A lot of processing within Stride is multithreaded. This means it allows logic to run on multiple threads of execution concurrently. The engine even implements a custom thread pool to maximize engine performance. As a result, Stride takes full advantage of the hardware it is running on, providing players with faster and smoother experiences. All the tools Stride uses to support multi-threading under the hood are also accessible to developers. Nothing is out of reach. An entire library exists within the engine focused on multi-threading that anyone can leverage in their projects. Used with features like the [upcoming Bepu physics integration](https://github.com/Nicogo1705/Stride.BepuPhysics), it becomes possible to have tens of thousands of objects concurrently in a scene with little effort. Stride provides the space to explore multi-threading and have fun with it.

## What engine should you pick? And other closing thoughts

There is no one right answer. Don’t trust anyone claiming otherwise. Here is the truth: the answer lies in whichever you enjoy using the most. Game development is a process. It requires a healthy level of commitment and discipline. Anyone can do it, but you need to put in the effort. The better your tools fit with your way of working and thinking, the more likely you’ll commit to your project and put in your full effort.

All these engines are free and include active communities ready to help new folks. Pick whichever engines strike your fancy and try them. Maybe one of them has that one specific feature that hits just right. Maybe another has a community you just love hanging out with or the engine integrates well with a tool you’re using already. Whatever the case, it’s a matter of taste and what works best for you.

Wanting to know if an engine can make a specific type of game is asking the wrong question. [People make games in Excel](https://www.youtube.com/watch?v=kK0M74E8PS4). You can make just about any game in any engine. It’s not always a trivial task, but you can do it. Instead, ask yourself which tools you enjoy using the most. 

When you settle on an engine, remember this: your engine is not your identity. Your tools are a means to creating something, not a core pillar of your very being. I cannot stress this enough. Your tools do not define you. This may sound obvious, but I have seen many, many folks make their engine of choice a centerpiece of who they are and become unnecessarily hostile towards communities of other engines. Please don't do that.

You are not simply a Bevy developer, Godot developer, O3DE developer, Stride developer, or whatever else. You are a game developer. So don’t get hung up on which engine you should pick. Choose the engine that resonates with you the most and you’ll quickly learn skills that apply anywhere. Make creating something rewarding in and of itself. If you enjoy working in your environment, you will enjoy the act of development. Once you manage that, creating anything, game or otherwise, will feel immensely satisfying in its own right.

Be curious and have fun.

## Acknowledgments

This article was only possible with the input of contributors and users involved in these communities. I appreciate all the folks who were kind and patient enough to fact-check me and provide their feedback, including [Vaclav Elias](https://github.com/VaclavElias), [Joreyk](https://github.com/IXLLEGACYIXL), [Doprez](https://github.com/Doprez/), [Judah Perez](https://www.inconsistent.software/), [Clay John](https://github.com/clayjohn), [Adam Scott](https://github.com/adamscott), [Fredia Huya-Kouadio](https://github.com/m4gr3d), [Pāvels Nadtočajevs](https://github.com/bruvzg), as well as [the Open 3D Foundation and Open 3D Engine contributors](https://o3d.foundation/).

Last but not least, thank you to [Ed (Meltted)](https://twitter.com/meltt_ed) for creating the feature and thumbnail image.