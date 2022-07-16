import "./cartCard.css";

export function CheckOutCard({ products }) {
  return products.map((prod) => (
    <div className="card" key={prod._id}>
      <img className="ecom-img" src={prod.imageURL} alt="suit" />
      <div className="desc">
        <h1 className="prod-title padding-m">{prod.title}</h1>
        <p className="seller padding-h-xl">
          Sold by italiano
          <span className="rating">{prod.rating}⭐</span>
        </p>
        <div className="padding-h-l">
          <h2>
            Qty: <span className="productCount">{prod.qty}</span>
          </h2>
        </div>
      </div>
    </div>
  ));
}
