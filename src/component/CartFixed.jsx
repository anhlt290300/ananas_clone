import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoesFromId } from "../assets/shoes";
import { getTopFromId } from "../assets/top";
import { getAccessoriesFromId } from "../assets/accessories";
import { getTotal } from "../utils/convertTotal";
import { isChange } from "../redux/cartfixedSlice";

const CartFixed = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  let numberItem = 0;
  cart.forEach((el) => (numberItem += el.quantity));
  const [data, setData] = useState([]);

  const [total, setTotal] = useState(getTotal(cart));

  const flag_change = useSelector((state) => state.changeCart.change);

  const dispatch = useDispatch();

  useEffect(() => {
    if (flag_change) {
      let timeout = setTimeout(() => {
        dispatch(isChange());
        setOpen(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [flag_change, dispatch]);

  useEffect(() => {
    //console.log(cart.length);
    let list = [];
    cart.forEach((element) => {
      let { size, quantity } = element;
      let item =
        element.category === "shoes"
          ? getShoesFromId(element.id)
          : element.category === "top"
          ? getTopFromId(element.id)
          : getAccessoriesFromId(element.id);
      item = { ...item, size: size, quantity: quantity };
      list = [...list, item];
    });
    //console.log(list);
    setData([...list]);
    setTotal(getTotal(cart));
  }, [cart]);

  return (
    <div
      onClick={() => setOpen((open) => !open)}
      className={
        open
          ? " fixed right-0 top-[calc(25vh-20px)] bg-orangePrimary text-center text-white px-3 py-4 cursor-pointer select-none group open z-[9990]"
          : " fixed right-0 top-[calc(25vh-20px)] bg-orangePrimary text-center text-white px-3 py-4 cursor-pointer select-none group z-[9990]"
      }
    >
      <p className=" font-semibold">{numberItem}</p>
      <img
        src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_gio_hang.svg"
        alt=""
        className=" bg-cover"
      />
      <div
        className={
          cart.length >= 3
            ? `w-72 bg-bgGray absolute top-0 h-0 right-full text-start overflow-hidden text-black transition-all duration-300 ease-in group-[.open]:h-[calc(315px+120*2px)]`
            : cart.length === 2
            ? `w-72 bg-bgGray absolute top-0 h-0 right-full text-start overflow-hidden text-black transition-all duration-300 ease-in group-[.open]:h-[calc(315px+120*1px)]`
            : cart.length === 1
            ? `w-72 bg-bgGray absolute top-0 h-0 right-full text-start overflow-hidden text-black transition-all duration-300 ease-in group-[.open]:h-[calc(315px+120*0px)]`
            : `w-72 bg-bgGray absolute top-0 h-0 right-full text-start overflow-hidden text-black transition-all duration-300 ease-in group-[.open]:h-[calc(215px+120*0px)]`
        }
      >
        <div className="h-2 w-2 absolute top-4 left-full -translate-x-1/2 bg-orangePrimary rotate-45" />
        <div className="w-full h-full p-3">
          <p className=" font-semibold">GIỎ HÀNG ({cart.length})</p>
          <div className="my-3 pb-2 border-y-2 border-bgFooter max-h-[360px] overflow-y-auto">
            {data &&
              data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="h-[116px] pt-4 border-b-2 border-borderColor border-dashed"
                  >
                    <div className="grid grid-cols-3 gap-2">
                      <img src={item.images[0].href} alt="" />
                      <div className="flex flex-col justify-between items-start col-span-2">
                        <p className=" text-[0.65rem] font-semibold">
                          {item.name} - {item.color}
                        </p>
                        <div className="text-[0.6rem] w-full">
                          <p className=" font-semibold">{item.saleprice}</p>
                          <div className="flex items-center justify-between w-full pr-2 font-light">
                            <span>Sizes:</span>
                            <span>{item.size}</span>
                          </div>
                          <div className="flex items-center justify-between w-full pr-2 font-light">
                            <span>Số lượng:</span>
                            <span>{item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <p className=" font-semibold text-xs w-full flex items-center justify-between">
            <span>Tổng cộng:</span>
            <span className="text-orangePrimary">{total} VNĐ</span>
          </p>
          <a href="/your-cart/" className="">
            <p className=" py-2 bg-orangePrimary text-white font-semibold text-center cursor-pointer hover:text-white mt-3 ">
              THANH TOÁN
            </p>
          </a>
          <div className="mt-3 py-2 bg-[#303030] text-white font-semibold text-center cursor-pointer">
            THÊM VÀO YÊU THÍCH
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartFixed;
