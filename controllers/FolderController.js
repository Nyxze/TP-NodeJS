const router = require('express').Router();
const foldersDAO = require('../models/folders-DAO');

router.get('/list', async (req, res) => {
    let folders = await foldersDAO.findAll();
    res.render('folder/list', {
        folders: folders
    })
})


router.get('/new', (req, res) => {
    res.render('folder/new');
})
router.post('/new', async (req, res, next) => {


    if (await validateFolder(req)) {

        const folder = {
            folder_name: req.body.folder_name,
            parent_id: req.body.parent_id
        }


        try {
            await foldersDAO.insert(folder);
            req.flash('infos', "Folder created")
            return res.redirect('/folder/list');



        } catch (err) {
            next(err)
        }
    } else {
        res.status(503).render('folder/new')
    }

}


);

router.get('/:id([0-9]+)', async (req, res) => {

    res.render('folder/edit')

})

async function validateFolder(req) {
    let folderName = req.body.folder_name;
    if (folderName.length < 0) {
        await req.flash('infos', "Votre dossier doit comporter un nom")
        return false;
    }
    if (await foldersDAO.findOneBy('folder_name', folderName)) {
        await req.flash('infos', "Ce dossier existe déjà")
        return false;
    }

    return true;


}

module.exports = router