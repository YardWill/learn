import { Base } from './base';

class Queue extends Base {
  push(item: any) {
    this.items.push(item);
  }
  shift() {
    return this.items.shift();
  }
}
