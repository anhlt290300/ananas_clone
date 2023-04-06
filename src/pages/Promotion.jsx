import React from "react";
import { getShoesSale } from "../assets/shoes";
import Products from "../component/Products";
import Helmet from "../component/Helmet";

const Promotion = () => {
  const data = getShoesSale();
  return (
    <Helmet title="Clearance Sale - Ananas">
      <div className="px-36">
        <img
          src="https://ananas.vn/wp-content/uploads/Clearance-Sale-Desktop.jpg"
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
