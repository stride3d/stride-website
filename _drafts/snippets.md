# GitHub Link
<a href="{{ site.links.github-stride-url }}" target="_blank" rel="noopener">title</a>

# Other Links
- site.links.github-stride-url
- site.links.docs-manual-url
- site.links.docs-tutorial-url

# Img
<img alt="ImageTitle" src="" class="img-fluid mb-2" loading="lazy" data-src="">

{% img 'title' 'url' %}
{% img-click 'title' 'url' %}
{% img-click 'title' 'url' 'destinationUrl' %}

- Light and dark variants of one image (GitHub's convention): end each URL with `#gh-light-mode-only` or `#gh-dark-mode-only`, and the site shows only the one of the current theme
  ![Title](/images/blog/.../table.webp#gh-light-mode-only)
  ![Title](/images/blog/.../table-dark.webp#gh-dark-mode-only)

{% youtube 'id' %}
{% youtube-playlist 'id' %}

{% video 'url' %}
{% video-fluid 'url' %}

# Iframe
- Note: no frameborder

<div class="ratio ratio-16x9 mb-4">
 <iframe width="560" height="315" src="https://www.youtube.com/embed/ufKkAsaJNTM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>