import "./orderSummary.css";
import { useLocation } from "react-router-dom";
import { CheckOutCard } from "../../Components/CartCard/CheckOutCard";

export function OrderSummary() {
  const { state } = useLocation();
  const { orderId, products, amount, name, mobile } = state;
  return (
    <main className="flex-center">
      <section className="checkout flex-center">
        <div>
          <h1>Order Confirmed</h1>
          <h3>Order Id : {orderId}</h3>
          <h3>Total Amount :{amount}</h3>
          <h2> Order Will be delivered to :</h2>
          <h3>{name}</h3>
          <h3>Phone Number : {mobile}</h3>
        </div>
        <div>
          <CheckOutCard products={products} />
        </div>
      </section>
    </main>
  );
}
