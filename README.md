# Kevin Wunsch - Personal Blog

A personal blog built with Jekyll, featuring thoughts on digital humanities, web development, and research projects.

## Features

- Custom vanilla JavaScript design with typewriter effects and scroll-based navigation
- Jekyll-powered blog system with Markdown posts
- Responsive design for all screen sizes
- GitHub Pages ready

## Local Development

### Prerequisites

- Ruby 2.7 or higher
- Bundler (`gem install bundler`)

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open [http://localhost:4000](http://localhost:4000)

## Writing Blog Posts

Create a new file in `_posts/` following the naming convention:
```
YYYY-MM-DD-title-of-post.md
```

Include frontmatter at the top:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +TIMEZONE
author: Kevin Wunsch
tags: [tag1, tag2, tag3]
---
```

Write your content in Markdown below the frontmatter.

## Deployment

This site is configured for GitHub Pages. Push to the `main` branch to deploy.

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _includes/           # Reusable HTML components
│   ├── header.html
│   ├── sidebar.html
│   └── footer.html
├── _layouts/            # Page templates
│   ├── default.html
│   └── post.html
├── _posts/              # Blog posts (Markdown)
├── assets/              # Static files
│   ├── css/
│   │   └── app.css
│   └── js/
│       └── app.js
├── index.html           # Home page
└── blog.html            # Blog listing page
```

## License

Personal project - feel free to use as inspiration for your own site.

## Contact

Find me at the [Connect & Collaborate](#5) section of the main site.
