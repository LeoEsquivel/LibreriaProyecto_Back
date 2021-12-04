const BaseService = require('./base.service');

let _saleRespository = null;

class SaleService extends BaseService{

    constructor({SaleRepository}){
        super(SaleRepository);
        _saleRespository = SaleRepository;
    }

    async getUserSales(user){
        if(!user){
            const error = new Error();
            error.status = 400;
            error.message = "UserId debe ser enviado";
            throw error;
        }
        return await _saleRespository.getUserSales(user);
    }

    async addBookToSale(saleId){
        
    }
}

module.exports = SaleService;