// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   var chunk = process.stdin.read();
//   if(typeof chunk === 'string'){
//     chunk = chunk.slice(0,-1);
//     process.stdout.write(`stringLength:${chunk.length}\n`);
//   }
//   if(chunk === ''){
//     process.stdin.emit('end');
//     return
//   }
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}\n`);
//   }
// });ß

// process.stdin.on('end', () => {

//   process.stdout.write('end');
// });
// function fb(n){
//   if(n > 1){
//     return fb(n-1)+fb(n-2);
//   }else if(n = 1){
//     return 1;
//   }else{
//     return 0;
//   }
// }
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var sum = 0;

// process.stdin.on('data', function (data) {
//   var chunk = data;
//   chunk = +chunk;
//   if(chunk == 0){
//     console.log(0);
//   }else{
//     var i = 1,c,d;
//     while(i){
//       c = fb(i) - chunk;
//       if(c >= 0){
//         d = chunk - fb(i-1);
//         e = c < d?c:d;
//         console.log(e);

//         process.stdin.emit('end');
//         break
//       }
//       i++
//     }
//   }
// });

// process.stdin.on('end', function () {

// });

// process.stdin.setEncoding('utf8');

// process.stdin.on('data',(data) => {
//   var chunk = data;
//   chunk = +chunk;
//   if(chunk == 0){
//     console.log(0);
//   }else{
//     var i = 1,c,d;
//     while(i){
//       c = fb(i) - chunk;
//       if(c >= 0){
//         d = chunk - fb(i-1);
//         e = c < d?c:d;
//         console.log(e);

//         process.stdin.emit('end');
//         break
//       }
//       i++
//     }
//   }

  
// })
// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });



process.stdin.resume();
process.stdin.setEncoding('ascii');

var sum = 0;

process.stdin.on('data', function (data) {
  var len = data.indexOf(' ');
  var chunk1 = +data.slice(0,len);
  var chunk2 = +data.slice(len+1);
  for(var i = 0; i < chunk1;i ++){
    for(var j = 0; j < chunk2; j++){
      
    }
  }
});

process.stdin.on('end', function () {

});