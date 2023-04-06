import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WishListCard from "../component/WishListCard";
import { deleteWishlist } from "../redux/wishlistSlice";
import { ToggleLoad } from "../redux/loadingSlice";
const Wishlist = () => {
  const data = useSelector((state) => state.wishlist.list);
  //console.log(data);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    setTimeout(() => {
      data.forEach((element) => {
        dispatch(
          deleteWishlist({
            id: element.id,
          })
        );
      });
    }, 1000);
    dispatch(ToggleLoad());
  };

  return (
    <div className="px-36 py-8 flex flex-col items-center select-none">
      <p className=" font-semibold text-3xl mb-8 mt-4">
        {data.length < 1 ? "DANH MỤC YÊU THÍCH" : "DANH MỤC YÊU THÍCH CỦA BẠN"}
      </p>
      {data.length > 0 && (
        <p className="w-full text-start text-[#808080] font-semibold text-sm my-2">
          {data.length} sản phẩm
        </p>
      )}
      <div className="relative border-y border-black w-full">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="py-8 border-b-2 border-borderColor border-dashed last:border-none"
            >
              <WishListCard
                id={item.id}
                category={item.category}
                size={item.size}
                quantity={item.quantity}
              />
            </div>
          );
        })}
      </div>
      {data.length < 1 && (
        <p className="my-16">Bạn đang không thích sản phẩm nào!</p>
      )}
      <div
        className={
          data.length < 1
            ? "flex items-center justify-center w-full"
            : "flex items-center justify-between w-full mt-10"
        }
      >
        <div
          onClick={() => handleDeleteAll()}
          className={data.length < 1 ? "hidden" : "block"}
        >
          <p className="bg-[#303030] px-20 py-2 font-semibold text-lg text-white cursor-pointer">
            XÓA HẾT
          </p>
        </div>
        <a href="/product-list" className="">
          <p className="bg-[#303030] px-10 py-2 font-semibold text-lg text-white">
            TIẾP TỤC MUA HÀNG
          </p>
        </a>
      </div>
    </div>
  );
};

export default Wishlist;
