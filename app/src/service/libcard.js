import { axios, ServerLibcardURL, Request } from '../config/settings';


class LibcardRequestSender {

    // sent param:
    // 
    // target param:
    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    // param.orderby: ORDER BY object collection, object { field, order = ASC/DESC }
    // param.kv: field-value pair collection


    static async list(param) {
        let r = await axios.get(ServerLibcardURL + Request.ListRequest, param);
        return r;
    }

    static async select(param) {
        let r = await axios.post(ServerLibcardURL + Request.SelectRequest, param);
        return r;
    }

    static async add(param) {
        let r = await axios.post(ServerLibcardURL + Request.AddRequest, param);
        return r;
    }
    static async update(param) {
        let r = await axios.post(ServerLibcardURL + Request.UpdateRequest, param);
        return r;
    }
    static async delete(param) {
        let r = await axios.post(ServerLibcardURL + Request.DeleteRequest, param);
        return r;
    }
};

module.exports = LibcardRequestSender;