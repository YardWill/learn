// const a = require('./foo');
// const c = require('./foo');
// const b = require('./Foo');

// const d = require('./test/bar');

// module.exports = d;
// console.log(module);

const a = {};

const b = Object.create(Object.prototype, {
  a: {
    writable: true,
    configurable: true,
    value: '1',
  },
});

const c = Object.create({}, {
  a: {
    writable: true,
    configurable: true,
    value: '1',
  },
});


const d = Object.create(null, {
  a: {
    writable: true,
    configurable: true,
    value: '1',
  },
});
console.log(a, b, c, d);
