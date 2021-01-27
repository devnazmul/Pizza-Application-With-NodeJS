const homeController = require('../app/http/controllers/homeController')
const aboutController = require('../app/http/controllers/aboutController')
const contactController = require('../app/http/controllers/contactController')
const cartController = require('../app/http/controllers/customer/cartController')
const authController = require('../app/http/controllers/auth/authController')
const menuController = require('../app/http/controllers/customer/menuController')


module.exports = function webRoutes(app) {
    //HOME ROUTE
    app.get('/' , homeController().index);
    //ABOUT ROUTE
    app.get('/about' , aboutController().about);
    //CONTACT ROUTE
    app.get('/contact' , contactController().contact);
    //CART ROUTE
    app.get('/cart' , cartController().cart);
    //MENU ROUTE
    app.get('/menu' , menuController().menu);
    //REGISTRATION ROUTE
    app.get('/registration' , authController().registration);
    //LOHIN ROUTE
    app.get('/login' , authController().login);
    //FORGOT PASS ROUTE
    app.get('/forgotPass' , authController().forgotPass);
    app.post('/forgotPass' , authController().forgotPass);
}