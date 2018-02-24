// let a = 0;
// const aa = () => {
//     a += 1;
//     console.log(a)
// };

// aa();
// aa();
// aa();
// aa();
// const isType = type => obj => Object.prototype.toString.call(obj) === `[object ${type}]`;

// const isArray = isType('Array');
// const isString = isType('String');
// const isNumber = isType('Number');
// const isObject = isType('Object');

// console.log(isArray([]), isString('ss'), isNumber(1), isObject({}), JSON.stringify(Object.prototype.toString));

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
        // this.pop = pop;
        // this.posh = push;
        // this.peek = peek;
    }
    push(ele) {
        this.dataStore[this.top++] = ele;
    }
    pop() {
        return this.dataStore[--this.top];
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    length() {
        return this.top;
    }
    claer() {
        this.top = 0;
    }
}
const s = new Stack();
s.push(1)
s.push('ssss')
console.log(s)