
var query_handler = require('../model/query_handler');



class user_controller {


    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    // param.orderby: ORDER BY object collection, object { field, order = ASC/DESC }
    // param.kv: field-value pair collection

    static async select(param) {
        let r = await query_handler.select('card_user', param);
        return r;
    }

    static async insert(param) {
        let r = await query_handler.insert('card_user', param);
        return r;
    }
    static async update(param) {
        let r = await query_handler.update('card_user', param);
        return r;
    }
    static async delete(param) {
        let r = await query_handler.delete('card_user', param);
        return r;
    }
};

module.exports = user_controller;