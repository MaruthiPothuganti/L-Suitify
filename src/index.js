import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ProductContext } from "./Context/ProductContext";
import { UserDataContext } from "./Context/UserDataContext";
import { AuthContext } from "./Context/AuthContext";
import { makeServer } from "./server";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
       <ProductContext>
          <UserDataContext>
            <App />
          </UserDataContext>
        </ProductContext>
        </AuthContext>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
