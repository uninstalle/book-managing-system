
var $queryTemplate = require('./queryTemplate');
var sqlHandler = require('./sqlHandler');


class QueryHandler {

    static async select(table, param) {
        let str;
        switch (table) { // 导入预存的查询语句模板(SElECT * FROM xxxx)
            case 'book': str = $queryTemplate.BookManage.select; break;
            case 'record': str = $queryTemplate.RecordManage.select; break;
            case 'libcard': str = $queryTemplate.LibCardManage.select; break;
            case 'user': str = $queryTemplate.UserManage.select; break;
            default: return Error("ERROR: table not existed");
        }

        // 拼接 WHERE 之后的部分
        let count = 0;
        for (let key in param) {
            if (count === 0)
                count++;
            else {
                str = str + ' AND ';
            }
            str = str + key + ' = ' + param[key];
        }

        try {
            let r = await sqlHandler.query(str);
            let result = r;
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }


    static async selectAll(table, param) {
        let str;
        switch (table) {
            case 'book': str = $queryTemplate.BookManage.selectAll; break;
            case 'record': str = $queryTemplate.RecordManage.selectAll; break;
            case 'libcard': str = $queryTemplate.LibCardManage.selectAll; break;
            case 'user': str = $queryTemplate.UserManage.selectAll; break;
            default: return;
        }
        if (param.orderby && param.orderby !== undefined)
            str = str + ' ORDER BY ' + param.orderby;
        if (param.order && param.order !== undefined)
            str = str + ' ' + param.order;
        try {
            let r = await sqlHandler.query(str);
            let result = r;
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }


    static async insert(table, param) {
        let keys = new Array();
        let values = new Array();
        let str;
        switch (table) {
            case 'book': str = $queryTemplate.BookManage.insert; break;
            case 'record': str = $queryTemplate.RecordManage.insert; break;
            case 'libcard': str = $queryTemplate.LibCardManage.insert; break;
            case 'user': str = $queryTemplate.UserManage.insert; break;
        }
        for (let key in param) {
            keys.push(key);
            values.push(param[key]);
        }
        keys = '(' + keys.join(',') + ')';
        values = '(' + values.join(',') + ')';
        str = str + keys + ' VALUES ' + values;
        try {
            let r = await sqlHandler.query(str);
            let result = r;
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }


    static async update(table, param) {
        let str;
        switch (table) {
            case 'book': str = $queryTemplate.BookManage.update; break;
            case 'record': str = $queryTemplate.RecordManage.update; break;
            case 'libcard': str = $queryTemplate.LibCardManage.update; break;
            case 'user': str = $queryTemplate.UserManage.update; break;
            default: return;
        }

        let count = 0;
        for (let key in param) {
            if (count === 0) {
                str = str + key + ' = ' + param[key];
                count++;
            }
            else {
                str = str + ' WHERE ' + key + ' = ' + param[key];
            }
        }
        try {
            let r = await sqlHandler.query(str);
            let result = r;
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }


    static async delete(table, param) {
        let str;
        switch (table) {
            case 'book': str = $queryTemplate.BookManage.delete; break;
            case 'record': str = $queryTemplate.RecordManage.delete; break;
            case 'libcard': str = $queryTemplate.LibCardManage.delete; break;
            case 'user': str = $queryTemplate.UserManage.delete; break;
            default: return;
        }
        let arr = new Array();
        for (let key in param) {
            str = str + key + ' = ?';
            arr[0] = param[key];
        }
        try {
            let r = await sqlHandler.query(str, arr);
            let result = r;
            return result;
        } catch (e) {
            console.log(e);
            return e;
        }
    }

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

module.exports = QueryHandler;