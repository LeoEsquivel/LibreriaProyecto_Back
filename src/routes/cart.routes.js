const { Router } = require('express');
const { ParseMiddleware, CacheMiddleware} = require('../middlewares');
const { Cache_TIME} = require('../helpers');

module.exports = function({CartController}){
    const router = Router();

    router.post('', CartController.create);

    router.get('/:cartId', [CacheMiddleware(Cache_TIME.QUARTER_HOUR)], CartController.get);
    router.get('/:userId/cartAll', [ParseMiddleware, CacheMiddleware(Cache_TIME.TWO_HOURS)], CartController.getUserCart);

    router.patch('/:cartId', CartController.update);
    router.delete('/:cartId', CartController.delete);

    return router;

}