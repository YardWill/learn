const arr = [1, 2, 3];

const it = arr[Symbol.iterator]();

it.next();// { value: 1, done: false }
it.next();// { value: 2, done: false }
it.next();// { value: 3, done: false }

it.next();// { value: undefined, done: true }

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  console.log(1213);
}

const it = foo();

console.log(it.next());
// { value: 1, done: false }
console.log(it.return(42));

console.log(it.next());

{ value: 42, done: true }


// function foo() {
//   function nextState(v) {
//     switch (state) {
//     case 0:
//       state++;

//       // `yield`表达式
//       return 42;
//     case 1:
//       state++;

//       // `yield`表达式完成了
//       x = v;
//       console.log(x);

//       // 隐含的`return`
//       return undefined;

// 			// 无需处理状态`2`
//     }
//   }

//   var state = 0,
//     x;

//   return {
//     next(v) {
//       const ret = nextState(v);

//       return { value: ret, done: (state === 2) };
//     },

//     // 我们将省略`return(..)`和`throw(..)`
//   };
// }

// const it = foo();

// it.next();				// { value: 42, done: false }

// it.next(10);


// class MyCoolArray extends Array {
//   // 强制`species`为父类构造器
//   static get [Symbol.species]() { return Array; }
// }

// let a = new MyCoolArray(1, 2, 3),
//   b = a.map(v => v * 2);

// console.log(b instanceof MyCoolArray, b instanceof Array);

class Cc {
  constructor() {
    this.vv = 1;
  }
}

const a = new Cc();

const b = {
  dd: 12,
};

