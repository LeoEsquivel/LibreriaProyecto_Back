const BaseService = require('./base.service');

let _editorialRepository = null;

class EditorialService extends BaseService {

    constructor({EditorialRepository}){
        super(EditorialRepository);
        _editorialRepository = EditorialRepository;
    }
}

module.exports = EditorialService;