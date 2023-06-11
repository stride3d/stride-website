---
layout: page
title: Examples
description: Example Stride Website styling
---

This page contains examples of how to use the Stride Website styling, shortcodes and includes.

[[TOC]]

## Includes

### Sponsor

We can include sponsor logos and links to their websites.

```liquid
{% raw %}{% include sponsor-org.md key:'ore' emoji:'💎' %}
{% include sponsor-org.md key:'vvvv' emoji:'🥇' %}
{% include sponsor-user.md key:'vaclav' emoji:'🥇' %}{% endraw %}
```

The sponsors are defined in `_data/sponsors.json` file.

#### Sponsor Examples
{% include sponsor-org.md key:'ore' emoji:'💎' %}
{% include sponsor-org.md key:'vvvv' emoji:'🥇' %}
{% include sponsor-user.md key:'vaclav' emoji:'🥇' %}


### Alert

This option allows to choose type and any font-awesome icon.

Only part of the icon name is required, for example from this `<i class="fa-solid fa-face-smile"></i>` we need just `fa-face-smile` part.

```liquid
{% raw %}{% include _alert.html
   type:'success|danger|warning|info|dark|light|primary|secondary'
   icon:'fa-whatever-font-awesome-icon'
   title:'Some text' %}
{% endraw %}
```

This option automatically chooses the icon based on the type.

```liquid
{% raw %}{% include _alert.html
   type:'success|danger|warning|info|dark|light|primary|secondary'
   title:'Some text' %}
{% endraw %}
```

This option allows to choose type without any icon.

```liquid
{% raw %}{% include _alert.html
   type:'success|danger|warning|info|dark|light|primary|secondary'
   icon:''
   title:'Some text' %}
{% endraw %}
```

#### Alert Examples

{% include _alert.html type:'success' icon:'' title:'No icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'success' icon:'fa-face-smile' title:'Custom icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'success' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'warning' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'danger' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'info' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'secondary' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'dark' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'light' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

{% include _alert.html type:'primary' title:'Default icon: Stride contributors are proud to announce a new release now running on .NET 6 supporting the latest C# 10.' %}

## C# Code Highlighting

```csharp
using var game = new Game();

game.Run(start: (Scene rootScene) =>
{
    game.SetupBase3DScene();

    var entity = new Entity(new Vector3(1f, 0.5f, 3f));

    entity.Add(new ModelComponent(new CubeProceduralModel().Generate(game.Services)));

    entity.Scene = rootScene;
});
```

### Example

```csharp
using Stride.Core.Mathematics;
using Stride.Engine;

namespace CSharpBeginner.Code
{
    /// <summary>
    /// This script demonstrates how to access the entity where the script is attached to. 
    /// We also learn how to access a parent of our entity and how to check if that entity exists.
    /// </summary>
    public class GettingTheEntityDemo : SyncScript
    {
        private string name = string.Empty;
        private string parentName = string.Empty;

        // Executes only once, at the start of the game
        public override void Start()
        {
            // We store the name of the Entity that we are attached to
            name = Entity.Name;

            // We retrieve the parent entity by using the GetParent() command.
            var parentEntity = Entity.GetParent();

            // It is possible that our entity does not have a parent. We therefore check if the parent is not null.
            if (parentEntity != null)
            {
                // We store the name of our Parent entity
                parentName = parentEntity.Name;
            }

            // The above code can be shortened to 1 line by using the '?' operator  
            parentName = Entity.GetParent()?.Name ?? string.Empty;
        }

        // Updates every frame
        public override void Update()
        {
            // Using the 'DebugText.Print' command, we can quickly print information to the screen
            // NOTE: DebugText only works when debugging the game. During release it is automatically disabled
            DebugText.Print(parentName, new Int2(580, 580));
            DebugText.Print(name, new Int2(800, 580));
        }
    }
}
```

### Async Script

```csharp
public class MyAsyncScript : AsyncScript
{        
    public override async Task Execute() 
    {
        while (Game.IsRunning)
        {
            await MyEvent;

            // Add your game-specific logic here

            await Script.NextFrame();
        }
    }
}
```

```csharp
public static class MyStrideGame
{
    public static void Main(string[] args)
    {
        using var game = new Game();

        // register service
        game.Services.AddService(new ScreensService());

        game.Run();
    }
}

```