const express = require('express')
const ejs = require('ejs')
const layout = require('express-ejs-layouts')
const path = require('path')
const app = express()


//VARIABLESS
const PORT = process.env.PORT || 3000

//SET TEMPLATE ENGINE
app.use(layout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')
//ASSETS
app.use(express.static('public'))



//REQ RES
app.get('/' , (req, res)=>{
    res.render('home')
});
app.get('/about' , (req, res)=>{
    res.render('about')
});
app.get('/contact' , (req, res)=>{
    res.render('contact')
});
app.get('/cart' , (req, res)=>{
    res.render('customer/cart')
});
app.get('/registration' , (req, res)=>{
    res.render('auth/registration')
});
app.get('/login' , (req, res)=>{
    res.render('auth/login')
});
app.get('/forgotPass' , (req, res)=>{
    res.render('auth//forgotPass')
});
app.post('/forgotPass' , (req, res)=>{
    res.render('auth//forgotPass')
});
app.get('/menu' , (req, res)=>{
    res.render('customer/menu')
});


//SERVER
app.listen(PORT , ()=>{
    console.log(`Server is running on localhost:${ PORT }`)
})