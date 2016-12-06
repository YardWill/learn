var Crawler = require("crawler");
var jsdom = require('jsdom');
var Book = require('./db');
var URL = require('./url')

var c = new Crawler({
  jQuery: jsdom,
  maxConnection: 100,
  forceUTF8: true
})

var urlBook = URL + 300 + '/';
console.log(urlBook)
c.queue({
  uri: urlBook,
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
      var title = $(url).text();

      c.queue({
        uri: urlBook + _url,
        callback: function (error, result, $) {
          var content = $('#content').html();
          current_book.chapters.push({
            num: num,
            title: title,
            url: _url,
            content: content
          })
          // Book.findOne({ title: current_book.title }, function (err, book) {
          //   if (book == null) {
          //     var book = new Book(current_book);
          //     book.save(function (err) {
          //       if (err) {
          //         console.log(err);
          //       } else {
          //         console.log(current_book.title + this.urlBook + 'ok');
          //       }
          //     });
          //   } else {
          //     console.log(current_book.title + this.urlBook + '已经添加')
          //   }
          // })
        }
      })
      




    }
  }
})