import React from "react";
import PropTypes from "prop-types";

const HomeBuy = ({ data }) => {
  return (
    <div className=" desktop-L:mt-12 desktop:mt-4 text-center select-none">
      <p className="text-3xl font-semibold py-8">DANH MỤC MUA HÀNG</p>
      <div className="grid grid-cols-3 gap-3">
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
    </div>
  );
};

HomeBuy.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HomeBuy;
