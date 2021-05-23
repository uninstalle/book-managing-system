var express = require('express');
var crypto = require('crypto');
var router = express.Router();

router.post('/', (req, res) => {
    let username = req.username;
    let password = req.password;
    let p = crypto.createHash('md5').update(password).digest('hex');
    
});

module.exports = router;
