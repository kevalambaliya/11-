import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
