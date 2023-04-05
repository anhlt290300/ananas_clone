import React, { useState } from "react";
import PropTypes from "prop-types";
import { getShoesFromId } from "../assets/shoes";
import { getAccessoriesFromId } from "../assets/accessories";
import { getTopFromId } from "../assets/top";
import { quantitys } from "../pages/ProductDetail";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  updateQuantityItem,
  updateSizeItem,
} from "../redux/cartSlice";
const ProductCartCard = ({ id, category, size, quantity }) => {
  const dispatch = useDispatch();
  let { name, color, saleprice, realprice, images, soldout, href, sizes } =
    category === "shoes"
      ? getShoesFromId(id)
      : category === "top"
      ? getTopFromId(id)
      : getAccessoriesFromId(id);

  const [like, setLike] = useState(false);

  const [openSizeBox, setOpenSizeBox] = useState(false);
  const [openQuantityBox, setOpenQuantityBox] = useState(false);

  const handleUpdateQuantity = (newQuantity) => {
    dispatch(
      updateQuantityItem({
        id: id,
        size: size,
        quantity: newQuantity,
      })
    );
  };

  const handleUpdateSize = (newSize) => {
    dispatch(
      updateSizeItem({
        id: id,
        currentsize: size,
        newsize: newSize,
        quantity: quantity,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteItem({
        id: id,
        size: size,
      })
    );
  };
  return (
    <div className=" grid grid-cols-12 gap-12 select-none">
      <div className=" col-span-9 grid grid-cols-3 gap-4">
        <a href={href}>
          <img src={images[0].href} alt="" />
        </a>
        <div className=" col-span-2 flex flex-col justify-between items-start relative">
          <p className="text-xl font-semibold">
            {name} - {color}
          </p>
          <p className="text-[#808080] absolute left-0 top-16">
            <span className="font-semibold">Giá: </span>
            {saleprice}{" "}
            <span className="ml-4 line-through text-sm">{realprice}</span>
          </p>
          <div className="flex items-center justify-start">
            <div
              className={
                openSizeBox
                  ? " relative font-semibold text-black w-[8rem] group open"
                  : " font-semibold text-black w-[8rem] group"
              }
            >
              <p className="">Size</p>
              <div
                onClick={() => setOpenSizeBox((openSizeBox) => !openSizeBox)}
                className="border border-borderColor flex items-center justify-between px-3 py-1 mt-2 group-[.open]:shadow-innerbox shadow-none drop-shadow-xl"
              >
                <p>{size}</p>
                <span>
                  <img
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_down_black.png"
                    alt=""
                  />
                </span>
              </div>
              {openSizeBox && (
                <div className=" absolute top-[calc(102%)] left-0 border border-borderColor w-[13rem] p-1 bg-white z-50 shadow-md shadow-borderColor font-normal">
                  <div className=" border border-borderColor grid grid-cols-4 bg-white">
                    {sizes.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            handleUpdateSize(item);
                            setOpenSizeBox(false);
                          }}
                          className={
                            size === item
                              ? " h-14 border border-borderColor font-semibold bg-bgGray outline-black p-[1px]"
                              : " h-14 border border-borderColor hover:bg-bgGray p-1 cursor-pointer"
                          }
                        >
                          <div
                            className={
                              size === item
                                ? " rounded border-2 border-black w-full h-full flex items-center justify-center"
                                : "w-full h-full flex items-center justify-center "
                            }
                          >
                            {item}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div
              className={
                openQuantityBox
                  ? " relative font-semibold text-black w-[8rem] ml-20 group open"
                  : " font-semibold text-black w-[8rem] ml-20 group "
              }
            >
              <p className="">Số lượng</p>
              <div
                onClick={() =>
                  setOpenQuantityBox((openQuantityBox) => !openQuantityBox)
                }
                className="border border-borderColor flex items-center justify-between px-3 py-1 mt-2 group-[.open]:shadow-innerbox shadow-none drop-shadow-xl"
              >
                <p>{quantity}</p>
                <span>
                  <img
                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_down_black.png"
                    alt=""
                  />
                </span>
              </div>
              {openQuantityBox && (
                <div className=" absolute top-[calc(102%)] left-0 border border-borderColor w-[13rem] p-1 bg-white z-50 shadow-md shadow-borderColor font-normal">
                  <div className=" border border-borderColor grid grid-cols-4 bg-white">
                    {quantitys.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            handleUpdateQuantity(item);
                            setOpenQuantityBox(false);
                          }}
                          className={
                            quantity === item
                              ? " h-14 border border-borderColor font-semibold bg-bgGray outline-black p-[1px]"
                              : " h-14 border border-borderColor hover:bg-bgGray p-1 cursor-pointer"
                          }
                        >
                          <div
                            className={
                              quantity === item
                                ? " rounded border-2 border-black w-full h-full flex items-center justify-center"
                                : "w-full h-full flex items-center justify-center "
                            }
                          >
                            {item}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-3 flex flex-col items-end justify-between relative">
        <p className="text-2xl font-semibold text-orangePrimary">{saleprice}</p>
        <p className="text-orangePrimary absolute right-0 top-10 italic">
          {soldout ? "Hết hàng" : "Còn hàng"}
        </p>
        <div>
          <div
            onClick={() => setLike((like) => !like)}
            className="border border-borderColor py-3 px-12 cursor-pointer"
          >
            <img
              src={
                like
                  ? "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_2.svg"
                  : "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart.svg"
              }
              alt=""
            />
          </div>
          <div
            onClick={() => handleDelete()}
            className="bg-[#303030] py-3 px-12 cursor-pointer mt-3"
          >
            <img
              className="m-auto"
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Trash_bin.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCartCard.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProductCartCard;
