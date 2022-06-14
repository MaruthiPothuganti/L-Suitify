import { useData } from '../Context/UserDataContext';
import { ACTION_TYPE } from '../Utils/constants';


const Wishlist = () => {

    const { userDataState, userDataDispatch } = useData();
    const { wishlist } = userDataState;
    const { REMOVE_FROM_WISHLIST,ADD_TO_CART } = ACTION_TYPE;

    return (<div className='mainContainer'>
        <h1 className='text-center padding-m'>Wishlist</h1>
        <div className='flex-row-spacearound padding-l'>
            {wishlist.length>0? wishlist.map((product) =>
            <div className="ecom-card" key={product._id}>
                <img className="ecom-img" src={product.imageURL} alt="suit" />
                <h1 className="prod-title padding-m">{product.title}</h1>
                <p className="seller padding-h-xl">Sold by italiano  <span className='rating'>{product.rating}⭐</span></p>
                <div className="ecom-price padding-l">
                    <span className=" sell-price">₹{product.discountedPrice}</span>
                    <span className="strike-price">₹{product.price}</span>
                    <span className="ecom-disc">Save ₹{product.offer}</span>
                </div>

                <div className="action-btns flex-center">
                        <button className="card-btn card-btn-primary"
                            onClick={() => {
                                userDataDispatch({
                                    type: ADD_TO_CART,
                                    payload: product
                                })
                            }}
                        >
                        Add to cart
                    </button>
                        <button className="card-btn card-btn-secondary"
                            onClick={() => {
                                userDataDispatch({
                                    type: REMOVE_FROM_WISHLIST,
                                    payload: product
                                })
                            }}
                        >Remove</button>
                </div>

            </div>
            ) :
                <img src="https://res.cloudinary.com/doo5jbomi/image/upload/v1655226082/Assets%20For%20Ecom/error%20and%20empty/empty_cart_fdjx2f.svg" alt="empty list" />
            }
        </div>
    </div>)
}


export default Wishlist ;
