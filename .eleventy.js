const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {  
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addFilter('markdownify', (str) => {
        return markdownItRenderer.render(str);
      });
    let options = {
    html: true,
    breaks: true,
    linkify: true
    };

    eleventyConfig.setLibrary("md", markdownIt(options));
};