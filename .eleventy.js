// Description: Eleventy configuration file for the Stride website

// Import dependencies from node_modules / package.json
const sass = require("sass");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const path = require("node:path");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-table-of-contents");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyFetch = require("@11ty/eleventy-fetch");

module.exports = function (eleventyConfig) {

    // Add plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);

    // Add custom files and folders
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("scripts");
    eleventyConfig.addPassthroughCopy("files");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("favicon.png");
    eleventyConfig.addPassthroughCopy("CNAME"); // For GitHub Pages
    eleventyConfig.addPassthroughCopy("web.config");
    eleventyConfig.addPassthroughCopy({
        "node_modules/lunr/lunr.min.js": "scripts/lunr.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js": "scripts/bootstrap.bundle.min.js",
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map": "scripts/bootstrap.bundle.min.js.map",
        "node_modules/@fortawesome/fontawesome-free/css/all.min.css": "css/all.min.css",
        "node_modules/@fortawesome/fontawesome-free/webfonts": "webfonts/",
    });

    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
        strictFilters: false
    });

    eleventyConfig.addTemplateFormats("scss");

    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",
        compileOptions: {
            cache: false,
        },
        compile: async function (inputContent, inputPath) {
            let parsed = path.parse(inputPath);

            let result = sass.compileString(inputContent, {
                loadPaths: [
                    parsed.dir || ".",
                    this.config.dir.includes
                ], style: "compressed"
            });

            return async (data) => {
                return result.css;
            };
        }
    });

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
    });

    // Add tagList collection used in the /tags/ page
    eleventyConfig.addCollection('tagList', (collections) => {
        const uniqueTags = collections
            .getFilteredByTag('blog')
            .reduce((tags, item) => tags.concat(item.data.tags), [])
            .filter((tag) => !!tag)
            .filter((tag) => !!tag && !['page', 'blog', 'search'].includes(tag))
            .sort();
        return Array.from(new Set(uniqueTags));
    });

    // Add yearList collection used in the /archive/ page
    eleventyConfig.addCollection('yearList', (collections) => {
        const uniqueyears = collections
            .getFilteredByTag('blog')
            .map((post) => post.date.getFullYear())
            .reverse();
        return Array.from(new Set(uniqueyears));
    });

    eleventyConfig.addFilter('jsonify', function (variable) {
        return JSON.stringify(variable);
    });

    eleventyConfig.addFilter('normalize_whitespace', function (text) {

        //Remove tabs
        text = text.replace(/\t/g, '');

        text = text.replace(/\r/g, '');

        //Remove big spaces and punctuation
        text = text.replace(/\n/g, ' ');

        //remove repeated spaces
        text = text.replace(/ +(?= )/g, '');

        return text;
    });

    // Add custome filters
    eleventyConfig.addFilter("md", function (content = "") {
        return markdownIt({ html: true }).render(content);
    });

    eleventyConfig.addShortcode("img", function (title, url) {
        return `<img alt="${title}" src="${url}" class="img-fluid mb-3" loading="lazy" data-src="${url}">`;
    });

    eleventyConfig.addShortcode("img-click", function (title, url, destinationUrl) {
        return `<a href="${destinationUrl ?? url}" title="${title}" class="mb-3"><img alt="${title}" src="${url}" class="img-fluid" loading="lazy" data-src="${url}"></a>`;
    });

    eleventyConfig.addShortcode("youtube", function (id) {
        return `<div class="ratio ratio-16x9 mb-3"><iframe src="https://www.youtube.com/embed/${id}" title="YouTube video" allowfullscreen></iframe></div>`;
    });

    eleventyConfig.addShortcode("youtube-playlist", function (id) {
        return `<div class="ratio ratio-16x9 mb-3"><iframe src="https://www.youtube.com/embed/videoseries?list=${id}" title="YouTube video" allowfullscreen></iframe></div>`;
    });

    eleventyConfig.addShortcode("video", function (url) {
        return `<div class="ratio ratio-16x9 mb-3"><video autoplay controls loop preload="none" poster="${url.replace(".mp4", ".jpg") }"><source src="${url}" type="video/mp4"></video></div>`;
    });

    eleventyConfig.addShortcode("video-fluid", function (url) {
        return `<video class="mb-3 img-fluid" autoplay controls loop preload="none" poster="${url.replace(".mp4", ".jpg")}"><source src="${url}" type="video/mp4"></video>`;
    });

    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAnchor, {
        permalink: markdownItAnchor.permalink.linkInsideHeader({
            symbol: "🔗",
            class: "direct-link"
        })
    }).use(markdownItToc, { includeLevel: [2, 3] });

    eleventyConfig.setLibrary("md", markdownLibrary);

    eleventyConfig.addAsyncShortcode("remote_include", async function (url) {

        const sample = await eleventyFetch(url, {
            duration: "1d"
        });

        return sample;
    });

    // ToDo for fetching external code files
    //eleventyConfig.addAsyncShortcode("remote_include2", async function (urlPath) {
    //    const DOMAIN = "https://raw.githubusercontent.com/stride3d/stride/"
    //    if (urlPath.startsWith("/")) {
    //        // Make sure the `urlPath` doesn't start with `/` otherwise it will remove
    //        // the GitHub repo org/name from the path.
    //        urlPath = urlPath.slice(1);
    //    }
    //    const url = new URL(urlPath, DOMAIN).href;
    //    const sample = await eleventyFetch(url, {
    //        duration: "1d",
    //        type: "cs",
    //    });

    //    return sample;
    //});

    return {
        dir: {
            layouts: "_layouts"
        }
    };
};