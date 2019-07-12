/**
 * 81. Search in Rotated Sorted Array II
 * 
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 * You are given a target value to search. If found in the array return true, otherwise return false.
 * 
 * Example 1:
 *  Input: nums = [2,5,6,0,0,1,2], target = 0
 *  Output: true
 * 
 * Example 2:
 *  Input: nums = [2,5,6,0,0,1,2], target = 3
 *  Output: false
 * 
 * Follow up:
 *  This is a follow up problem to Search in Rotated Sorted Array, where nums may contain duplicates.
 *  Would this affect the run-time complexity? How and why?
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length - 1

  while (left < right) {
    let mid = (left + right) >> 1
    if (nums[mid] === target) return true
    if (nums[right] < nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid
      }else {
        left = mid + 1
      }
    } else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1
      }else {
        right = mid
      }
    } else {
      right --
    }
  }
  if (nums[left] === target) return true
  return false
};