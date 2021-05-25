import { axios, ServerBookURL, Request } from '../config/settings';


class BookRequestSender {

    // sent param:
    // 
    // target param:
    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    // param.orderby: ORDER BY object collection, object { field, order = ASC/DESC }
    // param.kv: field-value pair collection


    static async list(param) {
        let r = await axios.get(ServerBookURL + Request.ListRequest, param);
        return r.data;
    }

    static async select(param) {
        let r = await axios.post(ServerBookURL + Request.SelectRequest, param);
        console.log(r);
        return r.data;
    }

    static async add(param) {
        let r = await axios.post(ServerBookURL + Request.AddRequest, param);
        return r.data;
    }
    static async update(param) {
        let r = await axios.post(ServerBookURL + Request.UpdateRequest, param);
        return r.data;
    }
    static async delete(param) {
        let r = await axios.post(ServerBookURL + Request.DeleteRequest, param);
        return r.data;
    }
};

export default BookRequestSender;