/**
 * Sets srcset values for source tags
 * @param {String} source - file extension
 *  @example webp, png
 * @param {String} image - image name (without extension)
 * @param {String} customPath - custompath if not in root images folder
 */
export default (source, image, customPath = '') => {
  return require(`~/assets/images/${customPath}${image}${source}`)
};
