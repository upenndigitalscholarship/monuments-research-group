const markdownIt = require('markdown-it');
const markdownItFootnote = require('markdown-it-footnote');

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
        topics = topics.reverse();
        return topics;
    }
    );
    eleventyConfig.addFilter("title", function(string) {
        return string.split(":")[0];
    });
    eleventyConfig.addFilter("subtitle", function(string) {
        return string.split(":")[1];
    });
    eleventyConfig.addFilter("snippet", function(string) {
        // return first 100 characters of string, remove any line breaks and html tags
        return string.substring(0, 250).replace(/(\r\n|\n|\r)/gm, "");
    });
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

    eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItFootnote));
};