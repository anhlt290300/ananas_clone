import React from "react";
import { getShoesSale } from "../assets/shoes";
import Products from "../component/Products";
import Helmet from "../component/Helmet";

const Promotion = () => {
  const data = getShoesSale();
  return (
    <Helmet title="Clearance Sale - Ananas">
      <div className=" desktop-L:px-36 desktop:px-16">
        <img
          src="https://ananas.vn/wp-content/uploads/Clearance-Sale-Desktop.jpg"
          alt=""
          className=" desktop:block hidden"
        />
        <img
          className=" desktop:hidden block"
          src="https://ananas.vn/wp-content/uploads/Clearance-Sale-Mobile.jpg"
          alt=""
        />
        <div className=" col-span-3">
          <Products data={data} noBanner={true} />
        </div>
      </div>
    </Helmet>
  );
};

export default Promotion;
