var Crawler = require("crawler");
var jsdom = require('jsdom');
var Book = require('./db');
var URL = require('./url')

var c = new Crawler({
    jQuery: jsdom,
    maxConnections: 1000,
    forceUTF8: true,
    callback: function (error, result, $) {
        var current_book = {};
        var urls = $('#list a');

        current_book.title = $('#maininfo h1').text()
        current_book.author = $('#info p').eq(0).text()
        current_book.update_time = $('#info p').eq(2).text()
        current_book.latest_chapter = $('#info p').eq(3).html()
        current_book.intro = $('#intro').html()
        current_book.chapters = [];

        for (var i = 0; i < urls.length; i++) {
            var url = urls[i]

            var _url = $(url).attr('href') + "";
            var num = _url.replace('.html', '');
            var title = $(url).text()

            current_book.chapters.push({
                num: num,
                title: title,
                url: _url
            })
        }

        Book.findOne({ title: current_book.title }, function (err, book) {
            if (book == null) {
                var book = new Book(current_book);
                book.save(function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(current_book.title + this.url + 'ok');
                    }
                });
            } else {
                console.log(current_book.title+ this.url + '已经添加')
            }
        })
    }
});
for (var i = 0; i < 400; i++) {
    var url = URL + i + '/';
    console.log(url)
    c.queue(url);
}
