const co = require('co');

function* gen(x) {
    const y = yield x + 2;
    return y;
}

const g = gen(1);
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }

