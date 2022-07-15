import { Routes, Route } from "react-router-dom";
import {SignUp, Login, HomePage, ProductListing, Wishlist, Cart} from './Pages';
import { Navbar } from "./Components/Navbar/Navbar";
import { RequireAuth } from "./Components/RequireAuth";
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/Wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
        <Route path="/Cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
    );
}

export default App;
