# Stride Website Development

* [Getting Started](#getting-started)
* [Contributing](#contributing)
* [Roadmap](#roadmap)
* [.NET Foundation](#net-foundation)
* [License](#license)
* [Stride Website Next](#stride-website-next)

## 🚀 Getting Started

All the information you need to get started with Stride Website development can be found in the 📚 [Stride Website Wiki](https://github.com/VaclavElias/stride-website-next/wiki).

## 🤝 Contributing

Use [Discord](https://discord.gg/f6aerfE) for questions and general discussions. 
Use [Issues](https://github.com/stride3d/stride-website/issues) to report bugs and proposing features.

We welcome code contributions through pull requests. Issues tagged as **[`help-wanted`](https://github.com/stride3d/stride-website/labels/help-wanted)** are good candidates for starting to contribute code.

### Branch and Release

The `master` branch is the default branch for pull requests and most other development activities. 

Releases are based on a stable `master` branch. Use of [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) is encouraged.

Stride Website is _not_ released under a regular cadence; new updates arrive when maintainers fix issues or see enough changes that warrant a new releases. Sometimes we use prereleases to get feedbacks from the community.

## 🗺️ Roadmap

Our Wiki [Roadmap](https://github.com/VaclavElias/stride-website-next/wiki/Roadmap) communicates upcoming changes to the Stride website.


## 🌐 .NET Foundation

This project is supported by the [.NET Foundation](http://www.dotnetfoundation.org).

This project has adopted the code of conduct defined by the [Contributor Covenant](http://contributor-covenant.org/) to clarify expected behavior in our community.
For more information see the [.NET Foundation Code of Conduct](http://www.dotnetfoundation.org/code-of-conduct).

## License

This project is licensed under the [MIT](https://github.com/VaclavElias/stride-website-next/blob/main/LICENSE.md) License.

# Stride Website - Next

## Demo

Demo is here https://stride-website.vaclavelias.com/

Please feel free to collaborate, create issues, and submit pull requests.

## The motivation for the update

- [x] Improved consistency across pages, posts, and styling (post styling is similar to Microsoft Dev Blog, which offers an excellent readability experience)
- [x] Enhanced content readability
- [x] Modern and simplified design
- [x] Updated static page generator: Eleventy 2.0 (previously Jekyll)
- [x] Bootstrap 5.3 (previously used with many inconsistencies)
- [x] Font Awesome 6 (also previously used)
- [x] Removal of old, unnecessary code, such as AddThis, Disqus, JQuery, and JavaScript libraries
- [x] Improved website responsiveness (mobile, tablet, desktop)
- [x] Retaining existing content and location, with potential improvements if needed
  - [x] Addition of excerpts
  - [x] Link fixes
  - [x] Minor corrections and removal of unnecessary content

## Release Checklist

## Release Checklist
- [ ] Wiki - Check links
- [ ] Web - Check links
    
## RC6+ Checklist
- [x] Wiki - Add video steps from the original Readme.md
- [ ] Wiki - Explain adding remote code
- [x] Web - Code refactoring and code clean up - Once the new design update is settled
- [x] Wiki - Add Deployment Docs (staging, production, process for simple changes vs bigger updates)
- [x] Wiki - Instructions how to add posts, update website, folder structure, site.json (describe settings), _data, _drafts, remote c# code, explain packages in package.json
- [x] Wiki - New post instructions (e.g. using webp images)
- [x] Wiki - Update post instructions

## RC5 Checklist
- [x] Web - Check with devs current googletagmanager which is importing lots of junk like facebook events
- [x] - [x] Web - Shall we remove Diamond Striders and Platinum Striders, maybe to past 
- [x] Wiki - Review and update
- [x] Web - Do we want to preserve paging url as /blog/pageX/ or new /blog/X/. I added redirects to web.config to new pattern.

## RC4 Checklist
- [x] Web - Ensure excerpt and page description is set for all pages
- [x] Web/Wiki - Shall we mention that we use Bootstrap and Fontawesome to support Open Source community?

## RC3 Checklist
- [x] Web - Dark theme - Update `[data-bs-theme=dark]` in css or disable in `site.json`
  - CSS Collaborator wanted
- [x] Web - Flip colour for the logo when in dark mode
- [x] Web - Syntax highlight color added for light and dark theme
- [x] Web - Update card footers on the home page to keep the same height from the bottom
- [x] Web - Features - Add .NET/C# section
  - [x] Mention/add section dedicated to scripting, mentioning ```async```, maybe add code snippets?

## RC2 Checklist
- [x] Web - Past Posts - Update and pretify content
- [x] Web - Alert Messages added
- [x] Web - Search - Include docs in search

## RC1 Checklist
- [x] Web - Update blog post urls so they match the old urls
- [x] Web - FAQ - Remove Premium Support sentence
- [x] Web - Do we need Contact Form? Is Contact page good enough as it is (I will add missing links to GitHub and Discussions)?
- [x] Web - Staging web - Check image caching and gzip (web.config)

## Suggested posts
- [ ] Posts about all Stride tutorials, internal and external tutorials
- [ ] Separate post about .NET Live

## Post Release Update / Future Updates and Improvements

ToDo: Move these to separate issues

- [ ] Web - Encourage community to contribute with articles
- [ ] Web - It would be nice to have a jump to the top button like on the Microsoft Dev Blog
- [ ] Web - Search - Exclude API Search on the Web, or checkbox to include/exclude API
- [ ] Web - Add/List GitHub contributors automatically to a dedicated page (link from the footer)
- [ ] Web - Features - Create dedicated page for some features
- [ ] Web - Friends - Shall we link to our friends GoDot, others, just to be open and making friends in other C# open source game communities? 
- [ ] Web - Authors links to author pages
- [ ] Web - Split Tags to 2 columns in the /tags page
- [ ] Web - Blog Comments from GitHub Issues (replacement for old Discuss) - Analyse https://www.aleksandrhovhannisyan.com/blog/jekyll-comment-system-github-issues/, the problem is spam..
- [ ] Include Avatar, with different assets like dotnet bot, use also for 2D Games
- [ ] Web - Community Page - Elaborate more on each item, maybe like this https://www.blender.org/support/ and this https://www.blender.org/get-involved/
- [ ] Web - Keep only used FontAwesome references in all.css, to reduce the file size
- [ ] Metrics - Update to ASP.NET Core / Blazor https://github.com/stride3d/stride/tree/master/sources/metrics/Stride.Metrics
- [ ] Web - Change all images to webp
- [ ] Web - Create devs dedicated page (https://developer.blender.org/)
- [ ] Web - Minify if possible js and html
- [ ] Footer example https://www.blender.org/
  - [ ] New Section Download
     - [ ] Direct link to Release Notes
     - [ ] Direct link to Requirements
- [ ] Docs - Move wiki to repo and push to wiki - https://github.com/marketplace/actions/publish-to-github-wiki        

## Phase 1 - Done

- [x] Top Navigation
  - [x] Search button
  - [x] Search page
- [x] Home Page
- [x] Features Page
- [x] Blog Page
   - [x] GitHub avatar added to list and posts
   - [x] Improve Side bar
   - [x] Popular Posts
   - [x] Latest Posts
   - [x] Resources
   - [x] Rss Link
   - [x] 404 Page
   - [x] Archive - New Page, list by year
   - [x] Tags - New Page, list by tag
- [x] Learn
  - [x] Research new update for stride-docs
- [x] Community Page
  - [x] Content update? Keep similar length.
- [x] Sponsor Page
- [x] FAQ Page
- [x] Footer Section
   - [x] Update all links
- [x] Website code refactoring and code clean up - Once the new design update is settled
   - [x] Primary Links (github, twitter, ..) - Move to site.json?

## Phase 2 - Research - Done

- [x] Consider modern static site generator [11ty](https://www.11ty.dev/docs/)
   - No Ruby issues as it is JavaScript generator
- [x] Features Page - Improve like this, link to individual pages https://www.blender.org/features/


## Additional Content
- Maybe we can include this somewhere https://github.com/Doprez/Awesome-Stride
- Web, Docs, GitHub Wiki
- https://khalidabuhakmeh.com/combining-11ty-static-site-generator-with-aspnet-core