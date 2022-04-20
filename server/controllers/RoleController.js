const router = require('express').Router();
const roleDB = require('../models/index').sequelize.models.role;

router.get('/', async (req, res) => {

    let result = await roleDB.findAll();
    res.status(200).json(result);
})

router.post('/new', async (req, res) => {

    let result = await roleDB.create(req.body)
    res.status(200).json(result);
})

router.put('/:id([0-9]+)', async (req, res) => {

    await roleDB.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Update succes" });
})

router.delete('/:id([0-9]+)', async (req, res) => {
    await roleDB.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Delete succes" })
})


module.exports = router;