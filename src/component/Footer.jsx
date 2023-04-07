import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" bg-bgFooter desktop-L:py-16 desktop:py-8 px-10 grid-cols-4 gap-16 select-none desktop:grid tablet:hidden">
        <div className="w-full">
          <img
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Store.svg"
            alt=""
            className="w-full"
          />
          <a href="/stores">
            <p className="py-1 text-center bg-orangePrimary text-white text-2xl font-semibold mt-6">
              Tìm cửa hàng
            </p>
          </a>
        </div>

        <div className=" col-span-3">
          <div className="grid grid-cols-4 gap-12">
            <div className=" text-[#cccccc]">
              <div href="#">
                <p className="text-xl uppercase font-semibold text-white mb-6">
                  sản phẩm
                </p>
              </div>
              <a href="/product-list?gender=men&category=shoes&attribute=">
                <p className="">Giày Nam</p>
              </a>
              <a href="/product-list?gender=woman&category=shoes&attribute=">
                <p>Giày Nữ</p>
              </a>
              <a href="/product-list?gender=men,women&category=top,bottom,accessories&attribute=">
                <p>Thời trang & Phụ kiện</p>
              </a>
              <a href="/promotion/clearance-sale/">
                <p>Sale-off</p>
              </a>
            </div>
            <div className=" text-[#cccccc]">
              <div href="#">
                <p className="text-xl uppercase font-semibold text-white mb-6">
                  VỀ CÔNG TY
                </p>
              </div>
              <a href="/career">
                <p className="">Dứa tuyển dụng</p>
              </a>
              <a href="/franchise-policy">
                <p>Liên hệ nhượng quyền</p>
              </a>
              <a href="/comming-soon">
                <p>Về Ananas</p>
              </a>
              <div className="flex items-center justify-start"></div>
            </div>
            <div className=" text-[#cccccc]">
              <div href="#">
                <p className="text-xl uppercase font-semibold text-white mb-6">
                  HỖ TRỢ
                </p>
              </div>
              <a href="/faqs">
                <p className="">FAQs</p>
              </a>
              <a href="/privacy">
                <p>Bảo mật thông tin</p>
              </a>
              <a href="/policy">
                <p>Chính sách chung</p>
              </a>
              <a href="/search-order/">
                <p>Tra cứu đơn hàng</p>
              </a>
            </div>
            <div className=" text-[#cccccc]">
              <div href="#">
                <p className="text-xl uppercase font-semibold text-white mb-6">
                  LIÊN HỆ
                </p>
              </div>
              <a href="/comming-soon">
                <p className="">Email góp ý</p>
              </a>
              <a href="/">
                <p>Hotline</p>
              </a>
              <a href="/">
                <p>0963 429 749</p>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-12">
            <div>
              <p className="font-semibold text-xl text-white py-8">
                ANANAS SOCIAL
              </p>
              <div className="flex items-center justify-start">
                <a href="https://www.facebook.com/Ananas.vietnam/">
                  <img
                    className="mr-2"
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook.svg"
                    alt=""
                  />
                </a>
                <a href="https://www.instagram.com/ananasvn/">
                  <img
                    className="mr-2"
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram.svg"
                    alt=""
                  />
                </a>
                <a href="https://www.youtube.com/discoveryou">
                  <img
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-xl text-white py-8">
                ĐĂNG KÝ NHẬN MAIL
              </p>
              <div className="w-full flex">
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-4/5 pl-3 pr-2 outline-none py-2 focus:shadow focus:shadow-blue-400 mr-1"
                />
                <div className="w-[3rem] flex justify-center items-center">
                  <img
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/arrow_right.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className=" col-span-2">
              <a href="/">
                <img
                  src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Footer.svg"
                  alt=""
                  className="pt-8 h-5/6"
                />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4 desktop-L:my-12 desktop:my-4 desktop:mt-8 gap-12">
            <a href="http://online.gov.vn/Home/WebDetails/61921">
              <img
                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_bocongthuong.png"
                alt=""
              />
            </a>
            <div className=" col-span-3 flex items-center text-gray-400 tracking-wider">
              <p>Copyright © 2022 Ananas. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Tablet */}
      <div className=" bg-bgFooter select-none desktop:hidden tablet:block">
        <div className=" col-span-3">
          <div className="">
            <div className=" text-[#cccccc]">
              <div href="#"  className="flex items-center justify-between">
                <p className="text-xl uppercase font-semibold text-white">
                  sản phẩm
                </p>
                
              </div>
              <a href="/product-list?gender=men&category=shoes&attribute=">
                <p className="">Giày Nam</p>
              </a>
              <a href="/product-list?gender=woman&category=shoes&attribute=">
                <p>Giày Nữ</p>
              </a>
              <a href="/product-list?gender=men,women&category=top,bottom,accessories&attribute=">
                <p>Thời trang & Phụ kiện</p>
              </a>
              <a href="/promotion/clearance-sale/">
                <p>Sale-off</p>
              </a>
            </div>
            <div className=" text-[#cccccc]">
              <div href="#">
                <p className="text-xl uppercase font-semibold text-white mb-6">
                  VỀ CÔNG TY
                </p>
              </div>
              <a href="/career">
                <p className="">Dứa tuyển dụng</p>
              </a>
              <a href="/franchise-policy">
                <p>Liên hệ nhượng quyền</p>
              </a>
              <a href="/comming-soon">
                <p>Về Ananas</p>
              </a>
              <div className="flex items-center justify-start"></div>
            </div>
            <div className=" text-[#cccccc]">
              <div href="#">
                <p className="text-xl uppercase font-semibold text-white mb-6">
                  HỖ TRỢ
                </p>
              </div>
              <a href="/faqs">
                <p className="">FAQs</p>
              </a>
              <a href="/privacy">
                <p>Bảo mật thông tin</p>
              </a>
              <a href="/policy">
                <p>Chính sách chung</p>
              </a>
              <a href="/search-order/">
                <p>Tra cứu đơn hàng</p>
              </a>
            </div>
            <div className=" text-[#cccccc]">
              <div href="#">
                <p className="text-xl uppercase font-semibold text-white mb-6">
                  LIÊN HỆ
                </p>
              </div>
              <a href="/comming-soon">
                <p className="">Email góp ý</p>
              </a>
              <a href="/">
                <p>Hotline</p>
              </a>
              <a href="/">
                <p>0963 429 749</p>
              </a>
            </div>
          </div>
          <div className="">
            <div>
              <p className="font-semibold text-xl text-white py-8">
                ANANAS SOCIAL
              </p>
              <div className="flex items-center justify-start">
                <a href="https://www.facebook.com/Ananas.vietnam/">
                  <img
                    className="mr-2"
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook.svg"
                    alt=""
                  />
                </a>
                <a href="https://www.instagram.com/ananasvn/">
                  <img
                    className="mr-2"
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram.svg"
                    alt=""
                  />
                </a>
                <a href="https://www.youtube.com/discoveryou">
                  <img
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold text-xl text-white py-8">
                ĐĂNG KÝ NHẬN MAIL
              </p>
              <div className="w-full flex">
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-4/5 pl-3 pr-2 outline-none py-2 focus:shadow focus:shadow-blue-400 mr-1"
                />
                <div className="w-[3rem] flex justify-center items-center">
                  <img
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/arrow_right.jpg"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className=" col-span-2">
              <a href="/">
                <img
                  src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Footer.svg"
                  alt=""
                  className="pt-8 h-5/6"
                />
              </a>
            </div>
          </div>
          <div className="w-full">
            <a href="/stores">
              <p className="py-1 text-center bg-orangePrimary text-white text-2xl font-semibold mt-6">
                Tìm cửa hàng
              </p>
            </a>
          </div>
          <div className="">
            <a href="http://online.gov.vn/Home/WebDetails/61921">
              <img
                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_bocongthuong.png"
                alt=""
              />
            </a>
            <div className=" col-span-3 flex items-center text-gray-400 tracking-wider">
              <p>Copyright © 2022 Ananas. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
