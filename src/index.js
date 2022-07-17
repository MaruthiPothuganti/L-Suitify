import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ProductContext } from "./Context/ProductContext";
import { AuthContext } from "./Context/AuthContext";
import { makeServer } from "./server";
import { WishlistContext } from "./Context/WishlistContext";
import { CartListContext } from "./Context/CartContext";
import {AddressContext} from "./Context/AddressContext"


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <WishlistContext>
          <AddressContext>
          <CartListContext>
            <ProductContext>
              <App />
            </ProductContext>
            </CartListContext>
            </AddressContext>
          </WishlistContext>
        </AuthContext>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
