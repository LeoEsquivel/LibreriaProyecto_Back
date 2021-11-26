const BaseRepository = require('./base.repository');

let _sale = null;

class SaleRepository extends BaseRepository{
    constructor({Sale}){
        super(Sale)
        _sale = Sale;
    }

    async getUserSales(user){
        return await _sale.find({user});
    }
}

module.exports = SaleRepository;