import React, { useState } from "react";
import PropTypes from "prop-types";

const HomeBuy = ({ data }) => {
  const [listOpen, setListOpen] = useState(data.map((el) => false));
  const toggleOpen = (index) => {
    let listOpen_ = listOpen.map((el, i) => {
      if (i !== index) return el;
      else return !el;
    });
    setListOpen(listOpen_);
  };
  return (
    <div className=" desktop-L:px-32 desktop:px-16 text-center select-none">
      <p className="text-3xl font-semibold py-8 desktop:block hidden">
        DANH MỤC MUA HÀNG
      </p>
      <div className=" desktop:grid hidden grid-cols-3 gap-3 border-y-2">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="w-full h-[33vh] relative text-center after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.3)]"
            >
              <div className=" absolute w-full h-full top-0 left-0 z-[10] pt-12 text-white font-semibold">
                <a href={item.href}>
                  <p className="mb-4 text-xl">{item.title}</p>
                </a>
                {item.option.map((item_, index_) => {
                  return (
                    <a href={item_.href} key={index_}>
                      <p className="my-2">{item_.title_option}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className=" desktop:hidden tablet:block px-2 border-y-2 border-black overflow-hidden">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                listOpen[index]
                  ? "group open"
                  : index !== data.length - 1
                  ? "group close"
                  : "group"
              }
            >
              <div className="">
                <p
                  onClick={() => toggleOpen(index)}
                  className="flex justify-between items-center p-8 group-[.close]:border-b-2 border-dashed border-borderColor"
                >
                  <span className="font-semibold text-3xl text-black group-[.open]:text-orangePrimary ">
                    {item.title}
                  </span>
                  <img
                    src={
                      listOpen[index]
                        ? "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/mobile/arrow_up_orange.png"
                        : "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/mobile/mb_down_black.png"
                    }
                    alt=""
                  />
                </p>
                <div className="border-y-2 border-dashed border-borderColor px-8 bg-[#f2f2f2] transition-all duration-700 ease-in-out h-0 invisible overflow-hidden opacity-0 group-[.open]:h-fit group-[.open]:visible group-[.open]:opacity-100">
                  {item.option.map((item_, index_) => {
                    return (
                      <a
                        href={item_.href}
                        key={index_}
                        className=" block first:mt-4 last:mb-4"
                      >
                        <p className="text-start text-3xl py-3 ">
                          {item_.title_option}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

HomeBuy.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HomeBuy;
