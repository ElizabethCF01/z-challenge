import { Routes, Route } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};
export default Router;
