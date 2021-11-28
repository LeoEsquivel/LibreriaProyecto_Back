const { Router } = require('express');
const {ParseMiddleware} = require('../middlewares')


module.exports = function({EditorialController}) {
    const router = Router();

    router.post('', EditorialController.create);

    router.get('/:editorialId', EditorialController.get);
    router.get('', [ParseMiddleware], EditorialController.getAll);

    router.patch('/:editorialId', EditorialController.update);
    router.delete('/:editorialId', EditorialController.delete);

    return router;
}