import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Items from "./items";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/cart" element={<h2>My Cart</h2>} />
        <Route path="/orders" element={<h2>My Order</h2>} />
        <Route path="/settings" element={<h2>Settings</h2>} />
        <Route path="/profile" element={<h2>My Profile</h2>} />
      </Routes>
    </>
  );
}

export default App;