/*jslint nomen: true*/
/*global $,define,require */

require.config({
    baseUrl: 'js',
    paths: {
        data: './data',
        view: './view',
        chart: './chart',
        template: './view/template',
        extension: './extension'
    }
});

require(['view/all-views'], function (views) {
    'use strict';

    views.render();
});
