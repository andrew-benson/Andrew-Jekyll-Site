---
layout: page
title: Sealed Games
permalink: /collection/sealed-games
---

This is a collection I have amassed over the years via eBay mainly, it's an expensive hobby so I do not recommend it to anyone. 
Showing all of my sealed games to someone takes a few hours so it's the main driver for this blog to exist, I know this because I did it once... it was exhausting.

Now I finally have a platform where I can have a look at my games (without climbing on to ) and I can share it with other people :) 

<!-- Creating a distinct list of platforms -->
{% assign uniquePlatforms = '' | split: '' %}

{% for game in site.games %}
  {%- if game.url contains "/sealed/" -%}
    {% assign allPlatforms = game.platform | split: '_' | first | split: ' ' %}
    {% assign uniquePlatforms = uniquePlatforms | concat: allPlatforms | uniq %}
    {% assign uniquePlatforms = uniquePlatforms | uniq %}
  {%- endif -%}
{% endfor %}

<!-- Looping through each platform and selecting sealed games only, by path -->
{% for platform in uniquePlatforms %}
  <h3>{{ platform }}</h3>
  <ul>
  {% for game in site.games %}
    {%- if game.url contains "/sealed/" and game.platform == platform -%}
      <li><a href="{{ game.url }}">{{ game.title }}</a></li>
    {%- endif -%}
  {% endfor %}
  </ul>
  <br>
{% endfor %}
