const db = require('../config/db');

class Activity {
    static async create(userId, activityType, count) {
        const [result] = await db.execute(
            'INSERT INTO Activities (userId, activityType, count) VALUES (?, ?, ?)',
            [userId, activityType, count]
        );
        return result;
    }

    static async findByUserId(userId) {
        const [rows] = await db.execute('SELECT * FROM Activities WHERE userId = ?', [userId]);
        return rows;
    }
}

module.exports = Activity;