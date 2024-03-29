---
title: 'Xenko is Going Open Source'
author: silicon-studio
image_thumb: /images/blog/github/Octocat.png
tags: ['Announcement']
---

We are thrilled to announce that Xenko is going <a href="https://github.com/SiliconStudio/paradox">open source on GitHub</a>. This is an important step toward the <strong>empowerment of game developers</strong>. We hope that this will make you more confident in using Xenko. You will have also an unique opportunity to contribute to the project and see by yourself how Xenko engine is working.

---

[[TOC]]

## License

<p>Xenko is now delivered with two licences types:</p>
<ul>
	<li>Binary Release version</li>
	<li>Source version</li>
</ul>

### Binary Release version

<p>Xenko binary release (as distributed on <a href="/download">our website</a>, with unmodified signed assemblies) is under the <a href="http://stride3d.net/features/licensing">&quot;Xenko 1.x version&quot; License Agreement</a>.</p>
<p>It allows you to create games and distribute them freely and royalty-free, as long as you use the signed binary runtime.</p>

### Source version

<ul>
	<li>Most of Xenko source code is released under the <a href="https://github.com/SiliconStudio/paradox/blob/master/LICENSE.GPL3.md">GPL v3 License</a> (unless otherwise stated).</li>
	<li>
		A few specific parts (stated explicitely in the source header) are released under <a href="http://opensource.org/licenses/MIT">MIT</a>, <a href="http://opensource.org/licenses/CPL">CPL</a>
		or <a href="http://opensource.org/licenses/Apache-2.0">Apache 2.0</a> (usually matching license of original contribution).
	</li>
	<li>Some libraries (i.e. SiliconStudio.Core) will probably be converted to MIT later.</li>
</ul>
<p>
	It means that if you use Xenko built from sources (either unmodified or modified), you must publish source of your game,
	as well as any changes to Xenko that you might have done (as per GPLv3 license).
</p>
<p>Even for Binary Release version users, it allows to easily browse the sources and understand what's happening inside Xenko.</p>
<p>
	If you want specific license terms (i.e. use a modified and/or self-compiled version of Xenko for your project),
	feel free to contact us at contact@stride3d.net
</p>

## Contributions

<p>We gladly accept external contributions. Feel free to submit us pull requests and we will consider them for inclusion.</p>
<p>
	Contributors will need to sign electronically a Contributor License Agreement, <a href="https://github.com/SiliconStudio/paradox/blob/master/doc/ContributorLicenseAgreement.md">available here</a> (based on Harmony).
	It allows us to use your changes in the commercial version, and relicense code easily (in case we decide to go MIT at some point for example).
</p>
<p>Otherwise you are free to fork, as long as you maintain GPL v3 License.</p>

## New Platforms

{% img 'Update Platforms' '/images/blog/release-1.0-beta1/UpdatePlatforms.png' %}

<p>We are also pushing a new release <code>1.0.0-beta01</code>. This release is most notably adding support for two new platforms:</p>
<ul>
	<li>Windows RT/Store</li>
	<li>Windows Phone</li>
</ul>
<p>It means that you can now target easily several <strong>major platforms</strong>: </p>
<ul>
	<li>Windows</li>
	<li>Windows Phone</li>
	<li>Windows Store</li>
	<li>iPhone</li>
	<li>iPad</li>
	<li>Android Phone</li>
	<li>Android Tablet </li>
</ul>
<p>You will be able to upgrade the platforms on your existing project by simply using the contextual menu <code>Update Package\Update Platforms</code> on a package in Xenko Studio.</p>

## New Samples

{% img 'Update Platforms' '/images/blog/release-1.0-beta1/SimpleTerrain.webp' %}

<p>We are also delivering 3 new samples:</p>
<ul>
	<li><strong>SimpleTerrain</strong> that demonstrates how to generate an entity model/mesh at runtime by displaying a heightmap terrain</li>
	<li><strong>SimpleDynamicTexture</strong> that demonstrates how to dynamically upload CPU textures to the GPU</li>
	<li><strong>RenderSceneToTexture</strong> that shows how to render your models in a render target from another camera point of view and display in a texture</li>
</ul>

## Roadmap

<p>Towards the coming months, we are expecting to deliver lots of new features!</p>
<p>This is a short list of the things we have in the pipe:</p>
<ul>
	<li>A full scene editor</li>
	<li>An improved animation system</li>
	<li>Real-time dynamic scripting from Xenko Studio and Visual Studio while the game is running (on Windows, at development time)</li>
	<li>Several advanced new rendering techniques and post effects.</li>
	<li>Support for more platforms (OSX, Linux...)</li>
</ul>
<p>As we have done so far, we will try to provide a sustained delivery of new versions, with lots of small fixes and enhancements along the bigger features, as soon as they are ready (even in an alpha stage).</p>
<p>At some point, we will open a user voice to collect your votes. Don't hesitate to post your thoughts on our answers hub!</p>

## Release notes 1.0.0-beta01

<p>Release date: 2014/10/17</p>

### New Features

<ul>
	<li>Assets: Materials can be compiled into a shader without being attached to a mesh. Use the key MaterialAsset.GenerateShader in your pdxfxlib file to allow this feature.</li>
	<li>Engine: Add support for Windows Store and Windows Phone projects.</li>
	<li>Misc: Assemblies are now all signed.</li>
	<li>Studio: Create Windows Store and Phone Projects.</li>
	<li>Studio: Deploy Windows Phone project directly from Game Studio.</li>
	<li>Studio: Add and remove platforms of existing game. Force to regenerate platform specific projects.</li>
	<li>Studio: Choose what platforms to create when starting from a sample.</li>
	<li>UI: Add support for MouseOver on Windows (mainly MouseOverState property/event in UIElement)</li>
</ul>

### Enhancements

<ul>
	<li>Samples: Load material and lighting configuration for the stand in ForwardLighting and DeferredLighting.</li>
	<li>Shaders: Incorrect shaders are no longer cached preventing NullReferenceException errors at compilation time.</li>
	<li>Studio: Generated solutions are created with VS2013 as default.</li>
	<li>Studio: The 'sprite' editor can now be used on UIImages too.</li>
	<li>UI: Improve default design of Button and EditText.</li>
	<li>UI: Make the EditText's caret blink and dissociate caret/selection colors.</li>
	<li>UI: Add support for mouse selection in EditText on Windows.</li>
	<li>UI: Create default design for ImageToggle.</li>
	<li>UI: UIImages are now regrouped into UIImageGroup the same way as SpriteGroup. The runtime-time and assets classes share the same hierarchy.</li>
</ul>

### Issues fixed

<ul>
	<li>Assets: Orientation of meshes from the assimp importer is now correct (<a href="https://github.com/SiliconStudio/paradox/issues/22">#22</a>).</li>
	<li>Assets: Mesh and materials are correctly associated during assimp import.</li>
	<li>Materials: Material always contains a diffuse part even if their color is black.</li>
	<li>Samples: Exhaustive shaders permutations for DeferredLighting.</li>
	<li>Shaders: The default shader is correct even when there is no parameter to generate it (no diffuse, no specular...).</li>
	<li>Shaders: Fix specular in deferred shading.</li>
	<li>Shaders: Correctly rename class in AmbientMapShading.pdxsl.</li>
	<li>Shaders: Fix issues related to geometry shader creation.</li>
	<li>Studio: New LightingAsset asset can be created in GameStudio.</li>
	<li>Studio: Unsupported assets are ignored when trying to be imported (<a href="https://github.com/SiliconStudio/paradox/issues/42">#42</a>).</li>
	<li>Studio: Fix issue with asset thumbnails sometimes not being updated.</li>
	<li>Studio: Some properties of the Material assets displayed with wrong/missing controls.</li>
	<li>UI: Fix problem in Canvas MeasureOverride method when measured with infinite values.</li>
</ul>

### Breaking changes

<ul>
	<li>Assets: SpriteGroup asset field 'Sprites' has been renamed 'Images' (.pdxsprite files can recovered by renaming the field inside the file).</li>
	<li>Assets: UIImage assets does not exist any more and have been replaced UIImageGroup assets. The old .pdxuiimg files cannot be easily recovered. The new .pdximage files can be easily created using the GameStudio 'sprite' editor.</li>
	<li>UI: EditText's EditInactiveImage and EditActiveImage properties have been renamed InactiveImage and ActiveImage.</li>
	<li>UI: Simplify ToggleButton. It now behaves like a Button with persistent states.</li>
</ul>

### Known Issues

<ul>
	<li>iOS: On slow phones, app might be too slow to start with Visual Studio attached (it gets killed by iOS). We will rearrange our initialization sequence.</li>
	<li>iOS: Rebuild might sometime not use latest version.</li>
	<li>Samples: Due to the way we now create platform-specific projects, samples specific icons on non-Windows platforms are currently gone. Later, a project setting page in Game Studio should make this setting available again.</li>
	<li>Samples: Since there is no accelerometer Input API yet, Accelerometer sample is currently removed.</li>
	<li>Windows Store/Phone: UI EditText and Game Resume/Destroy cycles are not implemented.</li>
	<li>Windows Store/Phone: SharpFont.dll is still compiled against .NET 4.5 (might not pass certifications).</li>
</ul>
