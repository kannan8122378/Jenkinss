import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Kira Travels
      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/book">Book Ride</Link></li>

        <li><Link to="/history">History</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/contact">Contact</Link></li>

      </ul>

    </nav>
  );
}

export default Navbar;
