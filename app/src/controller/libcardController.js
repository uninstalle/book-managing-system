import LibcardRequestSender from '../service/libcard';

class LibcardController {
    static async list() {
        let r = await LibcardRequestSender.list({});
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

        let r = await LibcardRequestSender.select(wc);

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

        let r = await LibcardRequestSender.add(kvc);
        console.log(r);
        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Add Success!";
    }

    static async update(data) {

        let kvc = { where: ['card_id=' + data['card_id']], kv: [] };

        for (let p in data) {
            if (p === 'card_id')
                continue;
            if (!data[p])
                data[p] = 'NULL';

            let kv = {};
            kv[p] = data[p];
            kvc['kv'].push(kv);
        }

        console.log(kvc);

        let r = await LibcardRequestSender.update(kvc);
        console.log(r);
        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Update Success!";
    }

    static async delete(card_id) {
        let wc = { where: [] };
        let w = 'card_id=' + card_id;
        wc['where'].push(w);

        let r = await LibcardRequestSender.delete(wc);
        console.log(r);
        if (r.errno) {
            alert(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Delete Success!";
    }
}

export default LibcardController;