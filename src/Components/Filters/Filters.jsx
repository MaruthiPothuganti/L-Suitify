import './filters.css'
import { ACTION_TYPE } from '../../Utils/constants';
import { useFilter } from '../../Context/ProductContext';

export const Filters = () => {

    const { filterState, filterDispatch } = useFilter();

    return (<aside className="filterList">

        <div className="flex-space-between padding-v-l">
            <h1>Filters</h1>
            <h2>Clear</h2>
        </div>
        <div className="padding-v-l">
            <h2>Price Range</h2>
            <input type="range" className='rangeFilter' id="price-filter" name="vol" min="200" max="50000" step="2000" />
        </div>
        <div className="padding-v-l">
            <h2 className="">Category</h2>
            <div className="category-pill padding-s">
                <input type="checkbox" name="jacket" id="jacket" className="prod-category" />
                <label htmlFor="jacket"> Jacket</label>
            </div>
            <div className="category-pill padding-s">
                <input type="checkbox" name="trousers" id="trousers" className="prod-category" />
                <label htmlFor="trousers"> Trousers</label>
            </div>
            <div className="category-pill padding-s">
                <input type="checkbox" name="suits" id="suits" className="prod-category" />
                <label htmlFor="suits"> Suits</label>
            </div>

        </div>
        <div className="padding-v-l">
            <h2 className="">Rating</h2>
            <div className="category-pill padding-s">
                <input type="radio" name="rate-sort" id="four-rate" className="prod-category" />
                <label htmlFor="four-rate"> 4 Star & Above</label>
            </div>
            <div className="category-pill padding-s">
                <input type="radio" name="rate-sort" id="three-rate" className="prod-category" />
                <label htmlFor="three-rate"> 3 Star & Above</label>
            </div>
            <div className="category-pill padding-s">
                <input type="radio" name="rate-sort" id="two-rate" className="prod-category" />
                <label htmlFor="two-rate"> 2 Star & Above</label>
            </div>
            <div className="category-pill padding-s">
                <input type="radio" name="rate-sort" id="one-rate" className="prod-category" />
                <label htmlFor="one-rate"> 1 Star & Above</label>
            </div>
        </div>
        <div className="padding-v-l">
            <h2 className="">Sort By</h2>
            <div className="category-pill padding-s">
                <input type="radio" name="price-sort" id="price-sort-high" className="prod-category"
                />
                <label htmlFor="price-sort-high"> Price low to high</label>
            </div>
            <div className="category-pill padding-s">
                <input type="radio" name="price-sort" id="price-sort-low" className="prod-category" />
                <label htmlFor="price-sort-low"> Price high to Low</label>
            </div>

        </div>
        <div className="padding-v-l">
            <h2 className="">Status</h2>
            <div className="category-pill padding-s">
                <input type="checkbox" name="Status" id="newArrivals" className="prod-category" />
                <label htmlFor="newArrivals"> New Arrivals</label>
            </div>
            <div className="category-pill padding-s">
                <input type="checkbox" name="Status" id="sale" className="prod-category" />
                <label htmlFor="sale"> Sale</label>
            </div>

        </div>
    </aside>);
}

