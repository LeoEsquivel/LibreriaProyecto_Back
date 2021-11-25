const BaseService = require('./base.service');

let _authorRepository = null;

class AuthorService extends BaseService{

    constructor({AuthorRepository}){
        super(AuthorRepository);
        _authorRepository = AuthorRepository;
    }

}

module.exports = AuthorService;