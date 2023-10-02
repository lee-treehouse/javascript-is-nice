function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  //const mergedHead = new ListNode();

  let mergedHead = new ListNode(null);
  let mergedTail = mergedHead;

  let currentList1Item = list1;
  let currentList2Item = list2;

  while (
    (currentList1Item && currentList1Item.val !== null) ||
    (currentList2Item && currentList2Item.val !== null)
  ) {
    if (
      !currentList1Item ||
      (currentList2Item && currentList1Item.val > currentList2Item.val)
    ) {
      const newNode = new ListNode(currentList2Item.val);
      mergedTail.next = newNode;
      mergedTail = newNode;
      if (mergedHead.val === null) mergedHead = newNode;

      if (currentList2Item.next) {
        currentList2Item = currentList2Item.next;
      } else {
        currentList2Item = null;
      }
    } else {
      const newNode = new ListNode(currentList1Item.val);
      mergedTail.next = newNode;
      mergedTail = newNode;
      if (mergedHead.val === null) mergedHead = newNode;

      if (currentList1Item.next) {
        currentList1Item = currentList1Item.next;
      } else {
        currentList1Item = null;
      }
    }
  }
  if (mergedHead.val === null) return null;
  return mergedHead;
};

const elementSix = { val: 4, next: null };
const elementFive = { val: 3, next: elementSix };
const elementFour = { val: 1, next: elementFive };
// const input2 = [elementFour, elementFive, elementSix];

const elementThree = { val: 4, next: null };
const elementTwo = { val: 2, next: elementThree };
const elementOne = { val: 1, next: elementTwo };
// const input1 = [elementOne, elementTwo, elementThree];

console.log(mergeTwoLists(elementOne, elementFour));

const emptyNode1 = new ListNode(null);
const emptyNode2 = new ListNode(null);

//console.log(mergeTwoLists(emptyNode1, emptyNode2));

/*
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/
