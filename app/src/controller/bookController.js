import BookRequestSender from '../service/book';

class BookController {
    static async list() {
        let r = await BookRequestSender.list({});
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

        let r = await BookRequestSender.select(wc);

        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
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

        let r = await BookRequestSender.add(kvc);
        console.log(r);
        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Add Success!";
    }

    static async update(data) {

        let kvc = { where: ['book_id=' + data['book_id']], kv: [] };

        for (let p in data) {
            if (p === 'book_id')
                continue;
            if (!data[p])
                data[p] = 'NULL';

            let kv = {};
            kv[p] = data[p];
            kvc['kv'].push(kv);
        }

        console.log(kvc);

        let r = await BookRequestSender.update(kvc);
        console.log(r);
        if (r.errno) {
            console.log(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Update Success!";
    }

    static async delete(book_id) {
        let wc = { where: [] };
        let w = 'book_id=' + book_id;
        wc['where'].push(w);

        let r = await BookRequestSender.delete(wc);
        console.log(r);
        if (r.errno) {
            alert(r.errno + ' ' + r.sqlMessage);
            return r.sqlMessage;
        }
        return "Delete Success!";
    }
}

export default BookController;