var Crawler = require("crawler");
var jsdom = require('jsdom');
var url = require('url');

var c = new Crawler({
    jQuery: jsdom,
    maxConnections : 100,
    // This will be called for each crawled page 
    callback : function (error, result, $) {
        // $ is Cheerio by default 
        //a lean implementation of core jQuery designed specifically for the server 
        $('a').each(function(index, a) {
            var toQueueUrl = $(a).attr('href');
            c.queue(toQueueUrl);
            console.log(toQueueUrl)
        });
    }
});

c.queue(['http://www.biquku.com/0/330/'])