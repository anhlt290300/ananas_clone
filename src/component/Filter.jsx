import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
const Filter = ({ type, type_item, filters }) => {
  
  const [status, setStatus] = useState(true);
  const [style, setStyle] = useState(true);
  const [productline, setProductline] = useState(true);
  const [price, setPrice] = useState(true);
  const [colection, setColection] = useState(true);
  const [sizeanother, setSizeanother] = useState(true);
  const [material, setMaterial] = useState(true);
  const [sizeshoe, setSizeshoe] = useState(true);
  const [color, setColor] = useState(true);

  const toggle = (title) => {
    if (title === "TRẠNG THÁI  ") setStatus((status) => !status);
    else if (title === "KIỂU DÁNG  ") setStyle((style) => !style);
    else if (title === "DÒNG SẢN PHẨM  ")
      setProductline((productline) => !productline);
    else if (title === "GIÁ  ") setPrice((price) => !price);
    else if (title === "BỘ SƯU TẬP  ") setColection((colection) => !colection);
    else if (title === "SIZE SẢN PHẨM KHÁC  ")
      setSizeanother((sizeanother) => !sizeanother);
    else if (title === "CHẤT LIỆU  ") setMaterial((material) => !material);
    else if (title === "SIZE GIÀY  ") setSizeshoe((sizeshoe) => !sizeshoe);
    else if (title === "MÀU SẮC  ") setColor((color) => !color);
  };

  const check = (title) => {
    if (title === "TRẠNG THÁI  ") return status;
    else if (title === "KIỂU DÁNG  ") return style;
    else if (title === "DÒNG SẢN PHẨM  ") return productline;
    else if (title === "GIÁ  ") return price;
    else if (title === "BỘ SƯU TẬP  ") return colection;
    else if (title === "SIZE SẢN PHẨM KHÁC  ") return sizeanother;
    else if (title === "CHẤT LIỆU  ") return material;
    else if (title === "SIZE GIÀY  ") return sizeshoe;
    else if (title === "MÀU SẮC  ") return color;
    else return false;
  };

  return (
    <div className="py-8 w-full select-none">
      <div className="flex items-center justify-center pb-4 border-b-2 border-black">
        {type.map((item, index) => {
          return (
            <Link key={index} to={item.href} id={item.id}>
              <p
                className={
                  index === 1
                    ? "px-4 font-semibold text-xl text-[#999] hover:text-black text-start border-x-2 border-bgGray"
                    : "px-4 font-semibold text-xl text-[#999] hover:text-black text-start"
                }
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="py-3 border-b-2 border-black">
        {type_item.map((item, index) => {
          return (
            <p
              className="px-4 py-2 hover:bg-bgGray hover:text-black text-start"
              key={index}
              id={item.id}
            >
              {item.title}
            </p>
          );
        })}
      </div>
      {filters.map((item, index) => {
        return (
          <div
            key={index}
            className={
              check(item.title)
                ? "py-6 border-b-2 border-[#ccc] border-dashed group relative is-show"
                : "py-6 border-b-2 border-[#ccc] border-dashed group relative"
            }
          >
            <p
              onClick={() => toggle(item.title)}
              className={
                check(item.title)
                  ? "text-xl font-semibold text-orangePrimary flex items-center cursor-pointer"
                  : "text-xl font-semibold text-black flex items-center cursor-pointer"
              }
            >
              <span className="mr-2">{item.title} </span>
              <img
                className={check(item.title) ? "rotate-180" : ""}
                src={
                  !check(item.title)
                    ? "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_down_black.png"
                    : "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_up_orange.png"
                }
                alt=""
              />
            </p>
            <div
              className={
                item.style === "normal"
                  ? " static hidden  mt-2 group-[.is-show]:block"
                  : item.style === "size"
                  ? " static hidden grid-cols-4 gap-1 mt-2 group-[.is-show]:grid"
                  : " static hidden grid-cols-6 mt-2 group-[.is-show]:grid gap-2"
              }
            >
              {item.options.map((item_, index_) => {
                return (
                  <p
                    className={
                      item.style === "normal"
                        ? "px-4 py-2 hover:bg-bgGray hover:text-black text-start"
                        : item.style === "size"
                        ? "py-6 flex items-center justify-center border border-[#ccc] hover:bg-bgGray hover:text-black text-start"
                        : "p-1 flex items-center justify-center hover:bg-bgGray hover:text-black text-start"
                    }
                    key={index_}
                    id={item_.id}
                  >
                    <span
                      style={
                        item.style === "color"
                          ? {
                              backgroundColor: `${item_.title}`,
                              width: "28px",
                              height: "28px",
                              display: "block",
                              border: "1px solid black",
                            }
                          : item.style === "size"
                          ? {
                              fontSize: "1.3rem",
                            }
                          : {}
                      }
                    >
                      {item.style !== "color" ? item_.title : ""}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  type: PropTypes.array.isRequired,
  type_item: PropTypes.array.isRequired,
};

export default Filter;
