/*global $,define,require */

define(function (require, exports, module) {
    'use strict';

    var presidentsView = require('view/presidents');

    exports.render = function () {
        presidentsView.render();
    };

});