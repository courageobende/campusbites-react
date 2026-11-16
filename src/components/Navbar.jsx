import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Campus<span>Bites.</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button className="cart-button">
        🛒 My Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;