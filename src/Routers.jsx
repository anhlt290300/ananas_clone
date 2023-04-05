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
import Cart from "./pages/Cart";
import Promotion from "./pages/Promotion";
import Discoveryou from "./pages/Discoveryou";
import HeaderMini from "./component/HeaderMini";
import ComingSoon from "./pages/ComingSoon";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderMini />
              <Header />
              <Outlet />
              <CartFixed />
              <SocialFixed />
              <Footer />
              <Loading />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/product-list" element={<ProductsPage />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/your-cart/" element={<Cart />} />
          <Route path="/promotion/clearance-sale/" element={<Promotion />} />
          <Route path="/discoveryou/" element={<Discoveryou />} />
          <Route path="/coming-soon/" element={<ComingSoon />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
