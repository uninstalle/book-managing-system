
var query_handler = require('../model/query_handler');



class book_controller {


    // received param:
    // 
    // target param:
    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    // param.orderby: ORDER BY object collection, object { field, order = ASC/DESC }
    // param.kv: field-value pair collection

    static async select(param) {
        let r = await query_handler.select('book', param);
        return r;
    }

    static async insert(param) {
        let r = await query_handler.insert('book', param);
        return r;
    }
    static async update(param) {
        let r = await query_handler.update('book', param);
        return r;
    }
    static async delete(param) {
        let r = await query_handler.delete('book', param);
        return r;
    }
};

module.exports = book_controller;