const db = require('../config/db');

class User {
    static async create(username, email, password) {
        const [result] = await db.execute(
            'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)',
            [username, email, password]
        );
        return result;
    }

    static async findByEmail(email) {
        const [rows] = await db.execute('SELECT * FROM Users WHERE email = ?', [email]);
        return rows[0];
    }
}

module.exports = User;