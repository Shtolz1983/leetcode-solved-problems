/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0];
  }
  const sortStrs = strs;
  strs.sort((a, b) => a.length - b.length);

  const start = sortStrs[0];
  let findEl = "";

  for (let i = start.length; i >= 0; i--) {
    const s = new Set();
    for (let j = 1; j < sortStrs.length; j++) {
      if (sortStrs[j].indexOf(start.slice(0, i))) {
        s.add(0);
        break;
      } else {
        s.add(1);
        findEl = start.slice(0, i);
      }
    }
    if (s.size === 1 && s.has(1)) {
      return findEl;
    }
  }
  return "";
};