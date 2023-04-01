import React, { useState } from "react";

const CartFixed = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen((open) => !open)}
      className={
        open
          ? " fixed right-0 top-1/4 bg-orangePrimary text-center text-white px-3 py-4 cursor-pointer select-none group open"
          : " fixed right-0 top-1/4 bg-orangePrimary text-center text-white px-3 py-4 cursor-pointer select-none group"
      }
    >
      <p className=" font-semibold">1</p>
      <img
        src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_gio_hang.svg"
        alt=""
        className=" bg-cover"
      />
      <div className=" w-72 bg-bgGray absolute top-0 h-0 right-full text-start overflow-hidden text-black transition-all duration-300 ease-in group-[.open]:h-[calc(315px+120*2px)]">
        <div className="h-2 w-2 absolute top-4 left-full -translate-x-1/2 bg-orangePrimary rotate-45" />
        <div className="w-full h-full p-3">
          <p className=" font-semibold">GIỎ HÀNG (1)</p>
          <div className="my-3 pb-2 border-y-2 border-bgFooter max-h-[360px] overflow-y-auto">
            <div className="h-[116px] pt-4 border-b-2 border-borderColor border-dashed">
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://ananas.vn/wp-content/uploads/Pro_AV00153_1.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-between items-start col-span-2">
                  <p className=" text-[0.65rem] font-semibold">
                    Vintas Soda Pop - Low Top - Emerald
                  </p>
                  <div className="text-[0.6rem] w-full">
                    <p className=" font-semibold">680.000 VNĐ</p>
                    <div className="flex items-center justify-between w-full pr-2 font-light">
                      <span>Sizes:</span>
                      <span>35</span>
                    </div>
                    <div className="flex items-center justify-between w-full pr-2 font-light">
                      <span>Số lượng:</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[116px] pt-4  border-b-2 border-borderColor border-dashed">
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://ananas.vn/wp-content/uploads/Pro_AV00153_1.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-between items-start col-span-2">
                  <p className=" text-[0.65rem] font-semibold">
                    Vintas Soda Pop - Low Top - Emerald
                  </p>
                  <div className="text-[0.6rem] w-full">
                    <p className=" font-semibold">680.000 VNĐ</p>
                    <div className="flex items-center justify-between w-full pr-2 font-light">
                      <span>Sizes:</span>
                      <span>35</span>
                    </div>
                    <div className="flex items-center justify-between w-full pr-2 font-light">
                      <span>Số lượng:</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[116px] pt-4  border-b-2 border-borderColor border-dashed">
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://ananas.vn/wp-content/uploads/Pro_AV00153_1.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-between items-start col-span-2">
                  <p className=" text-[0.65rem] font-semibold">
                    Vintas Soda Pop - Low Top - Emerald
                  </p>
                  <div className="text-[0.6rem] w-full">
                    <p className=" font-semibold">680.000 VNĐ</p>
                    <div className="flex items-center justify-between w-full pr-2 font-light">
                      <span>Sizes:</span>
                      <span>35</span>
                    </div>
                    <div className="flex items-center justify-between w-full pr-2 font-light">
                      <span>Số lượng:</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[116px] pt-4  border-b-2 border-borderColor border-dashed">
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://ananas.vn/wp-content/uploads/Pro_AV00153_1.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-between items-start col-span-2">
                  <p className=" text-[0.65rem] font-semibold">
                    Vintas Soda Pop - Low Top - Emerald
                  </p>
                  <div className="text-[0.6rem] w-full">
                    <p className=" font-semibold">680.000 VNĐ</p>
                    <div className="flex items-center justify-between w-full pr-2 font-light">
                      <span>Sizes:</span>
                      <span>35</span>
                    </div>
                    <div className="flex items-center justify-between w-full pr-2 font-light">
                      <span>Số lượng:</span>
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className=" font-semibold text-xs w-full flex items-center justify-between">
            <span>Tổng cộng:</span>
            <span className="text-orangePrimary">680.000 VNĐ</span>
          </p>
          <div className="mt-3 py-2 bg-orangePrimary text-white font-semibold text-center cursor-pointer">
            THANH TOÁN
          </div>
          <div className="mt-3 py-2 bg-[#303030] text-white font-semibold text-center cursor-pointer">
            THÊM VÀO YÊU THÍCH
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartFixed;
