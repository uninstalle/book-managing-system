
var query_handler = require('../model/query_handler');



class libcard_controller {


    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    // param.orderby: ORDER BY object collection, object { field, order = ASC/DESC }
    // param.kv: field-value pair collection

    static async select(param) {
        let r = await query_handler.select('lib_card', param);
        let result = query_handler.formatJson(r);
        return result;
    }

    static async insert(param) {
        let r = await query_handler.insert('lib_card', param);
        let result = query_handler.formatJson(r);
        return result;
    }
    static async update(param) {
        let r = await query_handler.update('lib_card', param);
        let result = query_handler.formatJson(r);
        return result;
    }
    static async delete(param) {
        let r = await query_handler.delete('lib_card', param);
        let result = query_handler.formatJson(r);
        return result;
    }
};

module.exports = libcard_controller;