const fs = require('fs');
const url = require('url');
const net = require('net');

const rs = fs.createReadStream('./setter.js');

rs.on('data', (chunk) => {
    // console.log(chunk.toString('utf-8'));
});
rs.on('end', () => {
    console.log('done');
});

console.log(url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash', true));


net.createServer((con) => {
    con.on('data', (data) => {
        con.write([
            'HTTP/1.1 200 OK',
            'Content-Type: text/plain',
            'Content-Length: 11',
            '',
            'Hello World',
        ].join('\n'));
    });
}).listen(9000);
