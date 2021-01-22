const express = require('express')
const ejs = require('ejs')
const layout = require('express-ejs-layouts')
const path = require('path')
const app = express()


//VARIABLESS
const PORT = process.env.PORT || 3000

//REQ RES
app.get('/' , (req, res)=>{
    res.render('home')
})
//SET TEMPLATE ENGINE
app.use(layout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

//SERVER
app.listen(PORT , ()=>{
    console.log(`Server is running on localhost:${ PORT }`)
})