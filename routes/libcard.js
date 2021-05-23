var express = require('express');
var router = express.Router();
var libcard_controller = require('../controller/libcard_controller');


router.get('/list', (req, res) => {
    console.log(req.query);
    libcard_controller.select(req.query).then(r => { res.send(r) });
});

router.post('/select', (req, res) => {
    libcard_controller.select(req.body).then(r => { res.send(r) });
});

router.post('/add', (req, res) => {
    libcard_controller.insert(req.body).then(r => { res.send(r) });
});

router.post('/del', (req, res) => {
    libcard_controller.delete(req.body).then(r => { res.send(r) });
});

router.post('/upd', (req, res) => {
    libcard_controller.update(req.body).then(r => { res.send(r) });
});

module.exports = router;