
var queryHandler = require('../module/sqlhandler/queryHandler');

class BookManager {
    static async select(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.select('book', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async selectAll(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.selectAll('book', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async insert(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.insert('book', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async update(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.update('book', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
    static async delete(req, res, next) {
        let param = req.query || req.params;
        let r = await queryHandler.delete('book', param);
        let result = queryHandler.formatJson(r);
        res.send(result);
    }
};

module.exports = BookManager;