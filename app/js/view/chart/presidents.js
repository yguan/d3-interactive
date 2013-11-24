/*jslint nomen: true*/
/*global $,define,require,d3 */

define(function (require, exports, module) {
    'use strict';

    function barchart(id, parties) {
        var woff = 115,
            hoff = 0,
            w = 400 + woff,
            h = 100 + hoff,
            chart,
            x,
            y;

        chart = d3.select(id)
            .append("svg")
            .attr("class", "chart")
            .attr("width", w)
            .attr("height", h)
            .append("g")
            .attr("transform", "translate(" + woff + "," + hoff + ")");

        x = d3.scale.linear()
            .domain([0, d3.max(parties, function (v) {
                return v.value;
            })])
            .range([0, w - woff]);

        y = d3.scale.ordinal()
            .domain(d3.range(parties.length))
            .rangeBands([0, h - hoff]);

        function refresh() {
            var bars,
                partyLabels,
                valueLabels;

            bars = chart.selectAll("rect")
                .data(parties, function (v) {
                    return v.key;
                });

            bars.enter().append("rect")
                .attr("height", y.rangeBand());

            bars.attr("y", function (d, i) {
                return i * y.rangeBand();
            })
                .attr("width", function (v) {
                    return x(v.value);
                });

            partyLabels = chart.selectAll(".party-label")
                .data(parties, function (v) {
                    return v.key;
                });

            partyLabels.enter().append("text")
                .attr("class", "party-label")
                .attr("x", function (v) {
                    return 0;
                })
                .attr("y", function (d, i) {
                    return y(i) + y.rangeBand() / 2;
                })
                .attr("dx", -3)
                .attr("dy", ".35em")
                .attr("text-anchor", "end")
                .text(function (v) {
                    return v.key;
                });

            valueLabels = chart.selectAll(".value-label")
                .data(parties, function (v) {
                    return v.key;
                });

            valueLabels.enter().append("text")
                .attr("class", "value-label")
                .attr("dy", ".35em")
                .attr("dx", -3);

            valueLabels
                .attr("y", function (d, i) {
                    return y(i) + y.rangeBand() / 2;
                })
                .text(function (v) {
                    return v.value;
                })
                .attr("x", function (v) {
                    if (v.value === 0) {
                        return x(1);
                    }
                    return x(v.value);
                })
                .classed("white", function (v) {
                    return v.value !== 0;
                });

        }

        refresh();

        return {
            chart: chart,
            refresh: refresh
        };
    }

    exports.create = function (container, parties) {
        return barchart(container, parties);
    };



});