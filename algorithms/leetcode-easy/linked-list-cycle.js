/**
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

* Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let current = head;
  let seen = new Set();

  while (current && current.next) {
    if (seen.has(current)) {
      return true;
    }
    seen.add(current);
    current = current.next;
  }
  return false;
};

// each item in array will link to the next item
// last item in arr will have next link to pos
const buildTestLinkedListWithCycle = (arr, cyclePos) => {
  let head = {};
  let tail = head;
  let cyclePosNode = null;

  for (let i = 0; i < arr.length; i++) {
    const current = new ListNode(arr[i]);

    // implement the cycle
    if (cyclePos && i === cyclePos) cyclePosNode = current;
    if (cyclePosNode && i === arr.length - 1) current.next = cyclePosNode;

    if (!head) {
      head = current;
      tail = head;
    } else {
      tail.next = current;
      tail = current;
    }
  }
  return head;
};

/*

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

*/
const input1 = buildTestLinkedListWithCycle([3, 2, 0, -4], 1);
console.log(hasCycle(input1));

const input2 = buildTestLinkedListWithCycle([3, 2, 0, -4]);
console.log(hasCycle(input2));

// ok this works but there is also the idea of slow and fast pointer discussed here
//https://leetcode.com/problems/linked-list-cycle/solutions/1829768/javascript-easy-to-understand-slow-fast-pointers-detailed-explanation/
