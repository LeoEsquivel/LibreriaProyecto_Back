const { Router } = require('express');

module.exports = function({CartController}){
    const router = Router();

    router.post('', CartController.create);

    router.get('/:cartId', CartController.get);
    router.get('/:userId/cartAll', CartController.getUserCart);

    router.patch('/:cartId', CartController.update);
    router.delete('/:cartId', CartController.delete);

    return router;

}