export const sortProductsByCategory = (products, category) => {
    if (category.length === 0) {
        return products;
    }
    return [...products].filter(
        (prod) => category.includes(prod.categoryName.toLowerCase())
    )
}

export const sortProductsByPrice = (products, sortby) => {
    if (sortby === "HIGH_TO_LOW") {
        console.log("HIGH_TO_LOW")
        return [...products].sort(
            (prod1, prod2) => Number(prod2.discountedPrice) - Number(prod1.discountedPrice)
        );
    }
    if (sortby === "LOW_TO_HIGH") {
        console.log("LOW_TO_HIGH")
        return [...products].sort(
            (prod1, prod2) => Number(prod1.discountedPrice) -  Number(prod2.discountedPrice)
        );
    }
    return products;
}



export const sortProductsByRating = (products, rating) => {
    return [...products].filter((prod) => prod.rating >= rating);
};

export const sortProductsByRange = (products, range) => {
    return [...products].filter((prod) => Number(prod.discountedPrice) <= Number(range));
}

export const sortProductsByStatus = (products, status) => {
    if (status.includes("newArrivals")) {
        return [...products].filter((prod) => prod.arrivedNewly === true);
    }
    if (status.includes("sale")) {
        return [...products].filter((prod) => prod.sale === true);
    }
    return products;
}
