const router = require('express').Router();
// const userDB = require('../models/index').sequelize.models.user;
// const roleDB = require('../models/index').sequelize.models.role;
const models = require('../models/index').sequelize.models


router.get('/', async (req, res) => {


    let result = await models.user.findAll({
        attributes: { exclude: ['roleId'] }
    });
    console.log(result);
    res.status(200).json(result);
})

router.post('/new', async (req, res) => {


    let result = await models.user.create(req.body)
    res.status(200).json(result);
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