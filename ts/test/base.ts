export class Base {
  items: Array<any>
  constructor() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
}

export const a = 2;
