---
title: 'Navigation Mesh Preview'
author: silicon-studio
image_thumb: /images/blog/navmeshes/thumb.jpg
---

In Xenko 1.9 Beta, you can create a **navigation mesh** powered by [Recast and Detour](https://github.com/recastnavigation/recastnavigation) with **real-time feedback** directly in the **Xenko GameStudio!** The navigation mesh is especially useful for RPGs or top-down strategy games, as you can use it to **guide characters through complex scenes**.

---

The real-time feedback makes it easy to adjust and conveniently customize AI movement and the dimensions of the navigation mesh itself. The green outline of Xenko’s Navigation Mesh shows where the AI comes into play and where the colliders are set.

{% video '/images/blog/navmeshes/withOutlineAE.mp4' %}

In the videos, you can see how the AI navigates the level using the logic within the navigation mesh, and how the colliders will automatically be set in real-time. Of course, you can script AI movement manually, too.

{% video '/images/blog/navmeshes/NoOutlineAE.mp4' %}