---
layout: post
title: 'The art of game development'
author: 'Youness KAFIA'
popular: true
---


Hi everyone! Welcome to the first post of a series that will help you get started with game development in Stride.
This series is targeted will be helpful to those who have very little experience in game development and graphics programming. For the more experienced, the following posts will be the most helpful.

I have been in this situation where my knowledge of graphics and programming, in general, was very limited and I wish to give some simple explanations to anyone who need a quick overview on how to make games, all while using the Stride game engine. I hope this post will get you started in game development, using Stride, and I'm sure a lot of folks in the discord server will do their best to help you get started!

In this first post, we're going to define video games and understand how games are made on a high level.

## Video

Let's first talk about video making and the best examples are movies.

Movies are usually a sequence of pictures with sound, in older movies, you could have silent ones, some accompanied by a music band, in newer ones you could experience vibrations, smell, etc. The core idea stays a sequence of pictures with sound.

The creation of a movie can be seen as a process :

![image](/images/blog/2021-12-12-the-art-of-game-development/movie-process.png)

1. Concept :
    This is when the directors and artists will lay down the story and the visual appearance of the movie. A lot of the physical assets of the movies will be created around that time. These assets can be either buildings, structures, sculptures, paintings, etc.

2. Shooting :
    That's where the filming crew will create all the necessary video content - with actors, props, some visual effects - that the director will then use to create his movie.

3. Compositing :
    Once all the shooting is done, it needs to be sorted out, selected, and put together to make for a final product: the movie

## Game

Games are made with a set of rules and players and each player can take actions to influence the state of the game all while following the rules.

There are a lot of discussions on how to define games, but since we're not trying to get philosophical let's look at four games, in particular, to help us get an idea of how games are built.

* __Coin toss__ :

    Players call for a side of the coin, toss it, and the player that predicted the visible coin side wins.
    Rules make use of randomness and statistics.

* __The floor is lava__ :
  
    Players can on any surface but the floor, otherwise they lose.
    Rules make use of the environment

* __Tag game__ :

    A player is tagged and has to physically touch another player to give the tag, the tagged person at the end of the game loses.
    Rules make use of the social status of players

* __Tic-tac-toe__ :
  
    This one is a bit complicated to explain so you can look it up :D. The main idea is to align symbols before the other player can do it.
    Rules make use of the status of the board.

Those games are either played in an area, as a sport, with props or on a piece of paper and every one of those games defines the interaction players can have with other players and the environment.
Creating a game revolves around making sure those rules create coherent gameplay.

## Video games

Making video games is very similar to making a movie.
We can see a game as a movie generator where each action of the player can change the video playing in real-time. Since games are programs that react to player inputs AND render images based on the state of the game, it needs to be concealed in a loop.

### Game loop

Let's change our movie step process to better fit what a game does in real-time.

![video game](/images/blog/2021-12-12-the-art-of-game-development/game-process.svg)

The game development part comes right at the design part, this is where the work should be focused.

All the assets you will create will have to be drawn on 2D screens and that's what renderers are for. Since games are going to render multiple different objects that have different formats, it will have to deal with multiple textures at once (similar to how the shooting part in movies involve a lot of re-shooting).

Keeping track of all of this, rendering complex 3D scenes, processing it all under one-tenth of a second is something very complicated to do.
Fortunately for us, there are tools for the jobs.

## Frameworks and Engines

To help you develop games without diving into complex design problems, game frameworks and engines were created to do the tedious low-level programming for you.

Now, how to choose between a framework and an engine?

Easy, if you need to do some easy prototyping, if you want to make games easily, a framework won't be what you're looking for.

There are well-known options using C# out there that you can find :

* Frameworks :
  * Monogame

* Engines :
  * Unity 3D (Only scripting)
  * Unreal Engine (using Unreal CLR)
  * Godot (using Mono)
  * Stride

Engines will provide you with the best development environment for developing games at the cost of being bound to the design established by the developers. Engines are also mostly monolithic software so if you want to use an external tool, the engine has to provide a plugin interface.

Losing modularity might seem important but it really isn't. Game developers are artists,  so as artists, they have to choose between making tools and making art.

## Stride

Well, Stride is a game engine made entirely in C#. Its API is very similar to Unity3D on the high level and Monogame on the low level. Meaning a lot of the knowledge you can acquire from Monogame/Unity tutorials can work in Stride.

Unlike Unreal, Unity3D, and Godot, Stride is very modular. All components of your game (code, rendering, assets, etc.) are replaceable by your own implementation. A Stride game is effectively a C# project, so you can use any C# libraries and Nugets that you love in your games. You also get all the latest .NET improvements relatively fast.

Stride is also free and open-source like Godot, all the source code is accessible, anyone can contribute to it and fix issues, add new features and discuss the direction of the development. Fortunately, Stride also offers a whole lot of features and renderers so you can do a lot of things and the API gives you a lot of power to do even more complicated things.

## But wait... there's more!

Stride's most powerful feature is its shader system, something that we haven't talked about much but we will be going to in the future!

Next, we will be going to make our first game in Stride so stay tuned!

