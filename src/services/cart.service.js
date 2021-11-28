const BaseService = require('./base.service');

let _cartRepository = null;

class CartService extends BaseService{

    constructor({CartRepository}){
        super(CartRepository);
        _cartRepository = CartRepository;
    }


    async getUserCart(user){
        if(!user){
            const error = new Error();
            error.status = 400;
            error.message = "User debe ser enviado";
            throw error;
        }
        return await _cartRepository.getUserCart(user);
    }
}

module.exports = CartService;