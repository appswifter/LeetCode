/**
 * 414. Third Maximum Number
 * 
 * Given a non-empty array of integers, return the third maximum number in this array. 
 * If it does not exist, return the maximum number. The time complexity must be in O(n).
 * 
 * Example 1:
 *  Input: [3, 2, 1]
 *  Output: 1
 *  Explanation: The third maximum is 1.
 * 
 * Example 2:
 *  Input: [1, 2]
 *  Output: 2
 *  Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
 * 
 * Example 3:
 *  Input: [2, 2, 3, 1]
 *  Output: 1
 *  Explanation: Note that the third maximum here means the third maximum distinct number.
 *               Both numbers with value 2 are both considered as second maximum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max1 = null
  let max2 = null
  let max3 = null
  for (let i = 0; i < nums.length; i ++) {
    let n = nums[i]
    if (max1 === n || max2 === n || max3 === n) continue
    if (max1 === null || n > max1) {
      max3 = max2
      max2 = max1
      max1 = n
    } else if (max2 === null || n > max2) {
      max3 = max2
      max2 = n
    } else if (max3 === null || n > max3) {
      max3 = n
    }
  }

  return max3 === null ? max1 : max3
};