import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";
import { spilitProducts } from "../utils/spilitProduct";
const Products = ({ data, noBanner = false }) => {
  const search = useLocation().pathname + useLocation().search;

  const [products, setProducts] = useState(spilitProducts(data, 1));

  //console.log();
  const boxRef = useRef(null);

  useEffect(() => {
    setProducts(spilitProducts(data, 1));
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("scroll", () => {
        let screen = window.innerHeight;
        let scrollTop = document.documentElement.scrollTop;
        let scrollheight = boxRef.current.clientHeight;

        if (scrollheight !== 0) {
          if (screen + scrollTop + 1 >= scrollheight + 600) {
            //console.log("vao");

            if (products.length < data.length - 1) {
              setProducts(
                products.concat(spilitProducts(data, products.length / 20 + 1))
              );
            } else {
            }
          } else {
          }
        }
      });
      return () => window.removeEventListener("scroll", () => {});
    }, 200);
  }, [products, data, search]);

  return (
    <div className="w-full ">
      {!noBanner ? (
        <img
          src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg"
          alt=""
        />
      ) : (
        ""
      )}
      <div
        ref={(el) => (boxRef.current = el)}
        className="w-full grid desktop:grid-cols-3 tablet:grid-cols-2 gap-5 desktop:my-12 tablet:my-8 opacity-100 desktop:px-0 tablet:px-2"
      >
        {products?.map((item, index) => {
          return <ProductCard key={index} data={item} sale={noBanner} />;
        })}
      </div>
    </div>
  );
};

Products.propTypes = {
  data: PropTypes.array.isRequired,
  noBanner: PropTypes.bool,
};

export default Products;
