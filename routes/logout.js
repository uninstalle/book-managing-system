var express = require('express');
var sql_handler = require('../model/db_connect');
var router = express.Router();

router.get('/', (req, res) => {
    req.session.destroy();
    sql_handler.changeUserToGuest();
    res.json({ ret_code: 0, ret_msg: 'logout success' });
});

module.exports = router;
