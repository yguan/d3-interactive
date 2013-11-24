/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    var presidentDW = require('data/president-dw'),
        presidentChart = require('chart/presidents'),
        presidentViewTpl = require('lib/text!template/presidents.tpl');

    function render() {
        $('#viewport').append(presidentViewTpl);
        var chart = presidentChart.create('#president-chart', presidentDW.parties);
        $('#slider').change(function (ev) {
            var year = $(this).val();
            $('#start-year').text(year);
            presidentDW.filterByYearTookOffice(year);
            chart.refresh();
        });
    }

    exports.render = render;
});