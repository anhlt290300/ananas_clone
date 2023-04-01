import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const Products = ({ data }) => {
  return (
    <div className="w-full">
      <img
        src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg"
        alt=""
      />
      <div className="w-full grid grid-cols-3 gap-5 py-12">
        {data.map((item, index) => {
          return <ProductCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

Products.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Products;
