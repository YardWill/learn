const addTwoNumbers = function (l1, l2) {
  const sum = l1.val + l1.next.val * 10 + l1.next.next.val * 100 + l2.val + l2.next.val * 10 + l2.next.next.val * 100
  const n1 = new ListNode(sum % 10);
  const n2 = new ListNode(Math.floor(sum / 10) % 10);
  const n3 = new ListNode(Math.floor(sum / 100));
  n1.next = n2;
  n2.next = n3;
  return n1;
};