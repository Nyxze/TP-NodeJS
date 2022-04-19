const router = require('express').Router();
const folderDB = require('../models/index').sequelize.models.Folder;


router.get('/', async (req, res)=>{

    
    let test = await folderDB.findAll();
    console.log(test)
    res.status(200).json(test)
})

router.post('/new', async (req, res)=>{

    let result = await folderDB.create(req.body)
    res.status(200).json(result);
})

module.exports = router;