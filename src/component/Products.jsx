import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const Products = ({ data }) => {
  const [change, setChange] = useState(true);
  const search = useLocation().pathname + useLocation().search;

  useEffect(() => {
    setChange(false);
    let timeout = setTimeout(() => {
      setChange(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [search]);
  return (
    <div
      className={
        change ? "w-full group/products change" : "w-full group/products"
      }
    >
      <img
        src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg"
        alt=""
      />
      <div className="w-full grid grid-cols-3 gap-5 py-12 opacity-0 transition-all delay-100 duration-500 ease-out group-[.change]/products:opacity-100">
        {change &&
          data.map((item, index) => {
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
