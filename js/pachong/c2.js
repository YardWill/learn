var Crawler = require("crawler");
var jsdom = require('jsdom');
var Book = require('./db');
var URL = require('./url')

var c = new Crawler({
    maxConnections: 100,
    callback: function (error, result, $) {
    }
});

for (var i = 0; i < 400; i++) {
    (function (i) {

        var url = URL + i + '/';
        console.log(url)
        Book.find(function (err, book) {
            console.log(book)
            book.chapters.map(function (e, i) {
                c.queue([{
                    uri: url + e.num + '.html',
                    jQuery: jsdom,
                    forceUTF8: true,
                    callback: function (err, result, $) {
                        var content = $('#content').html();
                        content = content.replace(/;&nbsp/g, '')
                        e.content = content;
                        console.log(url + e.num + '.html')
                        Book.update({ _id: book._id }, book, function (err) {
                            console.log(e.num + ' is ok!');
                        });

                    }
                }])

            })
        })
    })(i)
}


