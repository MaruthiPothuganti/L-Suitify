import "./navbar.css";
import { Link } from "react-router-dom";
import { useData } from "../../Context/UserDataContext";

export function Navbar() {
  const { userDataState } = useData();
  const { cart, wishlist } = userDataState;

  return (
    <nav className="ecom-navbar">
      <div className="flex-center">
        <ion-icon className="ham-menu" name="menu-outline"></ion-icon>
        <div>
          <Link to="/">
            <h1 className="heroLogo">L-Suitify</h1>
          </Link>
        </div>
      </div>
      <div className="search-container flex-center">
        <input
          type="search"
          name="searchbar"
          className="searchbar"
          placeholder="Search..."
        />
        <button className="btn-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="nav-pill flex-center">
        <Link to="/Wishlist">
          <button className="badge">
            <i className="fa-solid fa-heart"></i>
            <span className="badge-notify">{wishlist.length}</span>
          </button>
        </Link>
        <Link to="/Cart">
          <button className="badge">
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="badge-notify">{cart.length}</span>
          </button>
        </Link>
        <Link to="/Login">
          <button className="btn btn-primary">Login</button>
        </Link>
      </div>
    </nav>
  );
}
