const express = require("express");
const cors = require("cors")
const mysql = require("mysql2");

const app = express();

app.use(cors());
const db = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root123",
  database: "devopsdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get("/api", (req, res) => {
  db.query("SELECT NOW() AS currentTime", (err, results) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json({
      message: "Backend connected to MySQL successfully!!",
      databaseTime: results[0].currentTime,
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
