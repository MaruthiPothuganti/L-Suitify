import "./CSS/Productlisting.css";
import { Filters } from "../Components/Filters/Filters";
import { ProductCard } from "../Molecules/ProductCard";
import { useFilter } from "../Context/ProductContext";
import {
  sortProductsByCategory,
  sortProductsByPrice,
  sortProductsByRange,
  sortProductsByRating,
  sortProductsByStatus,
} from "../Utils/FilterFunctions";
import { useState } from "react";

const ProductListing = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const { filterState } = useFilter();
  let { products, filters, categories, status } = filterState;

  const categorySortProducts = sortProductsByCategory(products, categories);
  const rangeSortProducts = sortProductsByRange(
    categorySortProducts,
    filters.priceRange
  );
  const priceSortProducts = sortProductsByPrice(
    rangeSortProducts,
    filters.sortby
  );
  const rateSortProducts = sortProductsByRating(
    priceSortProducts,
    filters.rating
  );
  const finalSortProducts = sortProductsByStatus(rateSortProducts, status);

  return (
    <div className="products">
      <div className="mobFilters">
        <h2>Filters</h2>
        {isFiltersOpen ? (
          <button
            className="dropDownBTN"
            onClick={() => setIsFiltersOpen((prev) => !prev)}
          >
            <i class="fa-solid fa-chevron-up fa-2xl"></i>
          </button>
        ) : (
          <button
            className="dropDownBTN"
            onClick={() => setIsFiltersOpen((prev) => !prev)}
          >
            <i class="fa-solid fa-chevron-down fa-2xl"></i>
          </button>
        )}
      </div>
      {isFiltersOpen && <Filters />}
      <div className="product-listing">
        <div className="product-container flex-row-spacearound">
          {finalSortProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
