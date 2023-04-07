import React from "react";
import Helmet from "../component/Helmet";

const ComingSoon = () => {
  return (
    <Helmet title="Coming Soon - Ananas">
      <div
        style={{
          backgroundImage: `url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/bg_comingsoon.jpg')`,
        }}
        className=" desktop:h-screen tablet:h-[90vh] w-screen flex flex-col items-center justify-center text-white select-none bg-cover bg-no-repeat"
      >
        <p className=" desktop:text-7xl tablet:text-6xl font-semibold desktop:mt-12 tablet:mt-16">COMING SOON</p>
        <p className=" desktop:mt-32 tablet:mt-20 desktop:text-base tablet:text-sm">Đăng kí ngay Email để nhận thông tin sớm nhất!</p>
        <div className="flex items-center h-fit mt-2">
          <input
            type="email"
            className=" outline-none text-black py-2 px-3 desktop:w-96 tablet:w-72 focus:shadow-lg focus:shadow-blue-600"
          />
          <div className=" bg-orangePrimary h-full px-3 py-1 cursor-pointer">
            <img
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/mobile/arrow_right.png"
              className="h-8"
              alt=""
            />
          </div>
        </div>
        <p className="mt-10 desktop:text-base tablet:text-sm">Theo dõi chúng tôi trên các trang mạng xã hội:</p>
        <div className="flex items-center justify-center mt-2">
          <a href="https://www.facebook.com/Ananas.vietnam/" className="mx-2">
            <img
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/white_fb.png"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/Ananas.vietnam/" className="mx-2">
            <img
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/white_ins.png"
              alt=""
            />
          </a>
          <a href="https://www.facebook.com/Ananas.vietnam/" className="mx-2">
            <img
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/white_youtube.png"
              alt=""
            />
          </a>
        </div>
        <a
          href="/"
          className=" bg-orangePrimary desktop:py-8 desktop:px-24 tablet:py-4 tablet:px-16 font-semibold desktop:text-xl tablet:text-lg mt-16 hover:text-white"
        >
          QUAY LẠI TRANG CHỦ
        </a>
      </div>
    </Helmet>
  );
};

export default ComingSoon;
