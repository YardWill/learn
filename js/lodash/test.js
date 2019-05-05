const _ = require('lodash');

const a = {
  data: {
    bar: {
      a: 2,
      b: 1,
    },
  },
};

const data = _.get(a, ['data']);
console.log(data, a);

data.foo = 2;

console.log(data, a);


const data1 = _.set(a, ['data', 'a'], 222222);

console.log(data1, a);

