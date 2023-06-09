---
title: 'History and Daily Commits on GitHub'
author: silicon-studio
image_thumb: /images/blog/github/Octocat.png
---

One year ago, we open-sourced Xenko on GitHub when we released our first beta. This allows our users to understand how the engine work, use it more efficiently, not be blocked by bugs and contribute with the development.

---

<p>However, until recently, Xenko code was manually filtered and published to GitHub. The process was inefficient and time-consuming, resulting in delayed updates.</p>
<p>Also, since all commits were squashed, our community couldn't see code history, branches, commit messages, activity and daily improvements made to the software. Changes would only be visible after releases.</p>
<p>In addition, integrating GitHub PR and community activity back in our source tree was not well streamlined very well with our workflow.</p>
<p>We decided to spend some time automatizing this commit filtering process and applying it on the last year of history (since 1.0.0-beta01).</p>
<p>This history is now <b>live</b> on our <a href="https://github.com/SiliconStudio/xenko">GitHub repository</a>, and you can expect almost daily commits from now on.</p>
<p>We are very excited to make our development more transparent and visible to the community!</p>

{% img-click 'History on github' '/images/blog/github/xenko-github.png' 'https://github.com/SiliconStudio/xenko/commits/master' %}

{%- capture title -%}
This GitHub repository is now archived. You can access its successor, Stride, at this link {{ site.links.github-stride-url }}.
{%- endcapture -%}

{% include _alert.html type:'secondary' title: title %}

