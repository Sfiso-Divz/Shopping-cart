import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Header />} />
        <Route path={"/product-list"} element={<ProductList />} />
        <Route path={"/product-details/:id"} element={<ProductDetails />} />
        <Route path={"/cart"} element={<CartList />} />
      </Routes>
    </div>
  );
}

export default App;
