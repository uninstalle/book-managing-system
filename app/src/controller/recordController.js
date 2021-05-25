import RecordRequestSender from '../service/record';

class RecordController {
    static async list() {
        let r = await RecordRequestSender.list({});
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

        let r = await RecordRequestSender.select(wc);

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

        let r = await RecordRequestSender.add(kvc);
        console.log(r);
        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Add Success!";
    }

    static async update(data) {

        let kvc = { where: ['record_id=' + data['record_id']], kv: [] };

        for (let p in data) {
            if (p === 'record_id')
                continue;
            if (!data[p])
                data[p] = 'NULL';

            let kv = {};
            kv[p] = data[p];
            kvc['kv'].push(kv);
        }

        console.log(kvc);

        let r = await RecordRequestSender.update(kvc);
        console.log(r);
        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Update Success!";
    }

    static async delete(record_id) {
        let wc = { where: [] };
        let w = 'record_id=' + record_id;
        wc['where'].push(w);

        let r = await RecordRequestSender.delete(wc);
        console.log(r);
        if (r.errno) {
            alert(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Delete Success!";
    }
}

export default RecordController;