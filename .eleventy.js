const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {  
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
    };

    eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.amendLibrary("md", markdownIt => markdownIt.use(require('markdown-it-footnote')))
};