import React from "react";
import HomeNews from "../component/HomeNews";
import Helmet from "../component/Helmet";

const Discoveryou = () => {
  return (
    <Helmet title="List News - Ananas">
      <div className=" select-none">
        <img
          src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/news_discover.png"
          alt=""
          className="m-auto my-12"
        />
        <div className="grid grid-cols-3">
          <img
            src="https://ananas.vn/wp-content/uploads/Corluray_bannerweb_desktop1920x1050.jpg"
            className=" col-span-2 h-full"
            alt=""
          />
          <div className="bg-[#f1f2f2] p-8 text-start">
            <p className=" font-semibold desktop:text-3xl tablet:text-xl">URBAS CORLURAY PACK</p>
            <p className=" font-semibold desktop:text-base tablet:text-sm">- SẮC THU KHÓ CƯỠNG -</p>
            <p className=" desktop:mt-6 tablet:mt-4">
              Urbas Corluray Pack đem đến lựa chọn “làm mới mình” với sự kết hợp
              5 gam màu mang sắc thu; phù hợp với những người trẻ năng động,
              mong muốn thể hiện cá tính riêng biệt khó trùng lặp.
            </p>
            <p>
              <a
                href="/urbas-corluray-pack/"
                className=" text-orangePrimary italic"
              >
                Đọc thêm
              </a>
              <span className="px-2 border-l border-[#808080] text-[#808080]">
                22.09.2020
              </span>
            </p>
          </div>
        </div>
        <div className="mt-4 mb-12">
          <HomeNews isHome={false} />
        </div>
      </div>
    </Helmet>
  );
};

export default Discoveryou;
