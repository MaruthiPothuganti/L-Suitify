import './App.css'
import { Routes, Route } from "react-router-dom";
import {SignUp, Login, HomePage, ProductListing, Wishlist, Cart, Profile} from './Pages';
import { Navbar } from "./Components/Navbar/Navbar";
import { RequireAuth } from "./Components/RequireAuth";
import { Address } from "./Components/Address/Address";
import { Orders } from "./Components/Orders/Orders";
import { OrderSummary } from "./Pages/OrderSummary/OrderSummary";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { PopupMenu } from './Components/PopupMenu/PopupMenu';

function App() {
  const [isHamMenuOpen, setIsHamMenu] = useState(false);
  return (
    <div className="App">
      <Navbar setIsHamMenu={ setIsHamMenu} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/Wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
        <Route path="/Cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<RequireAuth><Profile /></RequireAuth>}>
          <Route path='/Profile/address' element={<Address/>} />
          <Route path='/Profile/orders' element={<Orders/>} />
        </Route>
        <Route path="/OrderSummary" element={<RequireAuth><OrderSummary /></RequireAuth>} />
      </Routes>
      <ToastContainer style={{ "fontSize": "1.5rem" }} />
      <PopupMenu show={isHamMenuOpen} handleClose={setIsHamMenu} />
    </div>
    );
}

export default App;
