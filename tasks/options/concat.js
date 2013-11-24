module.exports = {
    cssdev: {
        src: [
            '<%= folder.src %>/less/css/bootstrap-min.css',
            '<%= folder.src %>/less/css/font-awesome-min.css',
            '<%= folder.src %>/css/app.css'
        ],
        dest: '<%= folder.src %>/css/app-min.css'
    },
    cssdist: {
        src: [
            '<%= folder.src %>/less/css/bootstrap-min.css',
            '<%= folder.src %>/less/css/font-awesome-min.css',
            '<%= folder.buildTemp %>/app.css'
        ],
        dest: '<%= folder.distTemp %>/css/app-min.css'
    },
    lib: {
        src: [
            '<%= folder.src %>/js/lib/lodash.underscore.js',
            '<%= folder.src %>/js/extension/lodash.underscore.js',
            '<%= folder.src %>/js/lib/jquery.js',
            '<%= folder.src %>/js/lib/microevent.js',
            '<%= folder.src %>/js/lib/bootstrap.js',
            '<%= folder.src %>/js/lib/crossfilter.js',
            '<%= folder.src %>/js/lib/d3.js',
            '<%= folder.src %>/js/lib/simple.v1.1.2.js',
            '<%= folder.src %>/js/lib/require.js'
        ],
        dest: '<%= folder.src %>/js/all-lib.js'
    }
};
