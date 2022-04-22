const multer = require('multer');

const getUniqueFileName = (file) => {
    const fileName = file.originalname.split(' ').join('-');
    const fileId = new Date().getTime();
    return fileId + fileName;
}

const uploadStorage = multer.diskStorage({
    destination: './public/images',
    filename: (req, file, callback) => {
        // console.log(req);
        if (file) {
            const fileName = getUniqueFileName(file);

            req.uploadedPhotoName = fileName;
            callback(null, fileName);
        } else {
            callback(new Error('Fichier inexistant'));
        }
    }
});

const fileTypeFilter = (req, file, callback) => {
    if ((file.mimetype === 'image/jpeg') || (file.mimetype === 'image/png')) {
        return callback(null, true);
    }

    callback(new Error('Type de fichier non autorisé'), false);
}

const upload = multer({
    storage: uploadStorage,
    fileFilter: fileTypeFilter
});

module.exports = upload.single('photo');