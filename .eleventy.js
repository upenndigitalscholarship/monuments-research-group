const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {  
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    let options = {
    html: true,
    breaks: true,
    linkify: true
    };

    eleventyConfig.setLibrary("md", markdownIt(options));
};