import { Base } from './base';

class Stack extends Base {
  push(item: any) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
}

const conversion = (num: number): string => {
  const stack = new Stack();
  let num1 = num;
  while (num1 > 0) {
    stack.push(num1 % 2);
    num1 = Math.floor(num1 / 2);
  }

  let str = '';
  while (!stack.isEmpty()) {
    str += stack.pop();
  }
  return str;
};

console.log(conversion(1111112313423452523));

