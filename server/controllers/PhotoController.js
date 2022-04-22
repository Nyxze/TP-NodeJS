const router = require('express').Router();
const photoDB = require('../models/index').sequelize.models.photo;
const photoUploader = require('../middlewares/upload-photo');

router.get('/', async (req, res) => {

    let result = await photoDB.findAll();
    res.status(200).json(result);
})

router.post('/upload', photoUploader, async (req, res) => {
    try {
        req.body.uploadedPhotoName = req.uploadedPhotoName;
        let result = await photoDB.create(req.body)
        res.status(200).json(result);
    } catch (err) {
        console.log(err)
    }

})

router.put('/:id([0-9]+)', async (req, res) => {

    await photoDB.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Update succes" });
})

router.delete('/:id([0-9]+)', async (req, res) => {
    await photoDB.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Delete succes" })
})


module.exports = router;