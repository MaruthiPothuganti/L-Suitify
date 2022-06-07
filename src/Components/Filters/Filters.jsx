import './filters.css'
import { ACTION_TYPE } from '../../Utils/constants';
import { useFilter } from '../../Context/ProductContext';

export const Filters = () => {

    const { filterState, filterDispatch } = useFilter();
    const { filters, categories, status } = filterState;
    const {
        HIGH_TO_LOW,
        LOW_TO_HIGH,
        SORT_BY,
        RATING,
        CATEGORIES,
        PRICE_RANGE,
        STATUS,
        CLEAR
    } = ACTION_TYPE;

    return (<aside className="filterList">

        <div className="flex-space-between padding-v-l">
            <h1>Filters</h1>
            <h2 className='clearFilter'
                onClick={() => {
                    filterDispatch({
                    type: CLEAR
                })
            }}
            >Clear</h2>
        </div>
        <div className="padding-v-l">
            <h2>Price Range</h2>
            <input type="range" className='rangeFilter' id="price-filter" min="200" max="10000" step="1000" defaultValue="10000"
                onChange={(e) => {
                    filterDispatch({
                        type: PRICE_RANGE,
                        payload: e.target.value
                    })
                }}
            />
        </div>
        <div className="padding-v-l">
            <h2 className="">Category</h2>
            <div className="category-pill padding-s">
                <input type="checkbox" value="jacket" id="jacket" className="prod-category"
                    checked={categories.includes("jacket")}
                    onChange={(e) => {
                        filterDispatch({
                            type: CATEGORIES,
                            payload: e.target.value
                        })
                    }}
                />
                <label htmlFor="jacket"> Jacket</label>
            </div>
            <div className="category-pill padding-s">
                <input type="checkbox" value="trouser" id="trousers" className="prod-category"
                    checked={categories.includes("trouser")}
                    onChange={(e) => {
                        filterDispatch({
                            type: CATEGORIES,
                            payload: e.target.value
                        })
                    }}
                />
                <label htmlFor="trousers"> Trousers</label>
            </div>
            <div className="category-pill padding-s">
                <input type="checkbox" value="suit" id="suits" className="prod-category"
                    checked={categories.includes("suit")}
                    onChange={(e) => {
                        filterDispatch({
                            type: CATEGORIES,
                            payload: e.target.value
                        })
                    }}
                />
                <label htmlFor="suits"> Suits</label>
            </div>

        </div>
        <div className="padding-v-l">
            <h2 className="">Rating</h2>
            <div className="category-pill padding-s">
                <input type="radio" name="rate-sort" id="four-rate" className="prod-category" checked={filters.rating === 4}
                    onChange={() => {
                        filterDispatch({
                            type: RATING,
                            payload: 4
                        })
                }}
                />
                <label htmlFor="four-rate"> 4 Star & Above</label>
            </div>
            <div className="category-pill padding-s">
                <input type="radio" name="rate-sort" id="three-rate" className="prod-category" checked={filters.rating === 3}
                    onChange={() => {
                        filterDispatch({
                            type: RATING,
                            payload: 3
                        })
                    }}
                />
                <label htmlFor="three-rate"> 3 Star & Above</label>
            </div>
            <div className="category-pill padding-s">
                <input type="radio" name="rate-sort" id="two-rate" className="prod-category" checked={filters.rating === 2}
                    onChange={() => {
                        filterDispatch({
                            type: RATING,
                            payload: 2
                        })
                    }}
                />
                <label htmlFor="two-rate"> 2 Star & Above</label>
            </div>
            <div className="category-pill padding-s">
                <input type="radio" name="rate-sort" id="one-rate" className="prod-category" checked={filters.rating === 1}
                    onChange={() => {
                        filterDispatch({
                            type: RATING,
                            payload: 1
                        })
                    }}
                />
                <label htmlFor="one-rate"> 1 Star & Above</label>
            </div>
        </div>
        <div className="padding-v-l">
            <h2 className="">Sort By</h2>
            <div className="category-pill padding-s">
                <input type="radio" name="price-sort" id="price-sort-high" className="prod-category" checked={filters.sortby === LOW_TO_HIGH}
                    onChange={
                        () => {
                            filterDispatch({
                                type: SORT_BY,
                                payload: LOW_TO_HIGH
                            })
                        }
                    }/>
                <label htmlFor="price-sort-high"> Price low to high</label>
            </div>
            <div className="category-pill padding-s">
                <input type="radio" name="price-sort" id="price-sort-low" className="prod-category" checked={filters.sortby === HIGH_TO_LOW}
                    onChange={
                        () => {
                            filterDispatch({
                                type: SORT_BY,
                                payload: HIGH_TO_LOW
                            })
                        }
                    }
                />
                <label htmlFor="price-sort-low"> Price high to Low</label>
            </div>

        </div>
        <div className="padding-v-l">
            <h2 className="">Status</h2>
            <div className="category-pill padding-s">
                <input type="checkbox" name="Status" id="newArrivals" className="prod-category"
                    onChange={
                        () => {
                            filterDispatch({
                                type: STATUS,
                                payload: "newArrivals"
                            })
                        }
                    }
                />
                <label htmlFor="newArrivals"> New Arrivals</label>
            </div>
            <div className="category-pill padding-s">
                <input type="checkbox" name="Status" id="sale" className="prod-category"
                    onChange={
                        () => {
                            filterDispatch({
                                type: STATUS,
                                payload: "sale"
                            })
                        }
                    }
                />
                <label htmlFor="sale"> Sale</label>
            </div>

        </div>
    </aside>);
}

