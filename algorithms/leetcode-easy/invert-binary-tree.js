function TreeNode(val, left, right) {
  // LeetCode's code
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// https://stackoverflow.com/a/75473590
function makeTree(arr) {
  if (!arr) return null; // empty tree
  const values = arr[Symbol.iterator]();
  const root = new TreeNode(values.next().value);
  const queue = new Set().add(root);
  for (const node of queue) {
    for (const side of ["left", "right"]) {
      const value = values.next().value;
      if (value != null) queue.add((node[side] = new TreeNode(value)));
    }
  }
  return root;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

Given the root of a binary tree, invert the tree, and return its root.
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

*/

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {};
