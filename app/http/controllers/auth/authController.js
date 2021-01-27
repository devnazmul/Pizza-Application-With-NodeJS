function authController() {
    return{
        registration(req, res){
            res.render('auth/registration')
        },
        login(req, res){
            res.render('auth/login')
        },
        forgotPass(req, res){
            res.render('auth/forgotPass')
        },
    }
}

module.exports = authController