var express = require('express');
var router = express.Router();
var book_controller = require('../controller/book_controller');


router.get('/list', (req, res) => {
    book_controller.select({}).then(r => { res.send(r) });
});

router.post('/select', (req, res) => {
    book_controller.select(req.body).then(r => { res.send(r) });
});

router.post('/add', (req, res) => {
    book_controller.insert(req.body).then(r => { res.send(r) });
});

router.post('/del', (req, res) => {
    book_controller.delete(req.body).then(r => { res.send(r) });
});

router.post('/upd', (req, res) => {
    book_controller.update(req.body).then(r => { res.send(r) });
});

module.exports = router;