import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚖 Stackly Ride</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/book">Book Ride</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
