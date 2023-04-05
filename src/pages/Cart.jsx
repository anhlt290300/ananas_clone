import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCartCard from "../component/ProductCartCard";
import HintCart from "../component/HintCart";
import { getRandomAccessories } from "../assets/accessories";
import { getTotal } from "../utils/convertTotal";

const Cart = () => {
  const listItems = useSelector((state) => state.cart.cart);
  const data = getRandomAccessories(14);
  const noItem = listItems.length < 1 ? true : false;
  const [total, setTotal] = useState(getTotal(listItems));
  const [vourcher, setVoucher] = useState(false);
  const [text, setText] = useState("");
  const applyVourcher = () => {
    setVoucher(true);
  };

  useEffect(() => {
    setTotal(getTotal(listItems));
  }, [listItems]);

  return (
    <div className="grid grid-cols-3 gap-6 py-8 px-32 select-none">
      <div className={noItem ? " col-span-3 mb-16" : " col-span-2 "}>
        <div className={noItem ? "hidden" : "block"}>
          <HintCart data={data} />
        </div>
        <div
          className={
            noItem
              ? "border-b-2 border-black pb-4 mb-12"
              : "border-b-2 border-black pb-4 my-12"
          }
        >
          <p
            className={
              !noItem
                ? "bg-[#f1f1f1] text-xl font-semibold px-6 py-2"
                : " text-3xl font-semibold px-6 py-2 text-center"
            }
          >
            {noItem ? "GIỎ HÀNG CỦA BẠN" : "GIỎ HÀNG"}
          </p>
          {listItems.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index !== 0
                    ? "py-6 border-t-2 border-borderColor border-dashed"
                    : "py-6"
                }
              >
                <ProductCartCard
                  id={item.id}
                  category={item.category}
                  size={item.size}
                  quantity={item.quantity}
                />
              </div>
            );
          })}
        </div>
        {noItem && (
          <p className="text-center">
            Bạn đang không có sản phẩm nào trong giỏ hàng!
          </p>
        )}
        <div
          className={
            noItem
              ? "flex justify-center items-end mt-12"
              : "flex justify-between items-end"
          }
        >
          {!noItem && (
            <div className="w-[16rem] py-2 text-center text-white font-semibold text-lg  bg-[#303030]">
              XÓA HẾT
            </div>
          )}
          <div className="w-[16rem] py-2 text-center text-white font-semibold text-lg bg-[#303030] ">
            <a className="hover:text-white" href="/product-list/">
              QUAY LẠI MUA HÀNG
            </a>
          </div>
        </div>
      </div>
      <div className={noItem ? "hidden" : " block bg-[#f1f1f1] p-5 h-fit"}>
        <p className=" font-semibold text-xl">ĐƠN HÀNG</p>
        <div className="border-b-2 border-black mt-2" />
        <div className="mt-8">
          <p className=" font-semibold text-lg">NHẬP MÃ KHUYẾN MÃI</p>
          <div className="flex py-2">
            <input
              onChange={(el) => {
                setText(el.target.value);
                setVoucher(false);
              }}
              type="text"
              name=""
              value={text}
              className="px-3 text-xl outline-none font-semibold w-[15rem] focus:shadow focus:shadow-blue-300 focus:drop-shadow-md"
            />
            <div
              onClick={() => applyVourcher()}
              className=" bg-orangePrimary text-white py-2 font-semibold w-full px-4 text-center cursor-pointer"
            >
              ÁP DỤNG
            </div>
          </div>
          <p className=" text-orangePrimary italic text-sm mt-2">
            {vourcher && text === ""
              ? "Vui lòng nhập mã khuyến mãi"
              : vourcher && text !== ""
              ? "Mã khuyến mãi không hợp lệ do sai cú pháp hoặc quá thời hạn áp dụng."
              : ""}
          </p>
          <div className="border-y-2 border-borderColor border-dashed mt-4 py-8 font-semibold text-[#808080]">
            <p className="flex justify-between items-center">
              <span>Đơn hàng</span>
              <span>{total} VND</span>
            </p>
            <p className="flex justify-between items-center mt-2">
              <span>Giảm</span>
              <span className="font-normal">0 VND</span>
            </p>
          </div>
          <p className="flex items-center justify-between my-8 text-black font-semibold">
            <span>TẠM TÍNH</span>
            <span className=" text-xl">{total} VND</span>
          </p>
          <div className=" bg-orangePrimary text-white font-semibold py-6 text-xl text-center cursor-pointer">
            TIẾP TỤC THANH TOÁN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
