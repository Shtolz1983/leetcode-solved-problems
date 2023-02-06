/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stek = [];
  const compare = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  s.split("").forEach((element) => {
    if (
      typeof stek[stek.length - 1] !== "undefined" &&
      stek[stek.length - 1] === compare[element]
    ) {
      stek.pop();
    } else {
      stek.push(element);
    }
  });
  return stek.length === 0 ? true : false;
};