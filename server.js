const express = require('express')
const ejs = require('ejs')
const layout = require('express-ejs-layouts')
const path = require('path')
const app = express()
//DB
const mongoose = require('mongoose')

// DB CONNECTION
const dbUrl = 'mongodb://localhost:27017/pizza';
mongoose.connect(dbUrl, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected Succesfully!');
}).catch( 'err', () =>{
    console.log('Connection Failed!');
});


//VARIABLESS
const PORT = process.env.PORT || 3000

//SET TEMPLATE ENGINE
app.use(layout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')
//ASSETS
app.use(express.static('public'))

//CONNECT TO ROUTES
require('./routes/web.js')(app);


//SERVER
app.listen(PORT , ()=>{
    console.log(`Server is running on localhost:${ PORT }`)
})