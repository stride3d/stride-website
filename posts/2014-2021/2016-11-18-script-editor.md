---
title: 'Script Editor Preview'
author: silicon-studio
image_thumb: /images/blog/script_editor/thumb.jpg
---

Switching back and forth between your game development editor and your IDE for small changes starting to wear on you? Well, you can look forward to losing many of those unnecessary steps because Xenko is bringing you our new Script Editor feature - available soon in **Xenko 1.9 Beta**. Open the blog post for the full details!

---

Feeling the pain of switching back and forth between the **Game Studio** and your **IDE**? We hear ya! We know how annoying it can be, so that’s why we think we’ll save you some time and frustration with Xenko’s Script Editor! 


With our new **Script Editor**, relying fully on Visual Studio is no longer necessary, because now you can edit your code directly within the Game Studio itself! You’ll get full **syntax highlighting**, **auto-completion**, **live diagnostics** and even the ability to **auto-reload C# files and projects** that changed on your hard drive due to changes in your external editor (e.g., Visual Studio).


In fact, expect:

* Highlight, auto-completion and live diagnostics is available in the Xenko API, your own game code and libraries that you use
* Auto-reload C# scripts and C# project changes that happened in the background
* A Visual Studio like experience for all your code editing!

{% video '/images/blog/script_editor/code_completion.mp4' %}

We had some help from Microsoft’s .NET compiler, [Rosyln](https://github.com/dotnet/roslyn), so Xenko users will also receive the full benefit of all the latest features of .NET. Adding a Rosyln-based Script Editor makes it easier to keep up with the latest C# updates.

Okay, so let’s get back to the important stuff, like how to use the Xenko Script Editor, which is fairly straightforward. 

Just follow these steps:

1. Create a new project/game in Game Studio
2. Add a script in Game Studio
3. Edit the script in Game Studio
4. (Optional) Click “Reload assembly” when you’re ready

{% video '/images/blog/script_editor/create_script_gamestudio.mp4' %}

C# scripts saved on Visual Studio side (or any text editor, for that matter) will automatically be updated in Game Studio without reloading. Same goes for project changes (.csproj): new scripts will appear automatically upon saving. GameStudio will automatically listen for file changes on the hard drive and update them live, or ask you what to do in case of conflicts.

{% video '/images/blog/script_editor/external_changes.mp4' %}

Under the hood, [Rosyln](https://github.com/dotnet/roslyn) is the underlying technology that can process your Xenko source code. But we didn’t stop there! We were fortunate to find [AvalonEdit](http://avalonedit.net/), which provided us what we wanted for the visual appearance of the UI aspect of the Xenko script editor. We also integrated [RoslynPad](https://roslynpad.net/), which connects Roslyn and AvalonEdit together. We were lucky to be able to take advantage of these great Roslyn related efforts, and appreciate all the hard work the developers and contributors have put into RoslynPad and AvalonEdit, further strengthening the .NET ecosystem.


Overall, we were extremely pleased with these libraries; thus the C# Script Editor was much easier than expected to build. And, since Roslyn is now integrated into our code codebase, it will allow us to do more cool stuff in the future, such as:

* Code upgrades (i.e. if we rename members or refactor some classes, we could automatically update the code of your older projects)
* Better code analysis

With Roslyn now integrated into our codebase, soon we’ll be able to share with you a pretty awesome surprise we have coming, so stay tuned for more info in the next few months!
