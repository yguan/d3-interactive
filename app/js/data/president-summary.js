/*jslint nomen: true*/
/*global $,define,require,d3,crossfilter,MicroEvent,_ */

define(function (require, exports, module) {
    'use strict';
    var mdyFormat = d3.time.format("%x");

    function getAge(dateStr1, dateStr2) {
        var d1 = mdyFormat.parse(dateStr1),
            d2 = dateStr2 ? mdyFormat.parse(dateStr2) : new Date(),
            diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

    function getSummaries(data) {
        var summaries = [],
            lookupIndex = {},
            record,
            currentYear = new Date().getFullYear();

        _.each(data, function (p) {
            if (!lookupIndex.hasOwnProperty(p.president)) {
                record = {
                    Name: p.president,
                    Birth: p.birth,
                    Death: p.death || 'N/A',
                    Party: p.party,
                    Age: getAge(p.birth, p.death),
                    FirstTookOffice: p.took_office,
                    'Left Office': p.left_office
                };
                record.BirthYear =  mdyFormat.parse(record.Birth).getFullYear();
                record['Year in First Took Office'] =  mdyFormat.parse(record.FirstTookOffice).getFullYear();
                record['Age at First Took Office'] = getAge(record.Birth, record.FirstTookOffice);
                summaries.push(record);
                lookupIndex[p.president] = summaries.length - 1;
            } else {
                summaries[lookupIndex[p.president]]['Left Office'] = p.left_office;
            }
        });
        return summaries;
    }

    exports.getSummaries = getSummaries;
});
