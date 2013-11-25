/*jslint nomen: true*/
/*global $,define,require */

require.config({
    baseUrl: 'js',
    paths: {
        data: './data',
        lib: './lib',
        view: './view',
        chart: './chart',
        template: './template',
        extension: './extension'
    }
});

require(['view/all-views'], function (views) {
    'use strict';
    views.render();
});
