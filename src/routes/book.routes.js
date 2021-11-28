const { Router } = require('express');
const { ParseMiddleware } = require('../middlewares');

module.exports = function({BookController}) {
    const router = Router();

    router.post('', BookController.create);

    router.get('/:bookId', BookController.get);
    router.get('', [ParseMiddleware], BookController.getAll);
    router.get('/:authorId/all', [ParseMiddleware], BookController.getBooksAuthor);
    router.get('/:editorialId/all', [ParseMiddleware], BookController.getBooksEditorial);

    router.patch('/:bookId', BookController.update);
    router.delete('/:bookId', BookController.delete);

    return router;
}
