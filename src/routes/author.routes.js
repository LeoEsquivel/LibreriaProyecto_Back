const { Router } = require('express');
const { ParseMiddleware, CacheMiddleware } = require('../middlewares');
const { Cache_TIME} = require('../helpers');

module.exports =function ({AuthorController}){
    const router = Router();

    router.post('', AuthorController.create);
    
    router.get('/:authorId', [CacheMiddleware(Cache_TIME.QUARTER_HOUR)], AuthorController.get);
    router.get('', [ParseMiddleware, CacheMiddleware(Cache_TIME.TWO_HOURS)], AuthorController.getAll);

    router.patch('/:authorId', AuthorController.update);
    router.delete('/:authorId', AuthorController.delete);

    return router;

}