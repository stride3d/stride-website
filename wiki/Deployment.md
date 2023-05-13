# Table of Contents

We tested five different deployment methods and chose Azure Web Apps IIS ASP.NET 4.8.

- [GitHub Pages](#github-pages)
- [Azure Web Apps](#azure-web-apps)
  - [Deploying with .NET Framework](#deploying-with-net-framework)
  - [Deploying with .NET Core](#deploying-with-net-core)
  - [Azure Static Web Apps](#azure-static-web-apps)
- [Deployment To Wiki](#deployment-to-wiki)
- [Deployment Tests](#deployment-tests)

# GitHub Pages

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub, optionally processes the files through a build process, and publishes a website. It is an excellent way to host a website for free and serves as an effective method for testing a website before deploying it to a paid hosting service.

We use GitHub Pages to test our website. Any content pushed to the `staging` branch of the `stride-website` repository is automatically deployed to the `gh-pages` branch, from which GitHub Pages builds and publishes the website.

To manage the build and deployment process, we use the GitHub action `stride-web-staging-github.yml`. This action is triggered when:

1. A push is made to the staging branch
1. The action is manually triggered

You can manually trigger the action by navigating to the **Actions** tab and clicking the **Run workflow** button.

The `gh-pages` branch is a special branch used by GitHub Pages to host the website and should not be edited directly. Any changes made to the `gh-pages` branch will be overwritten by the subsequent `staging` branch deployment.

The GitHub action `stride-web-staging-github.yml` works as follows:

1. The action is triggered when:
   - A push is made to the staging branch
   - The action is manually triggered
1. `paths-ignore` is used to ignore specific changes to the `staging` branch
   - Current exclusions: `README.md`, `wiki/**`, `.github/**`
1. The remaining steps in the action are self-explanatory

# Azure Web Apps

## Deploying with .NET Framework

The .NET Framework uses IIS to host the website, which serves any static files.

The `web.config` file is used to configure IIS, including:

- Mime types for static files
- Redirects
- Gzip compression
- Static file caching
- Custom Headers
- Custom 404

The GitHub action `eleventy_stride-web-rc.yml` builds the website and deploys it to Azure Web Apps.

## Deploying with .NET Core

We have got these 4 options to deploy our website:

- Azure Web Apps (Windows) with IIS
- Azure Web Apps (Windows) with Kestrel
- Azure Web Apps (Linux) with Kestrel

The GitHub action `main_stride-web-test.yml` builds the website and deploys it to Azure Web Apps.

## Azure Static Web Apps

This deployment method was tested but not chosen. The main reason is the storage space limitation and that our media files are increasing in size.

This method could be a good option for a future deployment, once video files are hosted on YouTube and images are hosted in Azure Blob Storage.

# Deployment To Wiki

While the GitHub wiki offers a convenient way to document a project, it has some drawbacks, such as not being part of the repository by default and restricting edits to collaborators. To address these issues and allow community editing, we have implemented an alternative approach.

We created a `wiki` folder within the repository, which contains all wiki pages. The GitHub action `stride-web-wiki.yml` deploys the `wiki` folder to the GitHub wiki.

The GitHub action `stride-web-wiki.yml` is triggered when:

1. A push is made to the `master` branch of the `stride-website` repository
1. The action is manually triggered

You can manually trigger the action by navigating to the **Actions** tab and clicking the **Run workflow** button.

This GitHub action only monitors changes to the `wiki` folder. Any modifications made to the `wiki` folder will be deployed to the GitHub wiki. Note that changes to the `wiki` folder will not trigger other GitHub actions.

We use the [Wiki Page Creator GitHub Action](https://github.com/marketplace/actions/wiki-page-creator-action) to deploy the `wiki` folder to the GitHub wiki.

**Note**: ⚠️ A GitHub personal access token (GH_PAT) is required for authentication. This token is stored as a secret in the repository settings.⚠️

# Deployment Tests

Tests were discussed here https://github.com/stride3d/stride-website/issues/71

The basic **load tests** we conducted by measuring the `/blog/` page for different deployment scenarios. We only performed 1-2 tests, as this process is time-consuming and likely unnecessary:

- Hardware for Azure App Service: Basic B1, 1 CPU, 1.75 Memory, CPU type unknown, most likely different for Windows and Linux
- Hardware for GitHub Pages: Unknown
- Test was running 60 seconds, 2 threads

**Results**

1. GitHup Pages - **737 req/sec**
   - We have no control over various aspects, including security headers, redirects, and caching.
1. ASP.NET 4.8 with IIS - **186 req/sec**
   - We have full control of everything through `web.config`, including security headers, redirects, caching, ..
1. SWA (Static Web App - Paid) - **160 req/sec**
   - No familiar with but should be fair enough control through `staticwebapp.config.json`
1. .NET 7 (Windows) with IIS (in-process) - **127 req/sec**
   - We have full control of everything through `web.config`, including security headers, redirects, caching, ..
1. .NET 7 (Windows) with Kestrel (out-of-process) - **88 req/sec**
   - We have full control of everything through ASP.NET Core middleware, including security headers, redirects, caching, .. 
 1. .NET 7 (Linux) with Kestrel - ***38 req/sec**
    - We have full control of everything through ASP.NET Core middleware, including security headers, redirects, caching, .. 

**\*** I believe that Linux was slow due to the Azure App Service configuration, where Linux performance is purposely lower but also cheaper.

**Recommendation**

1. **ASP.NET 4.8 with IIS** for Staging
1. **ASP.NET 4.8 with IIS** for Release