---
layout: page
title: Unsealed/Used Games
permalink: /collection/unsealed-games
---

<!-- Creating a distinct list of platforms -->
{% assign uniquePlatforms = '' | split: '' %}

{% for game in site.games %}
  {%- if game.url contains "/unsealed/" -%}
    {% assign allPlatforms = game.platform | split: '_' | first | split: ' ' %}
    {% assign uniquePlatforms = uniquePlatforms | concat: allPlatforms | uniq %}
    {% assign uniquePlatforms = uniquePlatforms | uniq %}
  {% endif %}
{% endfor %}

<!-- Looping through each platform and selecting sealed games only, by path -->
{% for platform in uniquePlatforms %}
  <h3>{{ platform }}</h3>
  <ul>
  {% for game in site.games %}
    {%- if game.url contains "/unsealed/" and game.platform == platform -%}
      <li><a href="{{ site.baseurl }}{{ game.url }}">{{ game.title }}</a></li>
    {%- endif -%}
  {% endfor %}
  </ul>
  <br>
{% endfor %}

<!--

{% for col in site.collections %}
  <p>Collection: {{ col.label }}, {{ col.directory }}</p>
{% endfor %}


# Working
{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

-->
