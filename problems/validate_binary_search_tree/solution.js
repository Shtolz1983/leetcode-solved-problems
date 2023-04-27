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
 * @return {boolean}
 */
var isValidBST = function(root) {
 if (!root){
   return true 
 } 
 return helper(root, -Infinity, Infinity)  
};

function helper(node, lower, high){
      if (!node) return true 
      if (node.val <=lower || node.val >= high){
        return false
      }

      return helper(node.left, lower, node.val) && helper(node.right, node.val, high)


}
