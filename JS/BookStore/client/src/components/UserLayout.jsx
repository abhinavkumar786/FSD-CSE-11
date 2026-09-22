import { Link, Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      <header>
        <h1>My Book Store</h1>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/mycart">My Cart</Link>
        <Link to="/myorder">My Orders</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/profile">My Profile</Link>
        <Link to="/logout">Logout</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default UserLayout;