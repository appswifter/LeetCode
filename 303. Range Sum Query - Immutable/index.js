/**
 * 303. Range Sum Query - Immutable
 * 
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 * 
 * Example:
 *  Given nums = [-2, 0, 3, -5, 2, -1]
 * 
 *  sumRange(0, 2) -> 1
 *  sumRange(2, 5) -> -1
 *  sumRange(0, 5) -> -3
 * 
 * Note:
 *  You may assume that the array does not change.
 *  There are many calls to sumRange function.
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let sums = [...Array(nums.length+1)].map(_ => 0)
  for (let i = 0; i < nums.length; i ++) {
    sums[i + 1] = sums[i] + nums[i]
  }
  this.sums = sums
};

/** 
* @param {number} i 
* @param {number} j
* @return {number}
*/
NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j + 1] - this.sums[i]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */