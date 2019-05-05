setTimeout(() => {
  console.log('timeout1');
});

new Promise(((resolve) => {
  console.log('promise1');
  for (let i = 0; i < 1000; i++) {
    i == 99 && resolve();
  }
  console.log('promise2');
})).then(() => {
  console.log('then1');
});

console.log('global1');

// const a = require('./foo.js');
// const b = require('./Foo.js');

// export default a;

// export const c = 1;

// export const d = 2;

// module.exports.default = a;


// const a = require('./foo').default;
// const { c } = require('./foo');


// import { c, d } from './foo';

// de = { c, d };

