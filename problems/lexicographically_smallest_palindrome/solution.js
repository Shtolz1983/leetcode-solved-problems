/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  const arr = s.split("");
  let res = "";
  while (arr.length > 0) {
    if (arr.length === 1) {
      res += arr.pop();
      // "efcfe"
      return res + res.slice(0, -1).split("").reverse().join("");
    }
    const start = arr.shift();

    const end = arr.pop();

    if (start > end) {
      res += end;
    } else {
      res += start;
    }
  }

  return res + res.split("").reverse().join("");
};