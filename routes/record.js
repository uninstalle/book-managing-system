var express = require('express');
var router = express.Router();
var record_controller = require('../controller/record_controller');


router.get('/list', (req, res) => {
    record_controller.select({}).then(r => { res.send(r) });
});

router.post('/select', (req, res) => {
    record_controller.select(req.body).then(r => { res.send(r) });
});

router.post('/add', (req, res) => {
    record_controller.insert(req.body).then(r => { res.send(r) });
});

router.post('/del', (req, res) => {
    record_controller.delete(req.body).then(r => { res.send(r) });
});

router.post('/upd', (req, res) => {
    record_controller.update(req.body).then(r => { res.send(r) });
});

module.exports = router;