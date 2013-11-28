/*global $,define,require,d3,dimple */

define(function (require, exports, module) {
    'use strict';

    function setBounds(chart, widthBound) {
        chart.setBounds(145, 130, widthBound, 220);
    }

    function render(container, presidents) {
        var barWidth = 32,
            maxBars = 43,
            maxWidthBound = barWidth * maxBars,
            svg = dimple.newSvg(container, maxWidthBound + 150, 400),
            chart = new dimple.chart(svg, presidents.top(Infinity)),
            y,
            firstTookOfficeAxis,
            ageAtBeingPresidentAxis,
            series;

        setBounds(chart, maxWidthBound);
        firstTookOfficeAxis = chart.addCategoryAxis('x', 'Year in First Took Office');
        firstTookOfficeAxis.tickFormat = 'g';
        ageAtBeingPresidentAxis = chart.addMeasureAxis('y', 'Age at First Took Office');
        ageAtBeingPresidentAxis.overrideMin = 0;
        ageAtBeingPresidentAxis.overrideMax = 75;
        series = chart.addSeries(['Name', 'Death', 'Age'], dimple.plot.bar, [firstTookOfficeAxis, ageAtBeingPresidentAxis]);
        chart.draw();

        // presidents triggers change event when presidentDw.filterByBeforeBirthYear is called
        presidents.bind('change', function () {
            chart.data = presidents.top(Infinity);
            setBounds(chart, chart.data.length * barWidth);
            chart.draw();
        });
    }

    exports.render = render;
});