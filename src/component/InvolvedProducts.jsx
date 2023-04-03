import React, { useEffect, useRef, useState } from "react";
import { getRandomShoes } from "../assets/shoes";
import { Swiper, SwiperSlide } from "swiper/react";
const InvolvedProducts = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(getRandomShoes(12));
  }, []);

  const swiperRef = useRef(null);
  return (
    <div className=" select-none py-16  border-t-2 border-[#ccc] border-dashed text-center">
      <p className=" font-semibold text-3xl mb-12">SẢN PHẨM LIÊN QUAN</p>
      <div className="flex items-center justify-center px-36 relative">
        <div
          onClick={() => swiperRef.current.slideNext()}
          className=" absolute top-1/2 left-24 -translate-y-1/2 opacity-70 hover:opacity-100 cursor-pointer"
        >
          <img
            className="w-full h-full"
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/arr_left.png"
            alt=""
          />
        </div>
        <Swiper
          className=""
          loop={true}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
        >
          {data?.map((item, index) => {
            return (
              <SwiperSlide key={index} className=" ">
                <a href={item.href}>
                  <img src={item.images[0].href} alt="" />
                  {item.type === "Limited Edition" ? (
                    <div className=" absolute left-0 top-6 text-sm px-2 py-1 text-white font-semibold italic bg-[#004e9b]">
                      Limited Edition
                    </div>
                  ) : (
                    ""
                  )}
                  {item.type === "Online Only" ? (
                    <div className=" absolute left-0 top-6 text-sm px-2 py-1 text-white font-semibold italic bg-[#303030]">
                      Online Only
                    </div>
                  ) : (
                    ""
                  )}
                </a>
                <div className="text-center mt-2">
                  <a
                    href={item.href}
                    className=" font-semibold hover:text-orangePrimary my-2"
                  >
                    {item.name}
                  </a>
                  <p className="my-2">{item.color}</p>
                  <div className=" font-semibold my-2">
                    <span>{item.saleprice}</span>
                    <span className=" text-[#808080] font-normal line-through ml-4">
                      {item.realprice}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          onClick={() => swiperRef.current.slidePrev()}
          className=" absolute top-1/2 right-24 -translate-y-1/2 opacity-70 hover:opacity-100 cursor-pointer"
        >
          <img
            className="w-full h-full"
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/arr_right.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default InvolvedProducts;
