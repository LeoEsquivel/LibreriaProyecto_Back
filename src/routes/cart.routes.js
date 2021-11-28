const { Router } = require('express');
const { ParseMiddleware } = require('../middlewares')

module.exports = function({CartController}){
    const router = Router();

    router.post('', CartController.create);

    router.get('/:cartId', CartController.get);
    router.get('/:userId/cartAll', [ParseMiddleware], CartController.getUserCart);

    router.patch('/:cartId', CartController.update);
    router.delete('/:cartId', CartController.delete);

    return router;

}