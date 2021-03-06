/**
 * 409. Longest Palindrome
 * 
 * Given a string which consists of lowercase or uppercase letters, 
 * find the length of the longest palindromes that can be built with those letters.
 * 
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 * 
 * Note:
 *  Assume the length of given string will not exceed 1,010.
 * 
 * Example:
 *  Input:
 *  "abccccdd"
 *  Output:
 *  7
 * 
 * Explanation:
 *  One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let set = new Set()

  for (let c of s) {
    if (set.has(c)) {
      set.delete(c)
    } else {
      set.add(c)
    }
  }

  return s.length - (set.size === 0 ? 0 : set.size - 1)
};