import { axios, ServerUserURL, Request } from '../config/settings';


class UserRequestSender {

    // sent param:
    // 
    // target param:
    // param.where: WHERE <condition> collection, condition 'field >/</= literal'
    // param.orderby: ORDER BY object collection, object { field, order = ASC/DESC }
    // param.kv: field-value pair collection


    static async list(param) {
        let r = await axios.get(ServerUserURL + Request.ListRequest, param);
        return r.data;
    }

    static async select(param) {
        let r = await axios.post(ServerUserURL + Request.SelectRequest, param);
        return r.data;
    }

    static async add(param) {
        let r = await axios.post(ServerUserURL + Request.AddRequest, param);
        return r.data;
    }
    static async update(param) {
        let r = await axios.post(ServerUserURL + Request.UpdateRequest, param);
        return r.data;
    }
    static async delete(param) {
        let r = await axios.post(ServerUserURL + Request.DeleteRequest, param);
        return r.data;
    }
};

export default UserRequestSender;