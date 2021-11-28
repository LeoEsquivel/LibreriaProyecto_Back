const { Router } = require('express');
const { ParseMiddleware, CacheMiddleware} = require('../middlewares');
const { Cache_TIME} = require('../helpers');

module.exports = function({BookController}) {
    const router = Router();

    router.post('', BookController.create);

    router.get('/:bookId', BookController.get);
    router.get('', [ParseMiddleware, CacheMiddleware(Cache_TIME.QUARTER_HOUR)], BookController.getAll);
    router.get('/:authorId/all', [ParseMiddleware, CacheMiddleware(Cache_TIME.ONE_HOUR)], BookController.getBooksAuthor);
    router.get('/:editorialId/all', [ParseMiddleware, CacheMiddleware(Cache_TIME.ONE_HOUR)], BookController.getBooksEditorial);

    router.patch('/:bookId', BookController.update);
    router.delete('/:bookId', BookController.delete);

    return router;
}
