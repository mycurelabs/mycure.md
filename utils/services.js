import _ from 'lodash';
/**
 * Normalizes nested $populated from an object. Also normalizes objects under
 * array keys.
 *
 * @example
 * const result = {
 *   a: 1,
 *   b: 2,
 *   $populated: {
 *     c: {
 *       d: 3,
 *       $populated: {e: 4},
 *     },
 *     f: [{g: 5, $populated: {h: 6}}]
 *   }
 * };
 * const normalizedResult = normalizePopulated(result);
 * console.log(normalizedResult);
 * // {a: 1, b: 2, c: {d: 3, e: 4}, f: [{g: 5, h: 6}]}
 *
 * @param {any} val - Object or array of objects to normalize.
 * @return {any} Same object or array, but $populated contents spread into
 * parent.
 */
export const normalizePopulated = (val) => {
  if (_.isArray(val)) {
    return _.map(val, normalizePopulated);
  } else if (_.isObject(val)) {
    return {
      ..._.omit(val, '$populated'),
      ..._.mapValues(val.$populated, normalizePopulated),
    };
  } else {
    return val;
  }
};
