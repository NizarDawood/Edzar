module.exports = function
    (eleventyConfig) {

    module.exports = function (eleventyConfig) {

        eleventyConfig.addPassthroughCopy('image');

        return {
            dir: { input: 'src', output: 'dist' },
        };
    };
}
