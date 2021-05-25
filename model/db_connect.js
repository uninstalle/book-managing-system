
const mysql = require('mysql2');
const db_info = require('../config/db');

var host = db_info.connect_info.host;
var guest_username = db_info.database_info.guest_username;
var guest_password = db_info.database_info.guest_password;
var admin_username = db_info.database_info.admin_username;
var admin_password = db_info.database_info.admin_password;
var database_name = db_info.database_info.database_name;

var pool = mysql.createPool(
    {
        host: host,
        user: guest_username,
        password: guest_password,
        database: database_name
    }
);

class sql_handler {

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

    static changeUser(user, password) {
        pool.end();
        pool = mysql.createPool(
            {
                host: host,
                user: user,
                password: password,
                database: database_name
            }
        );
    }

    static changeUserToAdmin() {
        this.changeUser(admin_username, admin_password);
    }

    static changeUserToGuest() {
        this.changeUser(guest_username, guest_password);
    }

    static checkAdmin(username, password) {
        return username == admin_username && password == admin_password;
    }
}

module.exports = sql_handler;
