function getElementWidth(content, padding, border) {
  function extractNumber(value) {
    return parseFloat(value);
  }
  const contentWidth = extractNumber(content);
  const paddingWidth = extractNumber(padding);
  const borderWidth = extractNumber(border);
  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
