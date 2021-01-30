const homeController = require('../app/http/controllers/homeController')
const cartController = require('../app/http/controllers/customer/cartController')
const authController = require('../app/http/controllers/auth/authController')
const menuController = require('../app/http/controllers/menuController')


module.exports = function webRoutes(app) {
    //HOME ROUTE
    app.get('/' , homeController().index);
    //CART ROUTE
    app.get('/cart' , cartController().cart);
    app.post('/update-cart', cartController().update)

    //MENU ROUTE
    app.get('/menu' , menuController().menu);
    //REGISTRATION ROUTE
    app.get('/registration' , authController().registration);
    app.post('/registration', authController().postRegistration);
    //LOHIN ROUTE
    app.get('/login' , authController().login);
    //FORGOT PASS ROUTE
    app.get('/forgotPass' , authController().forgotPass);
    app.post('/forgotPass' , authController().forgotPass);
}