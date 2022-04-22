const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use('/photo',require('./controllers/PhotoController'));
app.use('/folder',require('./controllers/FolderController'))
app.use('/role',require('./controllers/RoleController'));
app.use('/user',require('./controllers/UserController'));

app.listen(3000,()=>
    console.log("server start"));