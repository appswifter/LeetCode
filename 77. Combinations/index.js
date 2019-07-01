/**
 * 77. Combinations
 * 
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 * 
 * Example:
 *  Input: n = 4, k = 2
 *  Output:
 *  [
 *    [2,4],
 *    [3,4],
 *    [2,3],
 *    [1,2],
 *    [1,3],
 *    [1,4],
 *  ]
 */

 /**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = []
  function backtrack(path, start) {

    if (path.length === k) {
      res.push(path)
      return
    }
      
    for (let i = start; i <= n; i ++) {
      if (path.indexOf(i) > -1) continue

      backtrack([...path, i], i + 1)
    }
  }
    
  backtrack([], 1)

  return res
};