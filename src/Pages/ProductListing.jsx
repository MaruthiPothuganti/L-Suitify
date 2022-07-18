import "./CSS/Productlisting.css";
import { Filters } from "../Components/Filters/Filters";
import { ProductCard } from "../Molecules/ProductCard";
import { useFilter } from "../Context/ProductContext";
import { toast } from "react-toastify";
import {
  sortProductsByCategory,
  sortProductsByPrice,
  sortProductsByRange,
  sortProductsByRating,
  sortProductsByStatus,
} from "../Utils/FilterFunctions";

const ProductListing = () => {
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
    <div className="products flex">
      <Filters />
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
