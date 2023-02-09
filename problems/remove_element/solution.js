/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const lenNums = nums.length;
  let count = 0;

  for (let i = 0; i < lenNums; i++) {
    if (nums[nums.length - 1] === val) {
      nums.pop();
      count += 1;
    } else {
      nums.unshift(nums.pop());
    }
  }

  return nums.length;
}