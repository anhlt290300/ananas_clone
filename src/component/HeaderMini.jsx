import React from "react";
import { useSelector } from "react-redux";
const HeaderMini = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className=" select-none bg-[#303030] px-12 py-1 flex justify-end items-center text-white text-xs">
      <nav className="flex">
        <a href="/search-order" className="flex items-center px-2">
          <img
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_tra_cuu_don_hang.svg"
            className="h-full"
            alt=""
          />
          <span className="ml-2">Tra cứu đơn hàng</span>
        </a>
        <a href="/stores" className="flex items-center px-2">
          <img
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_tim_cua_hang.svg"
            className="h-full"
            alt=""
          />
          <span className="ml-2">Tìm cửa hàng</span>
        </a>
        <a href="/your-wishlist" className="flex items-center px-2">
          <img
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_heart_header.svg"
            className="h-full"
            alt=""
          />
          <span className="ml-2">Yêu thích</span>
        </a>
        <a href="/coming-soon" className="flex items-center px-2">
          <img
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images//svg/icon_dang_nhap.svg "
            className="h-full"
            alt=""
          />
          <span className="ml-2">Đăng nhập</span>
        </a>
        <a href="/your-cart/" className="flex items-center px-2">
          <img
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_gio_hang.svg"
            className="h-full"
            alt=""
          />
          <span className="ml-2">Giỏ hàng ({cart.length})</span>
        </a>
      </nav>
    </div>
  );
};

export default HeaderMini;
