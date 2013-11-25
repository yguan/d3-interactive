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
    libWithoutD3: {
        src: [
            '<%= folder.src %>/js/lib/lodash.underscore.js',
            '<%= folder.src %>/js/extension/lodash.underscore.js',
            '<%= folder.src %>/js/lib/jquery.js',
            '<%= folder.src %>/js/lib/microevent.js',
            '<%= folder.src %>/js/lib/databind.js',
            '<%= folder.src %>/js/lib/bootstrap.js',
            '<%= folder.src %>/js/lib/crossfilter.js',
            '<%= folder.src %>/js/lib/dimple.v1.1.2.js',
            '<%= folder.src %>/js/lib/require.js'
        ],
        dest: '<%= folder.src %>/js/all-lib-no-d3.js'
    },
    libWithD3: {
        src: [
            '<%= folder.src %>/js/lib/d3.js',
            '<%= folder.src %>/js/all-lib-no-d3.js'
        ],
        dest: '<%= folder.src %>/js/all-lib.js'
    },
    libMin: {
        src: [
            '<%= folder.src %>/js/lib/d3.min.js',
            '<%= folder.src %>/js/all-lib-no-d3-min.js'
        ],
        dest: '<%= folder.src %>/js/all-lib-min.js'
    }
};
