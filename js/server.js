const http = require('http');
const fs = require('fs');
let a = 1;
const sleep = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 3000)
})
http.createServer((req, res) => {
  a++
  console.log('pre', a)
  sleep().then(() => {
    console.log('sleep', 1)
    res.end()
  })
  a--;
  console.log('after', a)

}).listen(3000)