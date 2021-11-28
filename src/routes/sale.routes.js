const { Router } = require('express');
const {ParseMiddleware} = require('../middlewares')

module.exports = function({SaleController}){
    const router = Router();

    router.post('', SaleController.create);

    router.get('/:saleId', SaleController.get);
    router.get('', [ParseMiddleware], SaleController.getAll);
    router.get('/:userId/all', [ParseMiddleware], SaleController.getUserSales);

    router.patch('/:saleId', SaleController.update);
    router.delete('/:saleId', SaleController.delete);

    return router;
}