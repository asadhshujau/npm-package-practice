import * as pluralize from 'pluralize';

/**
 * Returns the plural form of any noun.
 * @param {string}
 * @return {string}
 */
export function getPlural(str:any) : string {
    return pluralize.plural(str);
}
