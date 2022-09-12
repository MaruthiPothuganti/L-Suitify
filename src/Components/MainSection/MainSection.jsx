import "./mainsection.css";
import { categories } from "../../Utils/helpers";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function Main() {
  return (
    <main>
      <div className="homeSectionOne">
        <div className="heroTxtSection">
          <h1 className="heroHeading">All You need to make an Entrance</h1>
          <div>
            <Link to="/ProductListing">
              <button className="btn btn-accent">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="heroBrands flex-row-spacearound">
        {categories.map((logo, index) => {
          return (
            <div className="brandNameCategory" key={index}>
              <img src={logo} alt="brandName" />
            </div>
          );
        })}
      </div>

      <div className="home-sectionTwo">
        <p className="contentHeader">| Category Container</p>

        <div className="categoryContainer flex-center">
          <div className="contentCategory">
            <img
              src="https://res.cloudinary.com/doo5jbomi/image/upload/v1648621454/Assets%20For%20Ecom/Categories/cat-1_lla0fm.jpg"
              alt="brandName"
            />
          </div>

          <div className="contentCategory">
            <img
              src="https://res.cloudinary.com/doo5jbomi/image/upload/v1648621500/Assets%20For%20Ecom/Ribbons/bn-2-3_dg7zpa.jpg"
              alt="brandName"
            />
          </div>
          <div className="contentCategory">
            <img
              src="https://res.cloudinary.com/doo5jbomi/image/upload/v1648621500/Assets%20For%20Ecom/Ribbons/bn-2-2_xozjqv.jpg"
              alt="brandName"
            />
          </div>
        </div>
      </div>

      <div className="homeSectionThree flex-center padding-xxl">
        <div className="bannerContent text-center">
          <p>LIMITED TIME ONLY: IN STORES & ONLINE</p>
          <h1>60% OFF CLEARANCE</h1>
          <div className="bannerBtn flex-center">
            <button className="btn btn-ol-accent">SHOP TOP</button>
            <button className="btn btn-ol-accent">SHOP BOTTOMS</button>
            <button className="btn btn-ol-accent">SHOP SUITS</button>
          </div>
          <p>Exclude jeans & other items. Price as market</p>
        </div>
      </div>
    </main>
  );
}
