import UserRequestSender from '../service/user';

class UserController {
    static async list() {
        let r = await UserRequestSender.list({});
        if (r.errno) {
            alert(r.errno + ' ' + r.sqlMessage);
            return [];
        }
        return r;
    }

    static async select(property, value) {
        let wc = { where: [] };
        let w = property + '=' + value;
        wc['where'].push(w);

        let r = await UserRequestSender.select(wc);

        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return [];
        }
        return r;
    }

    static async add(data) {

        let kvc = { kv: [] };
        for (let p in data) {
            if (!data[p])
                data[p] = 'NULL';

            let kv = {};
            kv[p] = data[p];
            kvc['kv'].push(kv);
        }

        let r = await UserRequestSender.add(kvc);
        console.log(r);
        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Add Success!";
    }

    static async update(data) {

        let kvc = { where: ['user_id=' + data['user_id']], kv: [] };

        for (let p in data) {
            if (p === 'user_id')
                continue;
            if (!data[p])
                data[p] = 'NULL';

            let kv = {};
            kv[p] = data[p];
            kvc['kv'].push(kv);
        }

        console.log(kvc);

        let r = await UserRequestSender.update(kvc);
        console.log(r);
        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Update Success!";
    }

    static async delete(user_id) {
        let wc = { where: [] };
        let w = 'user_id=' + user_id;
        wc['where'].push(w);

        let r = await UserRequestSender.delete(wc);
        console.log(r);
        if (r.errno) {
            alert(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Delete Success!";
    }
}

export default UserController;