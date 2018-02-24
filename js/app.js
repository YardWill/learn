require('./gen');
require('./pachong/pachong.js');
require('./bibao.js');

const foo = () => {
    console.log(arguments);
};
foo();

const bar = function () {
    console.log(arguments);
};

bar();


class T {
    constructor() {
        let zhihu = 1;
        Object.defineProperty(this, 'zhihu', {
            get() {
                console.log(`get:${zhihu}`);
                return zhihu;
            },
            set(value) {
                zhihu = value;
                console.log(`set:${zhihu}`);
            },
        });
    }
}

const t = new T();
t.zhihu = 3;
console.log(t.zhihu);

// require('./exl');
