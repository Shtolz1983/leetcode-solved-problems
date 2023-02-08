/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function linkedList(arr) {
  let list = new ListNode(arr[0]);

  let selectedNode = list;
  for (let i = 1; i < arr.length; i++) {
    selectedNode.next = new ListNode(arr[i]);
    selectedNode = selectedNode.next;
  }

  return list;
}

const transfNode = (listnode) => {
  let n = 0;
  let numberNode = BigInt(0);
  let listNode = listnode;
  for (let i = 0; ; i++) {
    n = BigInt("1" + "0".repeat(i));
    numberNode += n * BigInt(listNode.val);
    if (listNode.next) {
      listNode = listNode.next;
    } else {
      break;
    }
  }
  return numberNode;
};

var addTwoNumbers = function (l1, l2) {
  const sumNode = transfNode(l1) + transfNode(l2);
  const res = [];

  String(sumNode)
    .split("")
    .forEach((el) => res.unshift(Number(el)));

  return linkedList(res);
};

