const { Router } = require('express');

module.exports = function({EditorialController}) {
    const router = Router();

    router.post('', EditorialController.create);

    router.get('/:editorialId', EditorialController.get);
    router.get('', EditorialController.getAll);

    router.patch('/:editorialId', EditorialController.update);
    router.delete('/:editorialId', EditorialController.delete);

    return router;
}