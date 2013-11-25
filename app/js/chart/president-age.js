/*global $,define,require,d3,dimple */

define(function (require, exports, module) {
    'use strict';

    function setBounds(chart, heightBound) {
        chart.setBounds(137, 10, 400, heightBound);
    }

    function render(container, presidents) {
        var svg = dimple.newSvg(container, 700, 700),
            chart = new dimple.chart(svg, presidents.top(Infinity)),
            y,
            ageAxis,
            nameAxis,
            barWidth = 14,
            maxBars = 43,
            maxHeightBound = barWidth * maxBars;

        setBounds(chart, maxHeightBound);
        ageAxis = chart.addMeasureAxis('x', 'age');
        nameAxis = chart.addCategoryAxis('y', 'name');
        ageAxis.overrideMin = 0;
        ageAxis.overrideMax = 100;
        chart.addSeries('name', dimple.plot.bar, [ageAxis, nameAxis]);
        chart.draw();
        nameAxis.titleShape.remove();

        // presidents triggers change event when presidentDw.filterByBeforeBirthYear is called
        presidents.bind('change', function () {
            chart.data = presidents.top(Infinity);
            setBounds(chart, chart.data.length * barWidth);
            chart.draw();
            nameAxis.titleShape.remove();
        });
    }

    exports.render = render;
});