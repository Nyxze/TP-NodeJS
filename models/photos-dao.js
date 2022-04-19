const DAO = require('./generic-DAO');

const photoDAO = new DAO('photos');

photoDAO.findOneByIdWithFolder = async id => {

    const sql = `SELECT * FROM photos as p
    JOIN folders as f on f.id = p.folder_id WHERE p.id = ?`

    const results = await photoDAO.query(sql,[id]);

    return results[0][0];

};

module.exports = photoDAO;