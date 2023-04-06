import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist, deleteWishlist } from "../redux/wishlistSlice";

const ProductCard = ({ data, sale = false }) => {
  const {
    images,
    href,
    type,
    name,
    color,
    saleprice,
    realprice,
    soldout,
    id,
    category,
    sizes,
  } = data;
  //console.log(category);
  const [like, setLike] = useState(false);

  const wishlist = useSelector((state) => state.wishlist.list)

  useEffect(() => {
    let bool = wishlist.some(
      (el) => el.id === id && el.category === category
    );
    setLike(bool)
  }, [id,category,wishlist]);

  //console.log(useSelector((state) => state.wishlist.list));
  const dispatch = useDispatch();
  const toggleLike = () => {
    if (like) dispatch(deleteWishlist({ id: id, category: category }));
    else
      dispatch(
        addWishlist({
          id: id,
          category: category,
          size: sizes[0],
        })
      );

    setLike(!like);
  };

  return (
    <div className="text-center relative select-none animate-fadein">
      <div
        className={
          !sale
            ? "w-full relative h-[40vh] group"
            : "w-full relative h-[50vh] group"
        }
      >
        <a href={href}>
          <img
            src={images[1].href}
            alt=""
            className=" absolute top-0 left-0 w-full h-full"
          />
          <img
            src={images[0].href}
            alt=""
            className=" absolute top-0 left-0 w-full h-full group-hover:scale-0"
          />
        </a>
        {!soldout ? (
          <a
            href={href}
            className=" cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 py-3 bg-orangePrimary opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in"
          >
            <p className=" text-white font-semibold text-xl">MUA NGAY</p>
          </a>
        ) : (
          ""
        )}
        {soldout ? (
          <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center font-semibold text-2xl text-white">
            <p>Hết hàng</p>
          </div>
        ) : (
          ""
        )}
        <div
          onClick={() => toggleLike()}
          className=" absolute bottom-3 right-2 cursor-pointer"
        >
          <img
            src={
              like
                ? "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg"
                : "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg"
            }
            alt=""
          />
        </div>
        {type === "Limited Edition" ? (
          <div className=" absolute left-0 top-6 text-sm px-2 py-1 text-white font-semibold italic bg-[#004e9b]">
            Limited Edition
          </div>
        ) : (
          ""
        )}
        {type === "Online Only" ? (
          <div className=" absolute left-0 top-6 text-sm px-2 py-1 text-white font-semibold italic bg-[#303030]">
            Online Only
          </div>
        ) : (
          ""
        )}
      </div>
      {type === "New Arrival" || type === "Online Only" ? (
        <div className="w-full mt-4 pb-4 text-orangePrimary border-b-2 border-[#ccc] border-dashed">
          <p>{type}</p>
        </div>
      ) : (
        ""
      )}
      <div className="my-4">
        <a href={href}>
          <p className="font-semibold text-sm">{name}</p>
        </a>
        <p className="my-2">{color}</p>
        <p className=" font-semibold">
          <span>{saleprice}</span>
          {sale && (
            <span className=" font-normal text-sm line-through ml-4">
              {realprice}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object.isRequired,
  sale: PropTypes.bool,
};

export default ProductCard;
