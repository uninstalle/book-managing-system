
var sql_handler = require('./db_connect');


class query_handler {

    // SELECT * FROM <TABLE> [WHERE <condition> AND ...] [ORDER BY <field> ASC/DESC,...]
    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    // param.orderby: ORDER BY object collection, object { field, order = ASC/DESC }
    static async select(table, param) {

        let str = `SELECT * FROM ${table} `;

        // 拼接WHERE部分
        if (param.where && param.where.length) {
            str += " WHERE ";
            str += param.where.join(" AND ");
        }

        // 拼接ORDER BY部分
        if (param.orderby && param.orderby.length) {
            str += " ORDER BY ";
            let ord_obj = new Array();
            for (let ord of param.orderby) {
                ord_obj.push(ord.field + ' ' + ord.order);
            }
            str += ord_obj.join(',');
        }

        // 发送请求
        try {
            let result = await sql_handler.query(str);
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }


    // INSERT INTO <TABLE> (field,...) VALUES (value,...)
    // param.kv: field-value pair collection
    static async insert(table, param) {

        let str = `INSERT INTO ${table} `;

        // 拼接kv
        if (param.kv && param.kv.length) {
            let keys = new Array();
            let values = new Array();
            for (let key of param.kv) {
                keys.push(key);
                values.push(param[key]);
            }
            str += `(${keys.join(',')}) VALUES (${values.join(',')})`;
        }

        try {
            let result = await sql_handler.query(str);
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }


    // UPDATE <TABLE> SET <field> = <newvalue>, ... [WHERE <condition> AND ...]
    // param.kv: field-value pair collection
    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    static async update(table, param) {

        let str = `UPDATE ${table} SET `;

        // 拼接kv
        if (param.kv && param.kv.length) {
            let kv = new Array();
            for (let key of param.kv) {
                kv.push(key + '=' + param.kv[key]);
            }
            str += kv.join(',');
        }

        // 拼接WHERE部分
        if (param.where && param.where.length) {
            str += " WHERE ";
            str += param.where.join(" AND ");
        }

        try {
            let result = await sql_handler.query(str);
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    // DELETE FROM <table> [WHERE <condition> AND ...]
    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    static async delete(table, param) {

        let str = `DELETE FROM ${table} `;

        // 拼接WHERE部分
        if (param.where && param.where.length) {
            str += " WHERE ";
            str += param.where.join(" AND ");
        }

        try {
            let result = await sql_handler.query(str);
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    // 将压缩的单行json展开
    static formatJson(msg) {
        var rep = "~";
        var jsonStr = JSON.stringify(msg, null, rep)
        var str = "";
        for (var i = 0; i < jsonStr.length; i++) {
            var text2 = jsonStr.charAt(i)
            if (i > 1) {
                var text = jsonStr.charAt(i - 1)
                if (rep != text && rep == text2) {
                    str += "<br/>"
                }
            }
            str += text2;
        }
        jsonStr = "";
        for (var i = 0; i < str.length; i++) {
            var text = str.charAt(i);
            if (rep == text)
                jsonStr += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            else {
                jsonStr += text;
            }
            if (i == str.length - 2)
                jsonStr += "<br/>"
        }
        return jsonStr;
    }

};

module.exports = query_handler;