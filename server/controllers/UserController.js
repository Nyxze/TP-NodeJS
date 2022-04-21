const router = require('express').Router();
// const userDB = require('../models/index').sequelize.models.user;
// const roleDB = require('../models/index').sequelize.models.role;
const models = require('../models/index').sequelize.models


router.get('/', async (req, res) => {


    let result = await models.user.findAll({
        attributes: { exclude: ['roleId'] }
    });
    res.status(200).json(result);
})

router.post('/new', async (req, res) => {

    console.log(req.body)
    if(req.body.firstName.length > 0 || req.body.lastName.length > 0){
        let result = await models.user.create(req.body)
        res.status(200).json(result);

    }else{
        res.status(500).json({ message:"Erors"})
    }
})

router.put('/:id([0-9]+)', async (req, res) => {

    await models.user.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Update succes" });
})

router.delete('/:id([0-9]+)', async (req, res) => {
    await models.user.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Delete succes" })
})


module.exports = router;