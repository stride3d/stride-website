---
title: 'Toward a Better .NET!'
author: silicon-studio
image_thumb: /images/blog/microsoft_.net.png
---

We’d like to announce some of our plans for the coming months, and also notify our users of some big changes that will be coming with release 1.9. Namely, we’ll be dropping support for Windows Store 8.1 and Windows Phone 8.1.

---

## Switch to .NET Standard

Starting with Xenko 1.9, shared Game assemblies will be created using [.NET Standard](https://docs.microsoft.com/en-us/dotnet/articles/standard/library) rather than PCL.

It offers [many advantages](https://blogs.msdn.microsoft.com/dotnet/2016/09/26/introducing-net-standard/): much better API surface for the developer, improved forward and backward compatibility, reduced fragmentation, finer-grained modularity of the framework, easier to write cross-platform apps, more frequent updates, etc.

Newly created applications will target .NET Standard 1.4, but users are of course free to target a different version. Also, your existing PCL projects will still work as is, but we recommend you to update your projects to .NET Standard!

## What’s next?

Microsoft also [announced many improvements to come in Visual Studio 15](https://blogs.msdn.microsoft.com/dotnet/2016/10/19/net-core-tooling-in-visual-studio-15/). Once it is released, we will also follow the trend by moving project.json information to .csproj.

We will probably change any newly created project to target .NET Standard 2.0, and the Xenko runtime itself will probably switch to the .NET Standard for easier portability.

Additionally, we plan to support C# 7.0 as soon as possible, and plan to offer CoreCLR/CoreRT runtime on more platforms as those two runtimes mature.

C# 7.0 and future versions focus not only on language usability but also on tackling some performances issues ([ref locals](https://github.com/dotnet/roslyn/issues/118), [stack allocation](https://github.com/dotnet/coreclr/commit/37798423fb035625192b4fac90a329e17b90d562), etc.), and since we’re making a game engine, we couldn’t be more happy!

Overall we are very excited with how dynamic the new .NET ecosystem is becoming, and we plan to consistently provide you with the latest .NET changes so that you can enjoy coding faster and better!

.NET future looks very bright, so kudos to Microsoft!

## Bye Windows Store 8.1 and Windows Phone 8.1, long live Universal Windows Platform (UWP)!

To properly support the .NET Standard 1.4 and offer our developers a more up-to-date and robust API, we decided to drop support for Windows Store 8.1 and Windows Phone 8.1 platforms.

As Microsoft seems to be focusing on Universal Windows Platform (UWP), we’ve also decided it was best to refocus on more pertinent and relevant platforms for Xenko users. UWP was introduced with Windows 10, and a whole range of devices already support it.

Of course, you are free to stick with Xenko 1.8 in case you have a project targeting one of those two platforms -- we know this is a big change, and we will make every effort to help our developers with this transition. We apologize for the inconvenience, and aim to bring you a top-notch .NET user experience!

Just as a reminder, we already support Universal Windows Platform (UWP) on x86, x64 and ARM as of Xenko 1.8, which means games and apps developed with Xenko can be deployed on a whole range of Microsoft devices, including [Xbox One](https://msdn.microsoft.com/en-us/windows/uwp/xbox-apps/index). Until 1.9, this platform was named Windows10 in Xenko, but we took the liberty to rename it UWP to better match the official naming.
