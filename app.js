const express = require('express');
const session = require('express-session');

const flash = require('express-flash-messages');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: '123',
    name: 'appSession',
    saveUninitialized: true,
    resave: true,
    //store: new FileStorage 
}));
app.use(express.static('public'))
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use('/photos', express.static('./uploads'));
app.use(flash());
app.set('views','./views');
app.set('view engine','pug');
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/photo',require('./controllers/PhotosController'));
app.use('/folder',require('./controllers/FolderController'))
app.use(require('./controllers/HomeController'));

app.listen(3000,()=>
    console.log("server start"));