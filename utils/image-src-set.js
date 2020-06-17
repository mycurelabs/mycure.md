/**
 * Sets srcset values for source tags
 * @param {String} source - file extension
 * @param {String} image - image name (without extension)
 * @param {String} customPath - custompath if not in root images folder
 */
export default (source, image, customPath = '') => {
  const fileExtension = source.charAt(0) === '.'
    ? source
    : `.${source}`;
  return require(`~/assets/images/${customPath}${image}${fileExtension}`);
};
