/*jslint nomen: true*/
/*global $,define,require,d3,crossfilter,MicroEvent,_ */

define(['exports', 'data/president-data', 'data/president-summary'], function (exports, presidentData, presidentSummary) {
    'use strict';

    var dimensions,
        parties,
        presidents,
        presidentSummaries = presidentSummary.getSummaries(presidentData.data);

    function processData(data) {
        var cf,
            byParty,
            byBirthYear;

        // Use the crossfilter force.
        cf = crossfilter(data);

        // Create a dimension by political party
        byParty = cf.dimension(function (p) {
            return p.Party;
        });

        byBirthYear = cf.dimension(function (p) {
            return p.BirthYear;
        });

        return {
            byParty: byParty,
            byBirthYear: byBirthYear
        };
    }

    function filterByBeforeBirthYear(year) {
        dimensions.byBirthYear.filter(function (d) {
            return d < year;
        });
        parties.trigger('change');
        presidents.trigger('change');
    }

    function loadData() {
        dimensions = processData(presidentSummaries);
        parties = dimensions.byParty.group().top(Infinity);
        presidents = dimensions.byBirthYear;
        MicroEvent.mixin(parties);
        MicroEvent.mixin(presidents);
        filterByBeforeBirthYear(1962);
    }

    loadData();

    exports.parties = parties;
    exports.presidents = presidents;
    exports.filterByBeforeBirthYear = filterByBeforeBirthYear;
});
