# Kevin Wunsch - Personal Blog

A personal blog built with Jekyll, featuring thoughts on digital humanities, web development, and research projects.

## Features

- Custom vanilla JavaScript design with typewriter effects and scroll-based navigation
- Jekyll-powered blog system with Markdown posts
- Responsive design for all screen sizes
- GitHub Pages ready

## Writing Blog Posts

### Creating a New Post

1. Create a new file in the `_posts/` directory following the naming convention:
   ```
   YYYY-MM-DD-title-of-post.md
   ```
   Example: `2026-01-30-my-first-post.md`

2. Add frontmatter at the top of the file:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2026-01-30 12:00:00 +0100
   author: Kevin Wunsch
   tags: [digital-humanities, web-development, research, teaching, collaboration]
   excerpt: "A brief summary of your post (used on homepage)"
   ---
   ```

3. Write your content in Markdown below the frontmatter.

### Available Tags

Posts are automatically organized on the homepage by tags:
- `digital-humanities` - Appears in "Digital Humanities" section
- `web-development` - Appears in "Web Development" section  
- `research` - Appears in "Research Projects" section
- `teaching` - Appears in "Teaching & Mentorship" section
- `collaboration` - Can be combined with other tags

You can use multiple tags on a single post.

### Excerpt

The `excerpt` field in the frontmatter controls what text appears on the homepage for your post. If omitted, Jekyll will use the first paragraph of your post content.

### Example Post

```markdown
---
layout: post
title: "Getting Started with Jekyll"
date: 2026-01-30 14:30:00 +0100
author: Kevin Wunsch
tags: [web-development]
excerpt: "A beginner's guide to building static sites with Jekyll"
---


## Deployment

This site is configured for GitHub Pages:
- **Main branch**: Original vanilla HTML/CSS/JS version
- **Jekyll branch**: Jekyll-powered version (currently deployed)

Push to the `jekyll` branch to deploy updates to GitHub Pages.

### GitHub Pages Settings
- Source: Deploy from branch `jekyll`
- Folder: `/ (root)`

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _includes/           # Reusable HTML components
│   ├── header.html      # Site navigation
│   ├── sidebar.html     # Sidebar links
│   └── footer.html      # Site footer
├── _layouts/            # Page templates
│   ├── default.html     # Base layout wrapper
│   ├── post.html        # Individual blog post layout
│   └── category.html    # Category page template
├── _posts/              # Blog posts (Markdown) - ADD YOUR POSTS HERE
├── assets/              # Static files
│   ├── css/
│   │   └── app.css      # All styles
│   └── js/
│       └── app.js       # Interactive features
├── index.html           # Homepage (dynamically pulls from posts)
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## License

Personal project - feel free to use as inspiration for your own site.

## Contact

Find me at the [Connect & Collaborate](#5) section of the main site.
