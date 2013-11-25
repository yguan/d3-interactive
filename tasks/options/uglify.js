module.exports = {
    options: {
        preserveComments: false,
        mangle: false
    },
    lib: {
        files: {
            '<%= folder.src %>/js/all-lib-no-d3-min.js': ['<%= folder.src %>/js/all-lib-no-d3.js']
        }
    }
};
