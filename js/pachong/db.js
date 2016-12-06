var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booklib');

var Book = mongoose.model('Book', {
    title: String,
    author: String,
    update_time: String,
    latest_chapter: String,
    titllatest_chaptere: String,
    intro: String,
    chapters: Array,
 });


module.exports = Book;