import { Routes, Route,useLocation } from "react-router-dom";
import {SignUp, Login, HomePage, ProductListing, Wishlist, Cart} from './Pages';
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from './Components/Footer/Footer';
import './App.css'

function App() {

  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductListing" element={<ProductListing />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

      </Routes>
      <Footer />

    </div>
    );
}

export default App;
