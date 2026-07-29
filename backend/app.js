const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root123",
  database: "devopsdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test Database Connection
app.get("/api", (req, res) => {
  db.query("SELECT NOW() AS currentTime", (err, results) => {
    if (err) {
      return res.status(500).json({
        message: err.message,
      });
    }

    res.json({
      message: "Backend connected to MySQL successfully!!",
      databaseTime: results[0].currentTime,
    });
  });
});

// Book Ride
app.post("/api/book", (req, res) => {
  const { pickup, drop, vehicle } = req.body;

  db.query(
    "INSERT INTO bookings (pickup, drop_location, vehicle) VALUES (?, ?, ?)",
    [pickup, drop, vehicle],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json({
        message: "Ride booked successfully!",
        bookingId: result.insertId,
      });
    }
  );
});

// View All Bookings
app.get("/api/bookings", (req, res) => {
  db.query(
    "SELECT * FROM bookings ORDER BY created_at DESC",
    (err, results) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json(results);
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
