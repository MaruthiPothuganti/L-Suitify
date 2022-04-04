import "./navbar.css";
import { Link } from "react-router-dom";


export  function Navbar  () {
    return <nav className="ecom-navbar">
        <div class="flex-center">
            <ion-icon class="ham-menu" name="menu-outline"></ion-icon>
            <div>
                <Link to="/HomePage">
                    <h1 className="heroLogo">L-Suitify</h1>
                </Link>
            </div>
        </div>
        <div class="search-container flex-center">
            <input type="search" name="searchbar" class="searchbar" placeholder="Search..."/>
                <button className="btn-search">
                   <i class="fa-solid fa-magnifying-glass"></i>
                </button>
        </div>

        <div class="nav-pill flex-center">
            <Link to="/Wishlist">
                <button class="badge">
                    <i class="fa-solid fa-heart"></i>
                     <span class="badge-notify">0</span>
                </button>
            </Link>
           <Link to="/Cart">
                <button className="badge">
                    <i class="fa-solid fa-bag-shopping"></i>
                     <span class="badge-notify">0</span>
                </button>

            </Link>
            <Link to="/Login"  >
                <button class="btn btn-primary">
                    Login
                </button>

            </Link>
            <Link to="/Signup" >
                <button className="btn btn-ol-accent">Sign Up</button>
            </Link>

        </div>

    </nav>
}



