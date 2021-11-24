const BaseRepository = require('./base.repository')

let _book = null;

class BookRepository extends BaseRepository{

    constructor({Book}){
        super(Book);
        _book = Book;
    }

    async getAuthorBooks(author){
        return await _book.find({author});
    }

    async getEditorialBooks(editorial){
        return await _book.find({editorial});
    }
}

module.exports = BookRepository;