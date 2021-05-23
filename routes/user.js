var express = require('express');
var router = express.Router();
var user_controller = require('../controller/user_controller');


router.get('/list', (req, res) => {
    console.log(req.query);
    user_controller.select(req.query).then(r => { res.send(r) });
});

router.post('/select', (req, res) => {
    user_controller.select(req.body).then(r => { res.send(r) });
});

router.post('/add', (req, res) => {
    user_controller.insert(req.body).then(r => { res.send(r) });
});

router.post('/del', (req, res) => {
    user_controller.delete(req.body).then(r => { res.send(r) });
});

router.post('/upd', (req, res) => {
    user_controller.update(req.body).then(r => { res.send(r) });
});

module.exports = router;