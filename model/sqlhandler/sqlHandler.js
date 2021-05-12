
const mysql = require('mysql2');

var pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'BMS_GUEST',
        password: 'Aa12345?',
        database: "BMS"
    }
);

class sqlHandler {

    static async query(req, arr = null) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) reject(err);
                else {
                    connection.query(req, arr, (err, result) => {
                        if (err) reject(err);
                        else resolve(result);
                    });
                    connection.release();
                }
            });
        });
    };

    static changeClient(u, p) {
        pool.end();
        pool = mysql.createPool(
            {
                host: 'localhost',
                user: u,
                password: p,
                database: "BMS"
            }
        );
    }
}

module.exports = sqlHandler;
