import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Category from "./assets/components/Category";
import '../src/index.css'
import Rootlayout from "./assets/components/Rootlayout";
import HomeProducts from "./assets/components/HomeProducts";
import ProductDetails from "./assets/components/ProductDetails";
import Countext from "./countext/Countext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Countext>
      <Routes>
        <Route path='' element={<Rootlayout />}>
          <Route path="" element={<HomeProducts />} />
          <Route path="category" element={<Category />} />
          <Route path="product-details/:categoryId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Countext>
  </BrowserRouter>
);
