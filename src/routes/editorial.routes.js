const { Router } = require('express');
const {ParseMiddleware, CacheMiddleware} = require('../middlewares');
const { Cache_TIME} = require('../helpers');


module.exports = function({EditorialController}) {
    const router = Router();

    router.post('', EditorialController.create);

    router.get('/:editorialId', [CacheMiddleware(Cache_TIME.QUARTER_HOUR)], EditorialController.get);
    router.get('', [ParseMiddleware, CacheMiddleware(Cache_TIME.TWO_HOURS)], EditorialController.getAll);

    router.patch('/:editorialId', EditorialController.update);
    router.delete('/:editorialId', EditorialController.delete);

    return router;
}