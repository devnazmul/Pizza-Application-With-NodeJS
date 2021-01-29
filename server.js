require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const layout = require('express-ejs-layouts')
const path = require('path')
const app = express()
const session = require('express-session')
const flash = require('express-flash')


const MongodbStore = require('connect-mongo')(session)
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


//SESSION STORE
const mongoStore = new MongodbStore({
    mongooseConnection: connection,
    collection: 'session'
})

//SESSION CONFIG
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: (1000 * 60 * 60 * 24)} // maxAge is 24h
}))

//USE FLASH
app.use(flash())
//VARIABLESS
const PORT = process.env.PORT || 3300


//SET TEMPLATE ENGINE
app.use(layout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')



//ASSETS
app.use(express.static('public'))

// enable json support
app.use(express.json())

//set global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    next()
})
//CONNECT TO ROUTES
require('./routes/web.js')(app);


//SERVER
app.listen(PORT , ()=>{
    console.log(`Server is running on localhost:${ PORT }`)
})