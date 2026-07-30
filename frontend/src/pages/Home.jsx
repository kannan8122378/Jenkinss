import { useEffect, useState } from "react";

function Home() {

  const cities = [
    "Chennai",
    "Coimbatore",
    "Bangalore",
    "Hyderabad",
    "Kochi",
    "Madurai",
    "Salem"
  ];

  const vehicles = [
    "Bike",
    "Auto",
    "Sedan",
    "SUV",
    "Mini Van"
  ];

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const res = await fetch("/api/bookings");
    const data = await res.json();
    setBookings(data);
  };

  const bookRide = async () => {

    if (!pickup || !drop || !vehicle) {
      alert("Please select all fields");
      return;
    }

    const res = await fetch("/api/book", {
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

    const data = await res.json();

    alert(data.message);

    setPickup("");
    setDrop("");
    setVehicle("");

    loadBookings();
  };

  return (
    <div className="container">

      <h1>🚖 Stackly Ride</h1>

      <h2>Book Your Ride in Seconds</h2>

      <div className="card">

        <select
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
        >
          <option value="">Pickup City</option>

          {cities.map(city => (
            <option key={city}>{city}</option>
          ))}

        </select>

        <select
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
        >
          <option value="">Destination</option>

          {cities.map(city => (
            <option key={city}>{city}</option>
          ))}

        </select>

        <select
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
        >
          <option value="">Vehicle</option>

          {vehicles.map(vehicle => (
            <option key={vehicle}>{vehicle}</option>
          ))}

        </select>

        <button onClick={bookRide}>
          🚖 Book Ride
        </button>

      </div>

      <h3>Recent Bookings</h3>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Pickup</th>
            <th>Destination</th>
            <th>Vehicle</th>
          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.pickup}</td>
              <td>{booking.drop_location}</td>
              <td>{booking.vehicle}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );

}

export default Home;
