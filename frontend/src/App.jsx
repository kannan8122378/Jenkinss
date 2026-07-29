import { useState } from "react";
import "./App.css";

function App() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("Mini");

  const bookRide = () => {
    const bookRide = async () => {
  const response = await fetch("/api/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      pickup,
      drop,
      vehicle
    })
  });

  const data = await response.json();
  alert(data.message);
};
  };

  return (
    <div className="container">
      <nav className="navbar">
        <h2>🚖 Stackly Ride</h2>

        <ul>
          <li>Home</li>
          <li>Book Ride</li>
          <li>History</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Book Your Ride in Seconds</h1>

        <p>Fast • Safe • Affordable</p>

        <div className="booking-card">

          <input
            placeholder="Pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />

          <input
            placeholder="Drop Location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          />

          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option>Mini</option>
            <option>Sedan</option>
            <option>SUV</option>
          </select>

          <button onClick={bookRide}>
            Book Ride
          </button>

        </div>
      </section>

      <section className="features">

        <div className="card">
          <h3>🚗 Live Tracking</h3>
          <p>Track your driver in real time.</p>
        </div>

        <div className="card">
          <h3>💳 Secure Payment</h3>
          <p>Pay online or cash.</p>
        </div>

        <div className="card">
          <h3>⭐ Top Rated Drivers</h3>
          <p>Verified professional drivers.</p>
        </div>

      </section>

      <footer>
        © 2026 Stackly Ride | AWS DevOps Three Tier Application
      </footer>

    </div>
  );
}

export default App;
