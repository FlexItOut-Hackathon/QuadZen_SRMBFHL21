const db = require("../config/db");

class Leaderboard {
  static async create(userId, score) {
    const [result] = await db.execute(
      "INSERT INTO Leaderboard (userId, score) VALUES (?, ?)",
      [userId, score]
    );
    return result;
  }

  static async getTopScores(limit = 10) {
    const [rows] = await db.execute(
      "SELECT Users.username, Leaderboard.score FROM Leaderboard JOIN Users ON Leaderboard.userId = Users.id ORDER BY score DESC LIMIT ?",
      [limit]
    );
    return rows;
  }

  static async findOne(query) {
    const [rows] = await db.execute("SELECT * FROM Leaderboard WHERE userId = ?", [
      query.where.userId,
    ]);
    return rows[0];
  }

  static async update(userId, score) {
    const [result] = await db.execute(
      "UPDATE Leaderboard SET score = ? WHERE userId = ?",
      [score, userId]
    );
    return result;
  }
}

module.exports = Leaderboard;