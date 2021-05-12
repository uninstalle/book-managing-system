
var queryHandler = require('../module/sqlhandler/queryHandler');

class LibcardManager {
    static async select(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.select('libcard', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async selectAll(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.selectAll('libcard', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async insert(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.insert('libcard', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async update(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.update('libcard', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async delete(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.delete('libcard', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
};

module.exports = LibcardManager;