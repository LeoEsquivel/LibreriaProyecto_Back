const { Router } = require('express');
const { AuthMiddleware, ParseMiddleware, CacheMiddleware } = require('../middlewares');
const { Cache_TIME} = require('../helpers')

module.exports = function({UserController}){
    const router = Router();

    router.get('/:userId', [CacheMiddleware(Cache_TIME.QUARTER_HOUR)], UserController.get);
    router.get('', [AuthMiddleware, ParseMiddleware, CacheMiddleware(Cache_TIME.ONE_HOUR)], UserController.getAll);
    
    router.patch('/:userId', UserController.update);
    router.delete('/:userId', UserController.delete);

    return router;
}