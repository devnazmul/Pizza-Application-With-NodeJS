function cartController() {
    return{

        cart(req, res){
             res.render('customer/cart')
        },

        update(req, res){
            //FOR FIRST TIME CREATING CART AND ADDING BASIC OBJECT STRUCTURE
            if (!req.session.cart) {
                req.session.cart = {
                    items:          {},
                    totalQuantity:  0,
                    totalPrice:     0
                }
            }

            let cart = req.session.cart
            
            //CHECK IF ITEM DOSE NOT EXIST IN CART
            if (!cart.items[req.body._id]) {

                cart.items[req.body._id] = {
                    item:       req.body,
                    quantity:   1
                }

                cart.totalQuantity = cart.totalQuantity + 1
                cart.totalPrice = cart.totalPrice + req.body.price

            } else{
                cart.items[req.body._id].quantity = cart.items[req.body._id].quantity + 1
                cart.totalQuantity = cart.totalQuantity + 1
                cart.totalPrice = cart.totalPrice + req.body.price
            }
            return res.json({ totalQuantity: cart.totalQuantity, pizzaName: req.body})
        }
    }
}

module.exports = cartController