const Menu = require('../../models/menu')

function menuController() {
    return{
        async menu(req, res){
                const pizzas = await Menu.find()
                res.render( 'menu', {pizzas: pizzas} )
            }
    }
}

module.exports = menuController