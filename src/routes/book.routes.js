const { Router } = require('express');

module.exports = function({BookController}) {
    const router = Router();

    router.post('', BookController.create);

    router.get('/:bookId', BookController.get);
    router.get('', BookController.getAll);
    router.get('/:authorId/all', BookController.getBooksAuthor);
    router.get('/:editorialId/all', BookController.getBooksEditorial);

    router.patch('/:bookId', BookController.update);
    router.delete('/:bookId', BookController.delete);

    return router;
}
