import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay } from "swiper";

const Slider = ({ sliders }) => {
  const swiperRef = useRef(null);

  const [current, setCurrent] = useState(0);

  return (
    <div className="relative select-none w-full">
      <Swiper
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          let index = swiperRef.current.realIndex;
          setCurrent(index);
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
      >
        {sliders.map((item, index) => {
          return (
            <SwiperSlide key={index} className=" border-r border-black w-full">
              <a href={item.href}>
                <img src={item.image} className="w-full" alt="" />
              </a>
            </SwiperSlide>
          );
        })}
        <div className=" absolute left-1/2 bottom-4 -translate-x-1/2 flex items-center justify-center z-[100]">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className={
              current === 0
                ? "mx-1 h-[6px] w-12 bg-orangePrimary cursor-pointer"
                : "mx-1 h-[6px] w-12 bg-bgGray cursor-pointer"
            }
          />
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className={
              current === 1
                ? "mx-1 h-[6px] w-12 bg-orangePrimary cursor-pointer"
                : "mx-1 h-[6px] w-12 bg-bgGray cursor-pointer"
            }
          />
        </div>
      </Swiper>
    </div>
  );
};

Slider.prototype = {
  sliders: PropTypes.array.isRequired,
};

export default Slider;
