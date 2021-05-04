/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {

  var maximumDepth = Number.NEGATIVE_INFINITY;

  var findMaxDepth = function(root, counter) {
      if (root === null ) {
          if (counter > maximumDepth) {
              maximumDepth = counter;
          }
          return;
      }

      counter += 1;
      findMaxDepth(root.left, counter);
      findMaxDepth(root.right, counter);
      return;
  }

  findMaxDepth(root, 0);
  return maximumDepth;
};