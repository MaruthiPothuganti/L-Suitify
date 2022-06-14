import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ProductContext } from "./Context/ProductContext";
import { makeServer } from "./server";
import { UserDataContext } from "./Context/UserDataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <ProductContext>
          <UserDataContext>
            <App />
          </UserDataContext>
        </ProductContext>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
