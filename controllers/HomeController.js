const router = require('express').Router();


router.get('/home', (req, res) => {
    console.log("test");
    res.render('home/home'
    
    );
});

module.exports = router