/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const PalArr = String(x).split("");

  if (PalArr.length % 2 === 0) {
    while (PalArr.length !== 0) {
      if (PalArr.shift() !== PalArr.pop()) {
        return false;
      }
    }
  } else {
    while (PalArr.length !== 1) {
      if (PalArr.shift() !== PalArr.pop()) {
        return false;
      }
    }
  }
  return true;
};
