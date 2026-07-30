const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createPool({
  host: "172.31.5.137",       // Private IP of your MySQL EC2
  port: 3306,
  user: "devopsuser",
  password: "StrongPassword123",
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

    // Validation
    if (!pickup || !drop || !vehicle) {
        return res.status(400).json({
            success: false,
            message: "Please provide pickup, destination and vehicle."
        });
    }

    const sql = `
        INSERT INTO bookings
        (pickup, drop_location, vehicle)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [pickup, drop, vehicle], (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.status(201).json({
            success: true,
            message: "Ride booked successfully!",
            bookingId: result.insertId
        });

    });

});

// View All Bookings
app.get("/api/bookings", (req, res) => {

    const sql = `
        SELECT
            id,
            pickup,
            drop_location,
            vehicle,
            created_at
        FROM bookings
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.status(200).json(results);

    });

});

//Delete Booking API
app.delete("/api/book/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM bookings WHERE id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Booking not found"
                });
            }

            res.json({
                success: true,
                message: "Booking deleted successfully"
            });

        }
    );

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
