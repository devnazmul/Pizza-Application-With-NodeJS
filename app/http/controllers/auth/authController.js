const bcrypt = require('bcrypt')

const User = require('../../../models/user')



function authController() {
    return{
        registration(req, res){
            res.render('auth/registration')
        },
        async postRegistration(req, res){
            const {fName, lName, userName, email, password} = req.body
            // USER VALIDATION
            if (!fName || !lName || !userName || !email || !password) {
                req.flash('error', 'All fields are requirred.')
                req.flash('fName', fName)
                req.flash('lName', lName)
                req.flash('userName', userName)
                req.flash('email', email)
                return res.redirect('/registration')
            }
            // CHECK IF EMAIL IS ALREADY EXISTS
            User.exists({ email:email }, (err, result) => {
                if(result) {
                    req.flash('error', 'Email is already taken.')
                    req.flash('fName', fName)
                    req.flash('lName', lName)
                    req.flash('userName', userName)
                    req.flash('email', email)
                    return res.redirect('/registration')
                }
            })

            // HASED PASSWORD
            const hasedPass = await bcrypt.hash(password, 10)
            // CREATE USER
            const user = new User({
                
                fName: fName,
                lName: lName,
                userName: userName,
                email: email,
                password: hasedPass

            })
            
            user.save().then((user) => {
                //LOGIN FUNCTIONALITY
                return res.redirect('/')
            }).catch(err => {
                req.flash('error', 'Something went wrrong !')
                return res.redirect('/registration')
            })
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