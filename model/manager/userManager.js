
var queryHandler = require('../module/sqlhandler/queryHandler');

class UserManager {
    static async select(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.select('user', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async selectAll(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.selectAll('user', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async insert(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.insert('user', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async update(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.update('user', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async delete(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.delete('user', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
};

module.exports = UserManager;