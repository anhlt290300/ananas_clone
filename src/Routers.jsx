import React from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";

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
              <Footer />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/product-list" element={<Products />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
