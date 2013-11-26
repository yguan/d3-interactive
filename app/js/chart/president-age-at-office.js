/*global $,define,require,d3,dimple */

define(function (require, exports, module) {
    'use strict';

    function setBounds(chart, heightBound) {
        chart.setBounds(145, 20, 1350, heightBound);
    }

    function render(container, presidents) {
        var svg = dimple.newSvg(container, 1500, 700),
            chart = new dimple.chart(svg, presidents.top(Infinity)),
            y,
            firstTookOfficeAxis,
            nameAxis,
            ageAtBeingPresidentAxis,
            barWidth = 14,
            maxBars = 44,
            maxHeightBound = barWidth * maxBars,
            series;

        setBounds(chart, maxHeightBound);
        firstTookOfficeAxis = chart.addMeasureAxis('x', 'firstTookOffice');
        firstTookOfficeAxis.tickFormat = 'g';
        firstTookOfficeAxis.overrideMin = 1788;
        firstTookOfficeAxis.overrideMax = 2014;
        nameAxis = chart.addCategoryAxis('y', 'name');
        ageAtBeingPresidentAxis = chart.addMeasureAxis('z', 'ageAtBeingPresident');
        ageAtBeingPresidentAxis.overrideMin = 10;
        ageAtBeingPresidentAxis.overrideMax = 140;
        series = chart.addSeries('name', dimple.plot.bubble, [firstTookOfficeAxis, nameAxis, ageAtBeingPresidentAxis]);
        chart.draw();

        // presidents triggers change event when presidentDw.filterByBeforeBirthYear is called
        presidents.bind('change', function () {
            chart.data = presidents.top(Infinity);
            chart.draw();
        });
    }

    exports.render = render;
});