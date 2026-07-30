import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/book">Book Ride</Link>

      <Link to="/history">History</Link>

      <Link to="/about">About</Link>

      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
