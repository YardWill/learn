let isDone: boolean = false;
let decLiteral: number = 6;
let hhh: string = "bob";
let sentence: string = `Hello, my name is ${hhh}.
I'll be ${ decLiteral + 1} years old next month.`;

let list: number[] = [1, 2, 3];

let x: [string, number] = ['hello', 10];

console.log(x[0].substr(1)); // OK
console.log(x[3]);

enum Color { Red = 1, Green = 3, Blue = 4 }

let c: Color = Color.Green;
console.log(c, Color)

let colorName: string = Color[3];
console.log(c, colorName)

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

function error(message: string): never {
  throw new Error(message);
}
// for (let i = 0; i < 10 ; i++) {
//   setTimeout(function() {console.log(i); }, 100 * i);
//   console.log(1, i)
// }

console.log([1, ...list])

interface LabelledValue {
  label: string;
}


function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object", a: '2' };
printLabel(myObj);

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
console.log(p1.x);

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr)

const a: number[] = [1, 2];

console.log(...a)
console.log(...[1, 2, 3])
const cc = () => 1;

class Grid {
  static origin = { X: 0, y: 0 }
  constructor(public scale: number) {
    console.log(1)
  }
  get getScale() {
    return this.scale;
  }
  set setScale(value: number) {
    this.scale = value;
  }
  hhh = () => {
    return 1;
  }
}