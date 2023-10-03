const markdownIt = require("markdown-it");
const markdownItRenderer = new markdownIt();

module.exports = function(eleventyConfig) {  
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addFilter('markdownify', (str) => {
        return markdownItRenderer.render(str);
      });
};