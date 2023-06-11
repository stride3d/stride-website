---
title: 'Back to Normals'
author: silicon-studio
image_thumb: /images/blog/normals/Normal_map_example_thumb.png
tags: ['Education']
---

Xenko 1.9.2β fixes an important issue with our normal maps. We have recently reviewed our normal map settings and shaders. Unfortunately, a lot of them cover cases that were previously missing or unclear, so automated conversion of the assets is not possible.

---

[[TOC]]

## TL;DR

- Set the **Hint** of your texture asset to **Normal Map**
- In most cases, check **Scale & Offset** in your material
- If your texture asset is **Compressed**, check **Reconstruct Z** in your material
- If green colors in your normal map should be facing "up", check **Y is up** in your material

## What are normal maps?

{% img 'Actual geometry, normal map and shaded quad' 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Normal_map_example_with_scene_and_result.png' %}

(Image courtesy of [Julian Herzog](https://julianherzog.com/) shared under [Creative Commons 4.0](https://creativecommons.org/licenses/by/4.0/deed.en))

Normal maps are a way to simulate fine details in the surface of a mesh without relying on high polygon representation. When used in combination with lighting they produce believable image which appears fully 3D even on a flat surface.

Normal maps usually represent small changes of the normal vector (the vector which points *out* of the surface). Xenko Game Studio uses the most common convention, that the X and Y components follow the tangent and the bitangent of the surface, and the Z component follows the normal vector of the surface. This means that a value of (0, 0, 1) will coincide with the normal vector and will represent no change, while a value of (-1, 0, 0) will be strongly tilted to the "left", ("left" being negative X value in the tangent (local) space). 

## Settings

### Texture asset

In additional to the common texture settings, there are a couple of options you should pay attention to when importing normals.

#### Hint

If you plan to use a texture as a normal map, this should be set to **Normal Map**. This makes sure that the texture is assumed to be in *linear color space* and gets converted to a format suited for normals.

#### Format

- **Compressed** - Xenko will compress your texture in the most appropriate format for each platform. This will enforce some settings on the material side (see below). The compressed image will be unsigned, even if your input format is signed.
- **As-Is** - Xenko will import the texture with the format you have supplied, as long as the target platform supports it.

### Material Asset

In your Material properties, in the Geometry category, choose **Normap Map** as a **Surface** option. There are different input options, the default being texture. Select your texture and confirm the options below are correct.

#### Y is up

Normal maps represent vectors in tangent space. The surface's tangent is aligned with the horizontal texture direction and its bitangent with vertical direction. Depending on your normal map authoring tool and its settings, the bitangent is assumed to face either "up" or "down" the texture.

By default, Xenko assumes it is "down". Therefore, high green values indicate a surface facing "down". If instead your green values are supposed to make the normals facing "up", select this option.

Many tools, such as the [Nvidia Normal Map Filter](https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop) for Photoshop, let you customize the output by flipping some of the vectors. Please confirm which convention your tool uses.

#### Reconstruct Z

This option reconstructs the Z component from the X and Y components, assuming that X<sup>2</sup> + Y<sup>2</sup> + Z<sup>2</sup> = 1 and that Z is always positive, so that no normal vector can point to the back side of the surface.

This is necessary when storing normals in a 2-channel texture, throwing away the Z component.
Xenko might select such a format when you choose to **Compress** a normal map, so this option needs to be enabled.

Please note that this option will likely disappear in the future and be automatically inferred from the texture options and target platforms.

#### Scale & Offset

Most textures contain unsigned colors, meaning the red, green and blue channels are in the [0..1] range. However, normals require the signed range [-1 .. +1]. If your normal map is stored in an unsigned texture, this option will make sure that the values are properly scaled by x2 and then offset by -1.

Since normal maps are usually stored in unsigned formats, this option is enabled by default.
However, if you import your textures with the **AsIs** option and your input texture is signed, clear this option.

## Future Plans

Some of the options, such as **Scale & Offset** and **Reconstruct Z**, can be automatically inferred from the texture format so they will likely disappear. **Y is up** will become an option of your texture asset.