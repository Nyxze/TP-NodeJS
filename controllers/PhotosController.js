const router = require('express').Router();
const photoDAO = require('../models/photos-dao');
const foldersDAO = require('../models/folders-DAO');

const photoUploadManager = require('../middlewares/upload-photo');



router.get('/list', async (req, res) => {
    let photo = await photoDAO.findAll();
    console.log(photo)
    res.render('photo/list', {
        photos: await photoDAO.findAll()
    })
})


router.get('/upload',  (req, res)=>{

    res.render('photo/upload-form');
})
router.post('/upload', [photoUploadManager], async (req, res, next) => {

    const photo = {
        photo_name: req.uploadedFileName,
        photo_legend: req.body.legend
    }
    if (req.file) {

        try {
            await photoDAO.insert(photo);
            req.flash('infos', "Image uploader")
            return res.redirect('/photo/list');


        } catch (err) {
            next(err)
        }

    } else {
        res.render('photo/upload-form');
    }

    // let insert = await photoDAO.insert(photo);

});

router.get('/:id([0-9]+)', async (req, res) => {

let result = await photoDAO.findOneById(req.params.id);
let folders = await foldersDAO.findAll();


console.log(result);
res.render('photo/edit',{result:result, folders:folders})

})

module.exports = router