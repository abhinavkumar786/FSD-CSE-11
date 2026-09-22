import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import UserLayout from './components/UserLayout'
import ItemStore from './components/ItemStore'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<ItemStore />} />
            <Route path="mycart" element={<h1>My Cart</h1>} />
            <Route path="myorder" element={<h1>My Orders</h1>} />
            <Route path="categories" element={<h1>Categories</h1>} />
            <Route path="profile" element={<h1>My Profile</h1>} />
            <Route path="logout" element={<h1>Logged Out</h1>} />
            <Route path="*" element={<h1>Error Occured</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App