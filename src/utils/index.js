/**
 * 
 * @param {String} text 
 * @param {Array} indicators 
 * 
 * Note: Make sure to apply the 'white-space: pre' CSS to the block
 */

export const parseTextWithNewLine = (text, indicators ) => {
  let output = text;
  for (let i = 0 ; i < indicators.length; i++) {
    let index = output.search(indicators[i]);
    let newline = '\n';
    let position = index + indicators[i].length;
    output = [output.slice(0, position), newline, output.slice(position)].join('');
  };
  return output;
}