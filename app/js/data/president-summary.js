/*jslint nomen: true*/
/*global $,define,require,d3,crossfilter,MicroEvent,_ */

define(function (require, exports, module) {
    'use strict';

    function getSummaries(data) {
        var ymdFormat = d3.time.format("%Y-%m-%d"),
            summaries = [],
            lookupIndex = {},
            record,
            currentYear = new Date().getFullYear();

        _.each(data, function (p) {
            if (!lookupIndex.hasOwnProperty(p.president)) {
                record = {
                    name: p.president,
                    birth_year: p.birth_year,
                    death_year: p.death_year,
                    party: p.party,
                    age: p.death_year ? p.death_year - p.birth_year : currentYear - p.birth_year,
                    firstTookOffice: ymdFormat.parse(p.took_office)
                };
                summaries.push(record);
                lookupIndex[p.president] = summaries.length - 1;
            }
        });
        return summaries;
    }

    exports.getSummaries = getSummaries;
});
