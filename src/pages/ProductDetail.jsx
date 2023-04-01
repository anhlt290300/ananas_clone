import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { shoesData } from "../assets/shoes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
const ProductDetail = () => {
  const id = useParams().id;
  const shoe = shoesData.find((el) => el.info.id.toLowerCase() === id);
  const { image, info } = shoe;
  const swiperRef = useRef(null);
  const [current, setCurrent] = useState(0);
  return (
    <div className="my-16 py-4 grid grid-cols-2 gap-4 px-36 select-none">
      <div className="">
        <div className=" relative">
          <img src={image[current].href} alt="" className="w-full" />
          <div className=" absolute right-5 bottom-5 cursor-pointer opacity-60 hover:opacity-100">
            <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg" alt="" />
          </div>
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "black",
          }}
          slidesPerView={4}
          spaceBetween={2}
          className="mt-6"
          navigation={true}
          modules={[Navigation]}
          //   onBeforeInit={(swiper) => {
          //     swiperRef.current = swiper;
          //   }}
          //   onSlideChange={() => {
          //     let index = swiperRef.current.realIndex;
          //     setCurrent(index);
          //   }}
        >
          {image.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item.href} onClick={() => setCurrent(index)} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetail;
