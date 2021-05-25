var express = require('express');
const db_info = require('../config/db');
var router = express.Router();

router.get('/', (req, res) => {
    if (req.session.username && req.session.username === db_info.database_info.admin_username)
        res.json({ ret_code: 0 });
    else
        res.json({ ret_code: 1 });;
});

module.exports = router;
