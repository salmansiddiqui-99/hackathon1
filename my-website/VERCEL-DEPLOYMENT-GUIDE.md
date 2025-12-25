# Vercel Deployment Guide for Physical AI & Humanoid Robotics Book

## Overview
This guide provides step-by-step instructions for deploying the Physical AI & Humanoid Robotics book to Vercel. The site is built with Docusaurus v3.x and is configured for static site deployment.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you don't have an account
2. **Git Repository**: Ensure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. **Node.js**: The project requires Node.js >= 20.0 (as specified in package.json)

## Deployment Methods

### Method 1: Git Integration (Recommended)

1. **Import Project**
   - Go to [vercel.com](https://vercel.com) and log in
   - Click "Add New Project"
   - Select your Git provider and give Vercel access to your repository
   - Choose the repository containing this Docusaurus project

2. **Configure Project**
   - Framework Preset: Select "Other" (Vercel will detect Docusaurus automatically)
   - Root Directory: `my-website` (or your Docusaurus project directory)
   - Build Command: `npm run build` (already configured in package.json)
   - Output Directory: `build` (as specified in vercel.json)
   - Development Command: Leave empty

3. **Environment Variables** (if needed)
   - If you have environment variables, add them in the Environment Variables section
   - Common variables might include analytics IDs, API keys, etc.

4. **Deploy**
   - Click "Deploy" to start the first deployment
   - Vercel will automatically build and deploy your site
   - You'll receive a unique deployment URL

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to Project Directory**
   ```bash
   cd my-website
   ```

4. **Deploy**
   ```bash
   vercel --prod
   ```
   - Follow the prompts to link to your Git repository (recommended for automatic deployments)
   - Or deploy without Git integration for a one-time deployment

## Configuration Files

### vercel.json
The project includes a `vercel.json` file with the following configuration:
```json
{
  "github": {
    "silent": true
  },
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

This configuration:
- Uses the `@vercel/static-build` builder for Docusaurus static sites
- Specifies `build` as the output directory
- Sets up proper routing for client-side routing in Docusaurus
- Configures GitHub integration settings

### package.json Scripts
The deployment leverages these scripts from package.json:
- `build`: Compiles the Docusaurus site to the `build` directory
- `deploy`: Available for Docusaurus-specific deployment (though Vercel handles this automatically)

## Build Settings

- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`
- **Node Version**: >= 20.0 (as specified in engines field)

## Environment Configuration

### Production URL
Make sure your `docusaurus.config.js` has the correct production URL:
```js
url: 'https://your-project-name.vercel.app',
```

### Base URL
The base URL should typically be `/` unless deploying to a subdirectory:
```js
baseUrl: '/',
```

## Continuous Deployment

When connected to a Git repository, Vercel provides:
- Automatic deployments on every push to the main branch
- Preview deployments for pull requests
- Custom domain support
- SSL certificate management

## Custom Domain Setup

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Vercel will handle SSL certificate setup automatically

## Performance Optimization

The site is already optimized for performance:
- Static site generation with Docusaurus
- Client-side routing
- Asset optimization
- Modern JavaScript bundling
- Prefetching for faster navigation

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that Node.js version is >= 20.0
   - Verify all dependencies are in package.json
   - Check for any build-time errors in the Vercel logs

2. **Images or Assets Not Loading**
   - Ensure assets are in the `static` directory
   - Check that paths in MDX files are correct

3. **Routing Issues**
   - Verify the catch-all route in vercel.json is correct
   - Ensure Docusaurus routing configuration is correct

4. **Environment Variables Missing**
   - Add required environment variables in Vercel dashboard
   - Verify variable names match what's expected in your code

### Debugging Steps

1. Check Vercel deployment logs for error messages
2. Test the build locally: `npm run build`
3. Serve the build locally: `npm run serve`
4. Verify all links and assets work correctly

## Monitoring and Analytics

### Vercel Analytics
- Monitor deployment status in the Vercel dashboard
- Track performance metrics and error rates
- View deployment history and rollbacks

### Custom Analytics
- Add analytics tools like Google Analytics, Plausible, etc. through Docusaurus configuration
- Configure in `docusaurus.config.js` under the `themeConfig` section

## Best Practices

1. **Always Test Locally**: Run `npm run build && npm run serve` before deploying
2. **Use Git Integration**: For automatic deployments and preview branches
3. **Monitor Performance**: Check Lighthouse scores and performance metrics
4. **Secure Environment Variables**: Never hardcode sensitive information
5. **Use Production URLs**: Ensure `docusaurus.config.js` has correct production URL

## Rollback Procedure

If you need to rollback to a previous deployment:
1. Go to the "Deployments" tab in your Vercel project
2. Find the working deployment
3. Click "Promote" to make it the production deployment

## Support

- Vercel Documentation: [https://vercel.com/docs](https://vercel.com/docs)
- Docusaurus Documentation: [https://docusaurus.io/docs](https://docusaurus.io/docs)
- For project-specific issues, check the GitHub repository

## Additional Resources

- [Vercel + Docusaurus Guide](https://vercel.com/guides/deploying-docusaurus-with-vercel)
- [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)
- [Static Site Generation with Vercel](https://vercel.com/docs/concepts/deployments/build-output-api)