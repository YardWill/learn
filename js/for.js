// const arr = [1, 2, 3];
// for (let index = 0; index < arr.length; index++) {
//     let element = arr[index];
//     if (element === 2) { console.log(0); break;}
//     console.log(element);
// }
// for 测试(for和while其实差不多,这里我们只测试for循环)
var n = 10000000;
// 准备待测数组
var arr = [];
for(var count=0;count<n;count++){
    arr[count] = 1;
}
console.time('for');
for (var i = 0; i < arr.length; i++) {
    arr[i];
}
console.timeEnd('for');


// for loop测试
console.time('for');
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.timeEnd('for');


// for loop缓存测试
console.time('for cache');
var sum = 0;
var len = arr.length;
for (var i = 0; i < len; i++) {
    sum += arr[i];
}
console.timeEnd('for cache');

// for loop倒序测试
console.time('for reverse');
var sum = 0;
var len = arr.length;
for (i = len-1;i>0; i--) {
    sum += arr[i];
}
console.timeEnd('for reverse');


//forEach测试
console.time('forEach');
var sum = 0;
arr.forEach(function(ele) {
    sum += ele;
})
//这段代码看起来更加简洁，但这种方法也有一个小缺陷：你不能使用break语句中断循环，也不能使用return语句返回到外层函数。
console.timeEnd('forEach');


//ES6的for of测试
console.time('for of');
var sum = 0;
for (let i of arr) {
    sum += i;
}
console.timeEnd('for of');
//这是最简洁、最直接的遍历数组元素的语法
//这个方法避开了for-in循环的所有缺陷
//与forEach()不同的是，它可以正确响应break、continue和return语句


// for in 测试
console.time('for in');
var sum=0;
for(var i in arr){
    sum+=arr[i];
}
console.timeEnd('for in');