function cartController() {
    return{
        cart(req, res){
             res.render('customer/cart')
        },
        update(req, res){


            //For first time creating cart and adding basic obj structure
            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQuantity: 0,
                    totalPrice: 0
                }
            }

            let cart = req.session.cart
            //Check if item does not exist in cart
            // if (!cart.items[req.dody._id]) {
                
            //     cart.items[req.dody._id] = {
            //         items: req.dody,
            //         quantity: 1
            //     }
            //     cart.totalQuantity = cart.totalQuantity + 1
            //     cart.totalPrice = cart.totalPrice + req.body.price
            // } else{
            //     cart.items[req.dody._id].quantity = cart.items[req.dody._id].quantity + 1
            //     cart.totalQuantity = cart.totalQuantity + 1
            //     cart.totalPrice = cart.totalPrice + req.body.price
            // }


            return res.json({totalQuantity: cart})
        }
    }
}

module.exports = cartController