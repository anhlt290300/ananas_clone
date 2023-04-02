import React from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";
import CartFixed from "./component/CartFixed";
import SocialFixed from "./component/SocialFixed";
import ProductDetail from "./pages/ProductDetail";
import Loading from "./component/Loading";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
              <CartFixed />
              <SocialFixed />
              <Footer />
              <Loading/>
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/product-list" element={<ProductsPage />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
