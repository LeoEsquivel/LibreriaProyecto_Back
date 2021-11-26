const { Router } = require('express');

module.exports = function({SaleController}){
    const router = Router();

    router.post('', SaleController.create);

    router.get('/:saleId', SaleController.get);
    router.get('', SaleController.getAll);
    router.get('/:userId/all', SaleController.getUserSales);

    router.patch('/:saleId', SaleController.update);
    router.delete('/:saleId', SaleController.delete);

    return router;
}