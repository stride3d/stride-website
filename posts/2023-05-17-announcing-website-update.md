---
title: 'Announcing Stride Website'
author: vaclav
tags: ['Announcement']
image: /images/blog/2023-04/new-home-page.webp
---

The Stride team is happy 🙌 to announce the launch of our new Stride website. We have been working on this for a while, and we are excited to share it with you. We hope you like it.

---

## The Motivation for the Update

The Stride website has been around for some time ⌛. It was originally created using Jekyll. Over the years, we have added more content, but the website has not been updated for quite a while.

Our main goal was to make the website future-proof and easy to maintain. We also wanted to improve the overall user experience and give it a more modern feel.

## What's New or Updated

- Improved consistency across pages, posts, and styling, offering an excellent readability experience
- Enhanced content readability
- Modern and simplified design
- Updated static page generator: Eleventy 2.0 (previously Jekyll)
- Bootstrap 5.3 (previously Bootstrap 3)
- Font Awesome 6 (previously 4.4)
- Removal of old, unnecessary code, such as AddThis, Disqus, JQuery, and JavaScript libraries
- Improved website responsiveness (mobile, tablet, desktop)
- Content review and minor corrections
- [Tags](/tags/) page
- [Archive](/archive/) page
- Every single page was reviewed and updated 🤯
- Dark Theme (Experimental)
- Search functionality now includes our [documentation]({{ site.links.docs-url }}) website
- GitHub Wiki was enabled for content contributors, containing information about the website structure, how to add new content, and how to contribute.

This new update will enable us to share more content with you faster and more easily. We will also be able to add more features and enhance the overall experience.

{%- capture title -%}
The Disqus comment widget has been removed from the blog posts, as we would like to encourage our readers to use <a class="link-info" href="{{ site.links.github-discussions-url }}" target="_blank" rel="noopener">GitHub Discussion</a> or Discord. We are considering linking the GitHub Discussions with the blog posts.
{%- endcapture -%}

{% include _alert.html type:'info' title:title %}

## What's next

We will continue to improve the website and add more content. Additionally, we will be adding more features and further refining the overall experience.

Our Stride website [GitHub issue tracker](https://github.com/stride3d/stride-website/issues) is open for any suggestions or feedback. Please feel free to collaborate, create issues, and submit pull requests.

## Closing

We hope you like the new website.

With this new release, we would like to encourage our community to contribute as well. Your experiences, insights, and knowledge are invaluable, and we would love to showcase them on our blog.

If you have a topic, tutorial, or success story you'd like to share, we invite you to get in touch. By contributing, you'll not only help others in the community but also gain visibility for your work and expertise.

Let's work together to make the Stride community even more vibrant and resourceful.