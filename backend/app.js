const express = require("express");
const cors = require("cors")
const mysql = require("mysql2");

const app = express();

app.use(cors());
const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root123",
  database: "devopsdb",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/api", (req, res) => {
  db.query("SELECT NOW() AS currentTime", (err, results) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.json({
      message: "Backend connected to MySQL successfully!",
      databaseTime: results[0].currentTime,
    });
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
