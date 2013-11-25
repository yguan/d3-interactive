/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    var presidentDW = require('data/president-dw'),
        partyCountChart = require('chart/president-party-count'),
        ageChart = require('chart/president-age'),
        presidentViewTpl = require('lib/text!template/presidents.tpl');

    function render() {
        $('#viewport').append(presidentViewTpl);
        partyCountChart.render('#party-count-chart', presidentDW.parties);
        ageChart.render('#age-chart', presidentDW.presidents);

        $('#slider').change(function (ev) {
            var year = $(this).val();
            $('#start-year').text(year);
            presidentDW.filterByBeforeBirthYear(year);
        });
    }

    exports.render = render;
});