"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pluralize = require("pluralize");
/**
 * Returns the plural form of any noun.
 * @param {string}
 * @return {string}
 */
function getPlural(str) {
    return pluralize.plural(str);
}
exports.getPlural = getPlural;
