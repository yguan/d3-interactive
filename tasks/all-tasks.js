module.exports = function (grunt) {
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('lib', ['concat:libWithoutD3', 'concat:libWithD3', 'uglify:lib', 'concat:libMin']);

    grunt.registerTask('cssdev', ['less:dev', 'concat:cssdev']);

    grunt.registerTask('cssdist', ['less:dist', 'concat:cssdist']);

    grunt.registerTask('dev', ['cssdev', 'lib']);

    grunt.registerTask('build', ['less:dist', 'concat:cssdist', 'requirejs:dist', 'copy:dist', 'copy:apps', 'clean:dist']);

    grunt.registerTask('sdev', ['connect:dev']);

    grunt.registerTask('sdist', ['connect:dist']);
};

