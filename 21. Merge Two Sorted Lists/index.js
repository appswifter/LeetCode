/**
 * 21. Merge Two Sorted Lists
 * 
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 *  Input: 1->2->4, 1->3->4
 *  Output: 1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = node = new ListNode(null)

  while (l1 && l2) {
    let val
    if (l1.val <= l2.val) {
      val = l1.val
      l1 = l1.next
    }else {
      val = l2.val
      l2 = l2.next
    }
    node.next = new ListNode(val)
    node = node.next
  }

  let l = l1 || l2

  if (l) {
    node.next = l
  }

  return head.next
};