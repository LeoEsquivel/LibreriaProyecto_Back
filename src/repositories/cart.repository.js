const BaseRepository = require('./base.repository');

let _cart = null;

class CartRespository extends BaseRepository{
    constructor({Cart}){
        super(Cart);
        _cart = Cart;
    }

    async getUserCart(user){
        return await _cart.find({user});
    }
}

module.exports = CartRespository;