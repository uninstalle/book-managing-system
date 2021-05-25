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
            alert(r.errno + ' ' + r.sqlMessage);
            return [];
        }
        return r;
    }

    static async add(data) {

    }

    static async update(book_id, property, value) {
        let kvc = [];
        let kv = {};
        kv[property] = value;
        kvc.push(kv);

        let r = await BookRequestSender.update({
            where: "book_id=" + book_id,
            kv: kvc
        });

        if (r.errno) {
            alert(r.errno + ' ' + r.sqlMessage);
            return [];
        }
        return r;
    }

    static async delete(book_id) {
        let wc = { where: [] };
        let w = 'book_id=' + book_id;
        wc['where'].push(w);

        let r = await BookRequestSender.delete(wc);
        console.log(r);
        if (r.errno) {
            alert(r.errno + ' ' + r.sqlMessage);
            return [];
        }
        return JSON.stringify(r);
    }
}

export default BookController;