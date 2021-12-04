const BaseService = require('./base.service')

let _bookRepository = null

class BookService extends BaseService{
    constructor({BookRepository}){
        super(BookRepository);
        _bookRepository = BookRepository;
    }
//getBooksEditorial
    async getBooksAuthor(author){
        if(!author){
            const error = new Error();
            error.status = 400;
            error.message = "AuthorId debe ser enviado";
            throw error;
        }
        return await _bookRepository.getBooksAuthor(author);
    }

    async getBooksEditorial(editorial){
        if(!editorial){
            const error = new Error();
            error.status = 400;
            error.message = "EditorialId debe ser enviado";
            throw error;
        }
        return await _bookRepository.getBooksEditorial(editorial);
    }


}

module.exports = BookService;