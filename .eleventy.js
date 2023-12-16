const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {  
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addFilter("getUniqueTopics", function(collection) {
        let topics = [];
        collection.forEach(item => {
            if (item.data.topic) {    
                if (!topics.includes(item.data.topic)) {
                    topics.push(item.data.topic);
                }
            }
        });
        return topics;
    }
    );
    let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
    };
    // add deslugify filter
    eleventyConfig.addFilter("deslugify", function(slug) {
        return slug.replace(/\-/g, " ").replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
    });
    eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.amendLibrary("md", markdownIt => markdownIt.use(require('markdown-it-footnote')))
};