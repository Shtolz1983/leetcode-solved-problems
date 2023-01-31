/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const deduct = [];
  const sortNums = [];

  for (i = 0; i < nums.length; i++) {
    // if (target - nums[i] >= 0) {
      index = deduct.indexOf(nums[i]);
      if (index >= 0) {
        return [index, i];
      } else {
        deduct.push(target - nums[i]);
        sortNums.push(nums[i]);
      }
    
  }
  return [];
};