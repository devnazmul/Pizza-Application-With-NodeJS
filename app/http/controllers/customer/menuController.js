function menuController() {
    return{
        menu(req, res){
             res.render('customer/menu')
        },
    }
}

module.exports = menuController