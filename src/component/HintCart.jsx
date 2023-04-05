import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay } from "swiper";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { ToggleLoad } from "../redux/loadingSlice";

const HintCart = ({ data }) => {
  const swiperRef = useRef(null);
  const dispatch = useDispatch();

  const handleAdd = (id, size, quantity, category) => {
    dispatch(
      addItem({
        id: id,
        size: size,
        quantity: quantity,
        category: category,
      })
    );
    dispatch(ToggleLoad())
  };
  return (
    <div>
      <p className="text-base font-semibold my-4">BẠN CÓ CẦN THÊM?</p>
      <div className=" border-b-2 border-black" />
      <div className="p-6">
        <Swiper
          loop={true}
          spaceBetween={1}
          slidesPerView={2}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} className="h-full">
                <div className="flex items-center justify-start h-[8rem]">
                  <a href={item.href} className="h-full">
                    <img src={item.images[0].href} className="h-full" alt="" />
                  </a>
                  <div className="flex flex-col justify-between h-full ml-5 text-black font-semibold">
                    <a href={item.href}>
                      <span className="text-xs">{item.name}</span>
                    </a>
                    <p className="text-xs">{item.color}</p>
                    <p className=" text-orangePrimary text-sm">
                      {item.saleprice}
                    </p>
                    <div
                      onClick={() =>
                        handleAdd(item.id, item.sizes[0], 1, item.category)
                      }
                      className="py-2 w-[8rem] bg-orangePrimary text-white font-semibold text-center cursor-pointer"
                    >
                      THÊM
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className=" cursor-pointer opacity-40 hover:opacity-100 absolute left-0 top-1/2 -translate-y-1/2  z-[100]"
          >
            <img
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/arr_left.png"
              alt=""
            />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className=" cursor-pointer opacity-40 hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2  z-[100]"
          >
            <img
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/arr_right.png"
              alt=""
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

HintCart.prototype = {
  data: PropTypes.array.isRequired,
};

export default HintCart;
