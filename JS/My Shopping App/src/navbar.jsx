import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="header">
        <h1>My Shopping App</h1>
      </header>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cart">My Cart</Link>
        <Link to="/orders">My Order</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </>
  );
}

export default Navbar;