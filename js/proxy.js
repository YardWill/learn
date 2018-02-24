let obj = new Proxy({}, {
    get() {
        return 1;
    },
    set(target, key, value, receiver) {
        return Reflect.set(target, key, value, receiver);
    },
});

obj = {};


console.log(obj === 1);

// const obj = {};

// Object.defineProperty(obj, 'a', {
//     configurable: true,
//     get() {
//         Object.defineProperty(obj, 'a', {
//             configurable: true,
//             get() {
//                 Object.defineProperty(obj, 'a', {
//                     configurable: true,
//                     get() {
//                         return 3;
//                     },
//                 });
//                 return 2;
//             },
//         });
//         return 1;
//     },
// });

// const a = new Number(1);
// console.log(a.propetype);


// console.log(obj.a === 1 && obj.a === 2 && obj.a === 3);
