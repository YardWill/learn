/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
// const getValue = (l1) => {
//   let v1 = l1;
//   let value1 = 0;
//   value1 += v1.val;
//   let bei = 10;
//   while (v1.next) {
//     value1 += v1.next.val * bei;
//     bei *= 10;
//     v1 = v1.next;
//   }
//   return value1;
// };
// const addTwoNumbers = (l1, l2) => {
//   const value1 = getValue(l1);
//   const value2 = getValue(l2);
//   let value3 = value1 + value2;
//   let l3 = null;
//   while (value3 > 0) {
//     const ll3 = l3;
//     l3 = new ListNode(value3 % 10);
//     l3.next = ll3;
//     value3 = parseInt(value3 / 10, 10);
//   }
//   return l3;
// };

// const node1 = new ListNode(2);
// const node2 = new ListNode(4);
// node1.next = node2;
// const node3 = new ListNode(3);
// node2.next = node3;
// const node4 = new ListNode(4);
// const node5 = new ListNode(5);
// node4.next = node5;
// const node6 = new ListNode(6);
// node5.next = node6;

// console.log(addTwoNumbers(node1, node4));


const reverse = (x) => {
  let v = x >= 0 ? x : -x;
  let v1 = 0;
  let bei = 1;
  const arr = [];
  while (v / 10 > 0) {
    arr.push(v % 10);
    v = parseInt(v / 10, 10);
  }
  while (arr.length > 0) {
    v1 = (arr.pop() * bei) + v1;
    bei *= 10;
  }
  return x >= 0 ? v1 : -v1;
};

reverse(120);

