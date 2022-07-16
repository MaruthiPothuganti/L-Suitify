import "./cartSummary.css";

export function CartSummary({ cart, finalPrice }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((prod) => {
          return (
            <tr key={prod._id}>
              <td>{prod.title}</td>
              <td>{prod.qty}</td>
              <td>
                ₹{prod.discountedPrice} * {prod.qty}
              </td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td>Total</td>
          <td>₹ {finalPrice}</td>
        </tr>
      </tbody>
    </table>
  );
}
