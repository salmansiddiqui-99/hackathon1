# Physical AI & Humanoid Robotics Book

This repository contains an interactive digital book on Physical AI and Humanoid Robotics, built with Docusaurus and deployed on Vercel.

## About

This book bridges the gap between digital AI and physical embodiment, focusing on how to apply AI to control humanoid robots in simulations and real environments. It covers essential topics including ROS 2, simulation tools, NVIDIA Isaac, and Vision-Language-Action integration.

## Development

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Project Structure

- `docs/` - All book content organized by modules
- `src/` - Custom React components and pages
- `static/` - Static assets like images
- `docusaurus.config.js` - Main configuration file
- `sidebars.js` - Navigation sidebar configuration

## Features

- Responsive design optimized for learning
- Interactive code examples
- Dark/light theme toggle
- Search functionality
- Mobile-friendly navigation

## Contributing

This book was developed using Spec-Kit Plus for structured spec-driven workflows and Claude Code for AI-assisted content generation.

### Spec-Driven Development Process

This project follows a spec-driven development approach:

1. **Specification**: Requirements defined in `/specs/001-ai-book-physical-ai/spec.md`
2. **Planning**: Architecture and implementation plan in `/specs/001-ai-book-physical-ai/plan.md`
3. **Tasks**: Implementation tasks in `/specs/001-ai-book-physical-ai/tasks.md`
4. **Implementation**: Using Docusaurus for static site generation with MDX content

### Development Commands

- `npm run start` - Start local development server
- `npm run build` - Build static site for production
- `npm run serve` - Serve built site locally for testing
- `npm run swizzle` - Override Docusaurus theme components (if needed)

### Project Structure

- `docs/` - All book content organized by modules and weeks
- `src/` - Custom React components and pages
- `static/` - Static assets like images and animations
- `docusaurus.config.js` - Main configuration file
- `sidebars.js` - Navigation sidebar configuration
- `specs/` - Spec-Kit Plus artifacts (spec, plan, tasks)

## Deployment

This site is automatically deployed to Vercel from the main branch.
