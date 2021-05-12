
var queryTemplateBook = {
    select: 'SELECT * FROM book WHERE ',
    selectAll: 'SELECT * FROM book',
    insert: 'INSERT INTO book',
    update: 'UPDATE book SET ',
    delete: 'DELETE FROM book WHERE '
};

var queryTemplateRecord = {
    select: 'SELECT * FROM book_record WHERE ',
    selectAll: 'SELECT * FROM book_record',
    insert: 'INSERT INTO book_record',
    update: 'UPDATE book_record SET ',
    delete: 'DELETE FROM book_record WHERE '
};

var queryTemplateLibCard = {
    select: 'SELECT * FROM lib_card WHERE ',
    selectAll: 'SELECT * FROM lib_card',
    insert: 'INSERT INTO lib_card',
    update: 'UPDATE lib_card SET ',
    delete: 'DELETE FROM lib_card WHERE '
};

let queryTemplateUser = {
    select: 'SELECT * FROM card_user WHERE ',
    selectAll: 'SELECT * FROM card_user',
    insert: 'INSERT INTO card_user',
    update: 'UPDATE card_user SET ',
    delete: 'DELETE FROM card_user WHERE '
};

var queryTemplate = { queryTemplateBook, queryTemplateRecord, queryTemplateLibCard, queryTemplateUser };

module.exports = queryTemplate;