/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length;
  while (end - start !== 1) {
    let i = Math.floor((end + start) / 2);
    if (nums[i] === target) {
      return i;
    } else if (target > nums[i]) {
      start = i;
    } else {
      end = i;
    }
  }
  if (nums[0] === target || target < nums[0]) {
    return 0;
  } else {
    return end;
  }
};