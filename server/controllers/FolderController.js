const router = require('express').Router();
const models = require('../models/index').sequelize.models;


router.get('/:id([0-9]+)', async (req, res) => {


    try {

        let result = await models.folder.findByPk(req.params.id,
            {
                include: [{
                    model: models.folder,
                    as: "children",
                    attributes: { exclude: ['parentId'] }
                },
                { model: models.photo }

                ]
            })

        res.status(200).json(result)
    } catch (err) {
        console.log(err);

    }
})
router.get('/', async (req, res) => {


    let test = await models.folder.findAll({
        where: {
            parentId: null
        }
    });
    res.status(200).json(test)
})


router.post('/new', async (req, res) => {

    console.log(req.body);
    let result = await models.folder.create(req.body)
    res.status(200).json(result);
})

router.put('/:id([0-9]+)', async (req, res) => {

    await models.folder.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Folder update succes" })
})

module.exports = router;