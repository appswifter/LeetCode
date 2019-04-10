/**
 * 152. Maximum Product Subarray
 * 
 * Given an integer array nums, find the contiguous subarray within an array (containing at least one number) 
 * which has the largest product.
 * 
 * Example 1:
 *  Input: [2,3,-2,4]
 *  Output: 6
 *  Explanation: [2,3] has the largest product 6.
 * 
 * Example 2:
 *  Input: [-2,0,-1]
 *  Output: 0
 *  Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums === null || nums.length === 0) return 0
  let max = min = result = nums[0]

  for (let i = 0; i < nums.length; i ++) {
    let temp = max
    max = Math.max(max * nums[i], min * nums[i], nums[i])
    min = Math.min(temp * nums[i], min * nums[i], nums[i])
    if (max > result) {
      result = max
    }
  }

  return result
};