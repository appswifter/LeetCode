/**
 * 268. Missing Number
 * 
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 * 
 * Example 1:
 *  Input: [3,0,1]
 *  Output: 2
 * 
 * Example 2:
 *  Input: [9,6,4,2,3,5,7,0,1]
 *  Output: 8
 *  
 * Note:
 *  Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let missing = nums.length

  for (let i = 0; i < nums.length; i ++) {
    missing ^= i ^ nums[i]
  }

  return missing
};