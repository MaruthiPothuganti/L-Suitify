import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";

export function Navbar({ setIsHamMenu }) {
  const { userAuthState } = useAuth();
  const { isAuthenticated, name } = userAuthState;
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  return (
    <>
      <nav className="lsuitify-navbar">
        <div className="accessLink">
          <button className="menuButton" onClick={() => setIsHamMenu(true)}>
            <i class="fa-sharp fa-solid fa-bars fa-2xl"></i>
          </button>
          <div>
            <Link to="/">
              <h2 className="heroLogo">L-Suitify</h2>
            </Link>
          </div>
          <div>
            <Link to="/ProductListing">
              <h2 className="nav-pill">
                <i className="fas fa-store fa-xl" title="products"></i>
                Shop now
              </h2>
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
          {isAuthenticated ? (
            <button className="badge">
              <Link to="/Profile" className="profileLink flex-center">
                <i className="fa-solid fa-circle-user"></i>
                <h2> Hi, {name}</h2>
              </Link>
            </button>
          ) : (
            <Link to="/Login">
              <button className="btn btn-primary">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
