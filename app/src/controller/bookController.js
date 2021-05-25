import BookRequestSender from '../service/book';

class BookController {
    static async list() {
        let r = await BookRequestSender.list({});
        return r;
    }

    static async select(property, value) {
        let wc = { where: [] };
        let w = property + '=' + value;
        wc['where'].push(w);

        let r = await BookRequestSender.select(wc);
        return r;
    }

    static add() {

    }

    static update(book_id, property, value) {
        let kvc = [];
        let kv = {};
        kv[property] = value;
        kvc.push(kv);

        return BookRequestSender.update({
            where: "book_id=" + book_id,
            kv: kvc
        });
    }

    static delete(book_id) {
        BookRequestSender.delete({
            where: "book_id=" + book_id
        });
    }
}

export default BookController;