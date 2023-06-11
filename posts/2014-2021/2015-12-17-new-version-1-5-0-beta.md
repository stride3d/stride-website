---
title: 'Xenko 1.5 Beta Released'
author: silicon-studio
image_thumb: /images/blog/release-1.5/thumb.png
tags: ['Release']
---

As promised in our last blog post, we have released some exciting new features for Xenko. This includes a new animations system, support of fbx cameras, a new search bar for the assets view, physics collider shapes at run-time, a simple performance profiler and much more.

 ---
 
## New Features Highlights

[[TOC]]

## Skeleton asset

A new Skeleton asset (*.xkskel) has been introduced. Both models and animations now hold a reference to a skeleton. This allows to reuse the same skeleton definition in multiple assets and to retarget models and animations to different skeletons.

Skeletons can be created alongside other assets, when importing an FBX file or other model format.

{% img 'Skeleton Thumbnail' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/SkeletonThumbnail.png' %}

## Root motion support for models, cameras, lights, etc.

Animations now apply root motion if they have no skeleton, or the ‘Root Motion’ property is enabled on the animation asset. The animation will then move the entity itself, instead of the skeleton’s root bone.
This is especially useful to import animations of lights, cameras or unskinned models, without the need to bind them to the bones of a skeleton.

The FBX importer will now also import animations of various camera parameters (near-plane, far-plane, field of view) and apply them to the CameraComponent of the animated entity. More properties may be supported in the future.

{% img 'Root Motion Property' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/RootMotionProperty.png' %}

## New animation update system

The animation system now internally uses a new UpdateEngine to update objects. This allows us to animate arbitrary properties of entities, while accessing them in a highly efficient way.
It will be the foundation for a future animation curve editor inside the GameStudio.

The new ‘Animated Properties’ sample demonstrates how to create animations of any property from a script.


## Simple Profiling system
It is now possible to visualize profiling information of all the game systems and custom profilers directly within your running games.
To get started, use the Game Profiler built-in script, attach it to an entity and when the game is running press LCtrl-LShift-P.

{% img 'Simple Profiling system' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/profiler.png' %}

## Physic debug shapes at runtime
It is now possible to enable the rendering of physics collider shapes during runtime.
The debug shapes are normal entities and they must be enabled for each physics shape that requires it.
The best way to start with this feature is to use the Physics Shapes Render built-in script and attach the script to any entity that has a Physics Component and when the game is running press LCtrl-LShift-P.

{% img 'Physic debug shapes' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/phys-debug.png' %}

## Asset View

The Asset view has been improved to help you better organize and manage your assets.

### New ‘view options’ menu

The view options are gathered in a single menu accessible from the asset view toolbar.

{% img 'Asset View Options' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/AssetViewOptions.png' %}

You can display all the assets in the current folder only, in the current folder and its sub-folder. The third option let you display the assets and the sub folders.

You can also sort your assets by name, order, type or modification date. 

### New asset filter bar

With the new asset filter bar, you can filter your assets by name, tag, type or a combination of those. Each ‘filter tag’ can be disabled by a single click or removed from the active filters.

{% img 'Asset Filter Bar' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/AssetFilterBar.png' %}


To add a filter, type in the filter bar and matching filters will be displayed. Click on the one you want to add it to the list of active filters.

{% img 'Adding Asset Filter' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/AddingAssetFilter.png' %}

Only the assets matching the active filters will be displayed in the asset view. Note that type filters are inclusive, while name and tag filters are exclusive.

### Folder support in asset view

If the ‘Assets and folder in selected folder’ options is selected, the first level of sub-folder will be displayed in the asset view. You can drag and drop assets inside them. You can also copy/paste complete folder structure.

{% img 'Folder Support' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/FolderSupport.png' %}

### Copy-paste assets with their dependencies


You have now the ability to copy assets with their dependencies. To do that use the new entry ‘Copy with dependencies’ from the asset view context menu, or press Ctrl+Shift+C.

{% img 'Copy Asset With Dependencies' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/CopyAssetWithDependencies.png' %}

For example, if you copy/paste a model with its dependencies, you will get a copy of this model along with a copy of all its dependencies (skeleton, materials, textures)

### Border and Center support in sprite sheet editor

For ‘Sprite2D’ sprites, you can move the position of the center by selecting the <img src="https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/SpriteCenterIcon.png" style="display: inline" /> icon in the toolbar of the sprite editor. Grab and move the cross to the desired position.

For ‘UI’ sprites, you can change the borders by selecting the <img src="https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/SpriteBorderIcon.png" style="display: inline" /> icon in the toolbar of the sprite editor. You can then resize each border (left, top, right and bottom) separately in the same way as the texture region, by grabbing and moving one of them. Note that the <img src="https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/SpriteBorderLockIcon.png" style="display: inline" /> icon lets you ‘lock’or ‘unlock’ the sprite borders while resizing the texture region.

### New built-in scripts

We added a few more built-in scripts with this release such as an FPS camera script and First player controller script. To use them, just click on “New Asset”, “Script source code”, select the desired script and attach it to an adequate entity.

{% img 'Build in Scripts' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/built-in_Scripts.png' %}

### Precompiled Sprite Fonts

Font rights are quite restrictive and it is quite common that only some persons of the project have access to the font files. This was preventing some people to build the game. 
To solve this problem, we created a new type of asset, the precompiled sprite fonts. It is an asset taking as input an image and containing all the glyph information required to render the set of character specified. Inside your games you can used it exactly like a standard sprite font.
To generate a precompiled sprite font, the owner of the original font file just have to right click on an existing static font and choose “Generate Precompiled Font”.

{% img 'Precompiled Sprite Font' 'https://doc.stride3d.net/latest/en/ReleaseNotes/media/ReleaseNotes-1.5/PrecompiledSpriteFont.png' %}

That’s all for us this year, folks! Have a great holiday season, and we will be back early next year for the next updates on Xenko!

Note: For more details about the changes, see our [Release Notes](http://doc.stride3d.net/1.5/ReleaseNotes.html).