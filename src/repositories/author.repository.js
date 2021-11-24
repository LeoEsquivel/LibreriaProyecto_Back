const BaseRepository = require('./base.repository');

let _author = null;

class AuthorRepository extends BaseRepository{
    constructor({Author}) {
        super(Author);
        _author = Author;
    }
}

module.exports = AuthorRepository;