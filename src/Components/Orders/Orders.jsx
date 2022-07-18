import { OrderSummary } from "../../Pages/OrderSummary/OrderSummary";
import "./orders.css";

export const Orders = () => {
  return (
    <div className="flex-column-center">
      {JSON.parse(localStorage.getItem("userOrders")) ? (
        <OrderSummary />
      ) : (
        <div className="padding-l">
          <h1>NO ORDERS HERE</h1>
        </div>
      )}
    </div>
  );
};
