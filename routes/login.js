var express = require('express');
var sql_handler = require('../model/db_connect');
var router = express.Router();

router.post('/', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let checkRes = sql_handler.checkAdmin(username, password);
    if (checkRes) {
        sql_handler.changeUserToAdmin();
        req.session.username = req.body.username;
        res.json({ ret_code: 0, ret_msg: 'login success' });
    }
    else {
        res.json({ ret_code: 1, ret_msg: 'login failed' });
    }
});

module.exports = router;
