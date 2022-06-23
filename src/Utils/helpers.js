 export const categories = ["https://res.cloudinary.com/doo5jbomi/image/upload/v1648929327/Assets%20For%20Ecom/Brand%20Categories/brand-light-logo12_hou2tm.png",
                        "https://res.cloudinary.com/doo5jbomi/image/upload/v1648929327/Assets%20For%20Ecom/Brand%20Categories/brand-light-logo9_rls3xx.png",
                         "https://res.cloudinary.com/doo5jbomi/image/upload/v1648929327/Assets%20For%20Ecom/Brand%20Categories/brand-light-logo10_awkqdk.png",
                         "https://res.cloudinary.com/doo5jbomi/image/upload/v1648929327/Assets%20For%20Ecom/Brand%20Categories/brand-light-logo11_gekpte.png",
                         "https://res.cloudinary.com/doo5jbomi/image/upload/v1648929327/Assets%20For%20Ecom/Brand%20Categories/brand-light-logo7_fotfor.png",
                         "https://res.cloudinary.com/doo5jbomi/image/upload/v1648929326/Assets%20For%20Ecom/Brand%20Categories/brand-light-logo1_uhsbjx.png",
                         "https://res.cloudinary.com/doo5jbomi/image/upload/v1648929326/Assets%20For%20Ecom/Brand%20Categories/brand-light-logo4_olxjkt.png",
                         "https://res.cloudinary.com/doo5jbomi/image/upload/v1648929326/Assets%20For%20Ecom/Brand%20Categories/brand-light-logo6_cyeflk.png",
                         "https://res.cloudinary.com/doo5jbomi/image/upload/v1648929326/Assets%20For%20Ecom/Brand%20Categories/brand-light-logo2_v7vwwv.png"]

export const initialFilterState = {
        products:[],
        categories: [],
        status:[],
        filters: {
            sortby: "",
            rating: null,
            priceRange: 10000
        }
    }

export const userDataInitialState = {
        cart: [],
        wishlist:[]
    }

export const initialAuthState = {
    token: "",
    isAuthenticated: false,
    name: "",
    email: "",
    password: "",
};
