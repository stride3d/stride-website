---
title: 'First Fix Update of 2016!'
author: silicon-studio
---

Happy New Year's! We resolved to keep updating Xenko to give our users a polished, easy-to-use engine.

---

So for the beginning of this year, we are focusing on smoothing out some major issues reported by the community. As always, we really appreciate your input.
 
## Async Debugging

There were some problems debugging async functions due to a problem in Mono.Cecil. We fixed that!

Now, you'll be able to look at local variables of any async functions. Also, the usage of the namespace in the watch panel is implicit and you can step over any await calls just normally.

## Windows 10 Certification

We fixed several small issues preventing Windows 10 apps created with Xenko from being compatible with Store certification.

Now you can submit your awesome apps/games to the Windows Store. Can't wait to see your creations!

## Skybox Compilation

Skybox compilation required a DX11 GPU (compute shaders) preventing some of you from using it.

We moved to a pixel shader version to ensure GameStudio works fine with older GPUs as well.
 
## List of other improvements made
- Fixed issues with displayed values of rotations changing after validation
- You are now able to easily edit the 3 components of a vector simultaneously using the lock icon. 
- The convex hull generation is now working along with the new Skeleton Asset.
- The Connection Router iOS script required to compile shaders on iOS devices has been fixed.
- Added support for proper resizing in Windows Universal Apps.
- Added support for OpenGLES devices that do not support packed depth-stencil-formats
- Added the missing XenkoDefaultFont required by the profiler system.
