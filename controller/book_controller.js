
var query_handler = require('../model/query_handler');



class book_controller {


    // received param:
    // 
    // target param:
    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    // param.orderby: ORDER BY object collection, object { field, order = ASC/DESC }
    // param.kv: field-value pair collection

    static async select(param) {

        // converting param
        let p = {
            where: new Array(),
            orderby: new Array()
        };


        let r = await query_handler.select('book', p);

        // converting result
        let result = query_handler.formatJson(r);
        return result;
    }

    static async insert(param) {
        let r = await query_handler.insert('book', param);
        let result = query_handler.formatJson(r);
        return result;
    }
    static async update(param) {
        let r = await query_handler.update('book', param);
        let result = query_handler.formatJson(r);
        return result;
    }
    static async delete(param) {
        let r = await query_handler.delete('book', param);
        let result = query_handler.formatJson(r);
        return result;
    }
};

module.exports = book_controller;