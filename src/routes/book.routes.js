const { Router } = require('express');
const express = require('express');
ex = express();
ex.use(express.static(__dirname + "/public"));
const { ParseMiddleware, CacheMiddleware, ImgUpload} = require('../middlewares');
const { Cache_TIME} = require('../helpers'); 

module.exports = function({BookController}) {
    const router = Router();

    router.post('', BookController.create);

    router.get('/:bookId', BookController.get);
    router.get('', [ParseMiddleware, CacheMiddleware(Cache_TIME.QUARTER_HOUR)], BookController.getAll);
    router.get('/:authorId/auall', [ParseMiddleware, CacheMiddleware(Cache_TIME.ONE_HOUR)], BookController.getBooksAuthor);
    router.get('/:editorialId/edall', [ParseMiddleware, CacheMiddleware(Cache_TIME.ONE_HOUR)], BookController.getBooksEditorial);

    router.patch('/:bookId', BookController.update);
    router.delete('/:bookId', BookController.delete);

    return router;
}
