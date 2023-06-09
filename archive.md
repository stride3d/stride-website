---
layout: page
title: Blog Archive
tags: search
---

Welcome to the Stride Blog Archive page. Explore the blog's archive of .NET and C# posts, organized by year. Catch up on past content and discover new insights, tips, and inspiration. 

 ---

 Looking for articles by topic? Check out our [Blog Tags](/tags/) page for a categorized list of posts.

{% assign reversedPosts = collections.blog %}
{% for year in collections.yearList %}
<h3>{{ year }}</h3>
<ul>
{% assign yearString = year | append: "" %}
{% assign filteredPosts = reversedPosts | where:"data.year", yearString %}
{% for post in filteredPosts %}
<li>{{ post.date | date: "%b %d" }}
    <a href="{{ post.url }}">{{ post.data.title }}</a>
</li>
{% endfor %}
</ul>
{% endfor %}