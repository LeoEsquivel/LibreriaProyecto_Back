let _cartService = null;

class CartController{
    constructor(CartService){
        _cartService = CartService;
    }

    async get(request, response){
        const {cartId} = request.params;
        const cart = await _cartService.get(cartId);
        return response.send(cart);
    }

    async create(request, response){
        const { body } = request;
        const newCart = await _cartService.create(body);
        return response.status(201).send(newCart);
    }

    async update(request, response){
        const { body } = request;
        const { cartId } = request.params;
        const updatedCart = await _cartService.update(cartId, body);
        return request.send(updatedCart);
        
    }

    async delete(request, response){
        const { cartId } = request.params;
        const deletedCart = await _cartService.delete(cartId);
        return response.send(deletedCart);
    }

    async getUserCart(request, response){
        const { userId } = request.params;
        const cart = await _cartService.getUserCart(userId)
        return response.send(cart)
    }
}

module.exports = CartController;