/*global $,define,require,d3,crossfilter,MicroEvent */

define(['exports', 'data/president-data'], function (exports, presidents) {
    'use strict';

    var ymdFormat = d3.time.format("%Y-%m-%d"),
        dimensions,
        parties;


    function processData(data) {
        var cf,
            byParty,
            groupByParty,
            byTookOffice;

        data.forEach(function (p) {
            p.took_office = ymdFormat.parse(p.took_office);
            if (p.left_office) {
                p.left_office = ymdFormat.parse(p.left_office);
            }
        });

        // Use the crossfilter force.
        cf = crossfilter(data);

        // Create a dimension by political party
        byParty = cf.dimension(function (p) {
            return p.party;
        });

        byTookOffice = cf.dimension(function (p) {
            return p.took_office;
        });

        return {
            byParty: byParty,
            byTookOffice: byTookOffice
        };
    }

    function filterByYearTookOffice(year) {
        dimensions.byTookOffice.filter([new Date(year, 1, 1), Infinity]);
        parties.trigger('change');
    }

    dimensions = processData(presidents.data);
    parties = dimensions.byParty.group().top(Infinity);
    MicroEvent.mixin(parties);

    exports.parties = parties;
    exports.filterByYearTookOffice = filterByYearTookOffice;
});
