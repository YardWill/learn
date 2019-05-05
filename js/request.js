const request = require('request');

let time = 10000;
let errCount = 0;

while (time > 0) {
  request('http://127.0.0.1:3000', {}, (err, res, body) => {
    console.log(err, 1)
    err && errCount++
    console.log('err', errCount)
  })
  time--
}
