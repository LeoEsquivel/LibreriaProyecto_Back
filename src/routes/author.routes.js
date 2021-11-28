const { Router } = require('express');
const { ParseMiddleware } = require('../middlewares')

module.exports =function ({AuthorController}){
    const router = Router();

    router.post('', AuthorController.create);
    
    router.get('/:authorId', AuthorController.get);
    router.get('', [ParseMiddleware], AuthorController.getAll);

    router.patch('/:authorId', AuthorController.update);
    router.delete('/:authorId', AuthorController.delete);

    return router;

}