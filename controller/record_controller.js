
var query_handler = require('../model/query_handler');



class record_controller {


    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    // param.orderby: ORDER BY object collection, object { field, order = ASC/DESC }
    // param.kv: field-value pair collection

    static async select(param) {
        let r = await query_handler.select('book_record', param);
        let result = query_handler.formatJson(r);
        return result;
    }

    static async insert(param) {
        let r = await query_handler.insert('book_record', param);
        let result = query_handler.formatJson(r);
        return result;
    }
    static async update(param) {
        let r = await query_handler.update('book_record', param);
        let result = query_handler.formatJson(r);
        return result;
    }
    static async delete(param) {
        let r = await query_handler.delete('book_record', param);
        let result = query_handler.formatJson(r);
        return result;
    }
};

module.exports = record_controller;