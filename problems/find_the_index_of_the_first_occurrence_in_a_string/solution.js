/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const regEx = new RegExp(`(?:${needle})`, "gi");
  const res = regEx.exec(haystack)
  return  res? res.index : -1;
};