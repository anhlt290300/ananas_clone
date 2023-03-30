import React from "react";
import PropTypes from "prop-types";

const HomeNews = ({ data }) => {
  return (
    <div className="mt-12 text-center select-none">
      <p className="text-3xl font-semibold">TIN TỨC & BÀI VIẾT</p>
      <div className="grid grid-cols-2 px-32 py-12 gap-10 text-start">
        {data.map((item, index) => {
          return (
            <div key={index} className="w-full">
              <a href={item.href} className=" relative">
                <img src={item.image} className="w-full h-[45vh] " alt="" />
              </a>
              <div className="mt-8">
                <a href={item.href} className="text-2xl font-semibold">
                  {item.title}
                </a>
                <p className="mt-2">
                  {item.description}{" "}
                  <a href={item.href} className="italic text-orangePrimary hover:underline">
                    Đọc thêm
                  </a>{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

HomeNews.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HomeNews;
