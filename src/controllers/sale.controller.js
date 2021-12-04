let _saleService = null;

class SaleController{

    constructor({SaleService}){
        _saleService = SaleService;
    }

    async create(request, response){
        const { body } = request;
        const newSale = await _saleService.create(body);
        return response.status(201).send(newSale);
    }

    async get(request, response){
        const { saleId } = request.params;
        const sale = await _saleService.get(saleId);
        return response.send(sale);
    }

    async getAll(request, response){
        const {pageSize, pageNum} = request.query;
        const sales = await _saleService.getAll(pageSize, pageNum);
        return response.send(sales);
    }

    async update(request, response){
        const {body} = request;
        const {saleId} = request.params;
        const updatedSale = await _saleService.update(saleId);
        return request.send(updatedSale);
    }

    async delete(request, response){
        const { saleId } = response.params;
        const deletedSale = await _saleService.delete(saleId);
        return response.send(deletedSale);
    }

    async getUserSales(request, response){
        const { userId } = request.params;
        const sales = await _saleService.getUserSales(userId);
        return response.send(sales)
    }
    
}

module.exports = SaleController;