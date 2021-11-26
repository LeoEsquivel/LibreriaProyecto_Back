let _bookService = null;

class BookController{
    constructor({BookService}){
        _bookService = BookService;
    }

    async create(request, response){
        const { body } = request;
        const newBook = await _bookService.create(body);
        return response.status(201).send(newBook);
    }

    async get(request, response){
        const {bookId} = request.params;
        const book = await _bookService.get(bookId);
        return response.send(book);
    }

    async getAll(request, response){
        const books = await _bookService.getAll();
        return response.send(books);
    }

    async update(request, response){
        const { body } = request;
        const { bookId } = request.params;
        const updatedBook = await _bookService.update(bookId, body);
        return request.send(updatedBook);
        
    }

    async delete(request, response){
        const { bookId } = request.params;
        const deletedBook = await _bookService.delete(bookId);
        return response.send(deletedBook);
    }

    async getBooksAuthor(request, response){
        const { authorId } = request.params;
        const books = await _bookService.getBooksAuthor(authorId);
        return response.send(books);
    }

    async getBooksEditorial(request, response){
        const { editorialId } = request.params;
        const books = await _bookService.getBooksEditorial(editorialId);
        return response.send(books);
    }
}

module.exports = BookController;