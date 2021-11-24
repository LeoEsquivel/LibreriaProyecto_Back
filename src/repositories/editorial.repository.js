const BaseRepository = require('./base.repository');

let _editorial = null;

class EditorialRepository extends BaseRepository {

    constructor( {Editorial} ){
        super(Editorial);
        _editorial = Editorial;
    }
}

module.exports = EditorialRepository;