/*jslint nomen: true*/
/*global $,define,require,d3,dimple */

define(function (require, exports, module) {
    'use strict';

    function render(container, parties) {
        var svg = dimple.newSvg(container, 600, 190),
            chart = new dimple.chart(svg, parties),
            y,
            countAxis,
            partyAxis;

        chart.setBounds(142, 0, 370, 140);
        countAxis = chart.addMeasureAxis('x', 'value');
        partyAxis = chart.addCategoryAxis('y', 'key');
        countAxis.overrideMin = 0;
        countAxis.overrideMax = 19;
        chart.addSeries('key', dimple.plot.bar, [countAxis, partyAxis]);
        chart.draw();
        countAxis.titleShape.remove();

        // parties triggers change event when presidentDw.filterByBeforeBirthYear is called
        parties.bind('change', function () {
            chart.data = parties;
            chart.draw();
            countAxis.titleShape.remove();
        });
    }

    exports.render = render;
});