function unique(a) {
  var res = [];

  for (var i = 0, len = a.length; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      // 这一步十分巧妙
      // 如果发现相同元素
      // 则 i 自增进入下一个循环比较
      if (a[i] === a[j])
        j = ++i;
    }
    res.push(a[i]);
  }

  return res;
}


var a = [1, 1, '1', '2', 1];
var ans = unique(a);
console.log(ans); // => ["1", "2", 1]

console.log(undefined === null)
console.log(typeof (+ '5'))