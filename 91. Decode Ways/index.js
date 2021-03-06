/**
 * 91. Decode Ways
 * 
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 *  'A' -> 1
 *  'B' -> 2
 *  ...
 *  'Z' -> 26
 * 
 * Given a non-empty string containing only digits, determine the total number of ways to decode it.
 * 
 * Example 1:
 *  Input: "12"
 *  Output: 2
 *  Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 * 
 * Example 2:
 *  Input: "226"
 *  Output: 3
 *  Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

  let n = s.length

  if (n === 0) return 0

  let dp = [...Array(n + 1)].map(_ => 0)
  dp[0] = 1
  dp[1] = s[0] !== '0' ? 1 : 0

  for (let i = 2; i <= n; i++) {
    let first = parseInt(s.substring(i - 1, i))
    let second = parseInt(s.substring(i - 2, i))

    if (first >= 1 && first <= 9) {
      dp[i] += dp[i - 1]
    }

    if (second >= 10 && second <= 26) {
      dp[i] += dp[i - 2]
    }
  }

  return dp[n]
};