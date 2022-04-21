const router = require('express').Router();
const models = require('../models/index').sequelize.models;


router.get('/:id([0-9]+)', async (req, res) => {


    let test = await models.folder.findByPk(req.params.id,
        {
            attributes:{exclude:['parentId']},
            include: [{
                model: models.folder,
                as: "children",
                attributes: { exclude: ['parentId'] }
            },
            {
                model: models.folder,
                as: "parent",

            }

            ]
        })
    res.status(200).json(test)
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