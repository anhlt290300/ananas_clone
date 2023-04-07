import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderCollection = ({ sliders }) => {
  const swiperRef = useRef(null);

  const [current, setCurrent] = useState(0);

  //console.log(sliders)
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
      >
        {sliders.map((item, index) => {
          return (
            <SwiperSlide key={index} className=" w-full">
              <a href={item.href} className=" relative">
                <img
                  src={item.image}
                  className="w-full desktop:h-[45vh] tablet:h-[30vh] border-r border-black"
                  alt=""
                />
              </a>
              <div className="mt-8 text-start">
                <a href={item.href} className="text-2xl font-semibold">{item.title}</a>
                <p className="mt-2">{item.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className={
          sliders.length > 1
            ? "absolute left-1/2 desktop:top-[calc(45vh-16px)] tablet:top-[calc(30vh-16px)] -translate-x-1/2 flex items-center justify-center z-[100]"
            : "hidden"
        }
      >
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className={
            current === 0
              ? "mx-1 desktop:h-[6px] tablet:h-[5px] desktop:w-12 tablet:w-10 bg-orangePrimary cursor-pointer"
              : "mx-1 desktop:h-[6px] tablet:h-[5px] desktop:w-12 tablet:w-10 bg-bgGray cursor-pointer"
          }
        />
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className={
            current === 1
              ? "mx-1 desktop:h-[6px] tablet:h-[5px] desktop:w-12 tablet:w-10 bg-orangePrimary cursor-pointer"
              : "mx-1 desktop:h-[6px] tablet:h-[5px] desktop:w-12 tablet:w-10 bg-bgGray cursor-pointer"
          }
        />
      </div>
    </div>
  );
};
SliderCollection.propTypes = {
  sliders: PropTypes.array.isRequired,
};

export default SliderCollection;
