const { Router } = require('express');

module.exports =function ({AuthorController}){
    const router = Router();

    router.post('', AuthorController.create);
    
    router.get('/:authorId', AuthorController.get);
    router.get('', AuthorController.getAll);

    router.patch('/:authorId', AuthorController.update);
    router.delete('/:authorId', AuthorController.delete);

    return router;

}