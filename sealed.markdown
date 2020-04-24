---
layout: page
title: Sealed Games
permalink: /collection/sealed-games
---

This is a collection I have amassed over the years via eBay mainly, it's an expensive hobby so I do not recommend it to anyone. 
Getting this collection out takes a few hours to get down from the cupboard and show somebody so it's the main driver for this blog to exist, I know because I did it once and I was exhausted.

Now I finally have a platform where I can have a look at my games and I can share it with other people :) 

<!--
Loops through all the categories, each var category returns a 2 dimensional array [0] is the name, [1] is the posts)
-->
{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

[somelink]({{ site.baseurl }}{% link _posts/collection/sealed/ps2/2020-04-18-The-Bouncer-Black.markdown %})
