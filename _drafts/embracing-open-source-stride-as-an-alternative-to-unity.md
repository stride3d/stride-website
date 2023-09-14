# Embracing Open Source: Stride as an Alternative to Unity's Install Fee

## Difference

Unity is made by a big team and is feature rich.
Stride is open source and made by contributors.

Which means, Stride cannot have the same features as unity, because there is not 1k people make sure everything work. But Stride, as open source, can be edited to your need and provide a solid base to any rendering project.

Also, using Stride, you can use any nugget package and access the Main function of your game.
and also all the useful link like doc, community tool kit, unity to Stide guide [!!], ... ?

## License
MIT (important to explain for me)

## What game were made using Stride?
Give stride awesome URL with anchor to section 

## Hardware support
Editor (Windows) / Runtime (Win, Linux, Mac, Android, iOS)

## IDE
Any : VScode, Visual Studio, Rider, Blocknote + MsBuild. Since a Stride game is a "standard" C# project.

Note : There is a Visual Studio Code extension that syntax highlight and build key for shaders.
note2 : There is a Visual Studio Code extension with syntax highlight only

## Multiplayer
Not built in. You can use any .NET  library (see github link with all networking lib and resources)

## Unity asset (from store) 
Some model can be used in Stride, Script will need modification since it's not the same engine, ....

Can we record a video/frame ?
more or less
```
var commandList = GraphicsContext.CommandList;
commandList.RenderTarget.Save(commandList, stream, ImageFileType.Png);
```
(maybe add a fonction to make a gif in stride commmunity toolkit)

-Shaders ?
YEAH ! with the best shader laguage of the world : SDSL ! (source tebjan)
https://github.com/tebjan/Stride.ShaderExplorer

-Can we automate build ? 
yeah, it's just .net code, so it work out of the box. (in theory)


-Add-ons for this engine/for my game ?
Yes : it's open source, it may need some more work to implement it.


-Are positions vector3 and rotations quaternion like Unity's
Yes/Mostly ? (need to check)

-Is it a forward renderer or deferred?
-it's a forward but ++ ... ? (cannot find again what is the right definition)

-Gamepads ?
yeah => docs
