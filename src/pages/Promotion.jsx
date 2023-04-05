import React from "react";
import {  getShoesSale } from "../assets/shoes";
import Products from "../component/Products";

const Promotion = () => {
  const data = getShoesSale();
  return (
    <div className="px-36">
      <img
        src="https://ananas.vn/wp-content/uploads/Clearance-Sale-Desktop.jpg"
        alt=""
      />
      <div className=" col-span-3">
        <Products data={data} noBanner={true} />
      </div>
    </div>
  );
};

export default Promotion;
