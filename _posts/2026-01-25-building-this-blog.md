---
layout: post
title: "Building This Blog: A Vanilla to Jekyll Journey"
date: 2026-01-25 10:00:00 +0100
author: Kevin Wunsch
tags: [web-development, jekyll, javascript, css]
---

One of the joys of being a developer is building your own tools. This blog started as a pure HTML/CSS/JavaScript project, and I recently converted it to Jekyll for easier content management. Here's what I learned along the way.

## The Original Design

I began with a simple goal: create a personal site using only the web fundamentals—no frameworks, no build tools. The result featured:

- **Typewriter effects** for dynamic text
- **Scroll-based navigation** with smooth transitions
- **Mini-intro cards** that appear as you scroll
- **Responsive design** for all screen sizes

All implemented in vanilla JavaScript. It was a great exercise in understanding the DOM and browser APIs without abstractions.

## Why Jekyll?

As I started thinking about adding a blog, I faced a choice:
1. Build a custom JSON-based system
2. Create individual HTML files for each post
3. Use a static site generator

Jekyll won because:
- **Native GitHub Pages support** (no deployment configuration)
- **Markdown for content** (focus on writing, not HTML)
- **Liquid templating** (flexible layouts without JavaScript complexity)
- **Collections and frontmatter** (structured data for posts)

## The Conversion Process

Converting to Jekyll meant:

### 1. Restructuring the Files
```
Original:          Jekyll:
index.html    →    _layouts/default.html
app.css       →    assets/css/app.css
app.js        →    assets/js/app.js
              +    _posts/[posts].md
```

### 2. Extracting Components
I broke the monolithic HTML into reusable includes:
- `_includes/header.html`
- `_includes/sidebar.html`
- `_includes/footer.html`

### 3. Adding Liquid Syntax
Jekyll's Liquid templating allows dynamic content:

```liquid
{% raw %}
<title>{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}</title>
{% endraw %}
```

### 4. Creating Post Layouts
A dedicated layout for blog posts with:
- Metadata (date, author, tags)
- Navigation between posts
- Responsive formatting

## Design Challenges

The biggest challenge was maintaining the original design aesthetic while adding blog functionality. I wanted:
- **Consistent styling** across home page and blog
- **Readable long-form content** (different from the portfolio sections)
- **Smooth integration** with existing navigation

The solution was adding dedicated blog styles that complement the existing design system, using the same color variables and visual language.

## What I'd Do Differently

Looking back, I might have:
- Started with Jekyll from the beginning
- Used SCSS instead of CSS for better organization
- Implemented a tag system earlier
- Added RSS feeds from the start

But the journey taught me valuable lessons about both vanilla web development and Jekyll's capabilities.

## Next Steps

Now that the foundation is in place, I'm excited to:
- Write more about digital humanities and research
- Share code snippets and tutorials
- Experiment with Jekyll plugins
- Build a tag-based filtering system

The code is open source, so feel free to explore and adapt it for your own projects!

---

*Curious about the technical details? Check out the repository on GitHub.*
