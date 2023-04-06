import React, {  } from "react";
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
import Wishlist from "./pages/Wishlist";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
import { getShoesFromId } from "./assets/shoes";
import { getTopFromId } from "./assets/top";
import { getAccessoriesFromId } from "./assets/accessories";


const App = () => {
  return (
    <>
      <HeaderMini />
      <Header />
      <Outlet />
      <CartFixed />
      <SocialFixed />
      <Footer />
      <Loading />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={
        <>
          <HeaderMini />
          <Header />
          <ErrorPage />
          <Footer />
        </>
      }
    >
      <Route index element={<Home />} />
      <Route path="/product-list" element={<ProductsPage />} />
      <Route
        path="/product-detail/:id"
        loader={({ params }) => {
          let id = params.id;
          let item =
            getShoesFromId(id.toUpperCase()) !== undefined
              ? getShoesFromId(id.toUpperCase())
              : getTopFromId(id.toUpperCase()) !== undefined
              ? getTopFromId(id.toUpperCase())
              : getAccessoriesFromId(id.toUpperCase());
          if (item === undefined) {
            throw new Response("Bad Request", { status: 400 });
          } else return item;
        }}
        element={<ProductDetail />}
        errorElement={<ErrorPage />}
      />
      <Route path="/your-cart/" element={<Cart />} />
      <Route path="/promotion/clearance-sale/" element={<Promotion />} />
      <Route path="/discoveryou/" element={<Discoveryou />} />
      <Route path="/coming-soon/" element={<ComingSoon />} />
      <Route path="/your-wishlist/" element={<Wishlist />} />
    </Route>
  )
);

export default router;
