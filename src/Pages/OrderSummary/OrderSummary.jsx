import "./orderSummary.css";
import { useLocation } from "react-router-dom";
import { CheckOutCard } from "../../Components/CartCard/CheckOutCard";

export function OrderSummary() {
  const { state } = useLocation();
  const { orderId, products, amount, name, mobile } =
    JSON.parse(localStorage.getItem("userOrders")) ?? state;

  return (
    <main className="flex-center">
      <section className="orderStatus flex-center">
        <div className="padding-l">
          <h1 className="ordrConfirmation">Order Confirmed</h1>
          <h3>Order Id : {orderId}</h3>
          <h3>Total Amount :{amount}</h3>
          <h2> Order Will be delivered to :</h2>
          <h3>{name}</h3>
          <h3>Phone Number : {mobile}</h3>
        </div>
        <div className="padding-v-l">
          <h2 className="padding-s">Products Ordered: </h2>
          <div className="orderedProds">
            <CheckOutCard products={products} />
          </div>
        </div>
      </section>
    </main>
  );
}
