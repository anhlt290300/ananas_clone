import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const Products = ({ data }) => {
  const [change, setChange] = useState(false);
  const pathname = useLocation().pathname + useLocation().search;
  
  useEffect(() => {
    setChange(true)
    let timeout = setTimeout(() => {
      setChange(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);
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
      <div className="w-full grid grid-cols-3 gap-5 py-12 opacity-100 transition-all duration-500 ease-out group-[.change]/products:hidden group-[.change]/products:opacity-0">
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
