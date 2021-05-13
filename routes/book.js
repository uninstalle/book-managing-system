var express = require('express');
var router = express.Router();
var book_controller = require('../controller/book_controller');


router.get('/list', (req, res, next) => {
    book_controller.select(req).then(r => (res.send(r)));
});

module.exports = router;