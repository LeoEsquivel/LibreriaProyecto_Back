const { Router } = require('express');
const {ParseMiddleware, CacheMiddleware} = require('../middlewares');
const { Cache_TIME} = require('../helpers');


module.exports = function({SaleController}){
    const router = Router();

    router.post('', SaleController.create);

    router.get('/:saleId', [CacheMiddleware(Cache_TIME.QUARTER_HOUR)], SaleController.get);
    router.get('', [ParseMiddleware, CacheMiddleware(Cache_TIME.TWO_HOURS)], SaleController.getAll);
    router.get('/:userId/all', [ParseMiddleware, CacheMiddleware(Cache_TIME.TWO_HOURS)], SaleController.getUserSales);

    router.patch('/:saleId', SaleController.update);
    router.delete('/:saleId', SaleController.delete);

    return router;
}