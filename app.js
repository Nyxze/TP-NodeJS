const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use('/photo',require('./controllers/PhotoController'));
app.use('/folder',require('./controllers/FolderController'))

app.listen(3000,()=>
    console.log("server start"));