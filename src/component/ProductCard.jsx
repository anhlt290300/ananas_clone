import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ data }) => {
  const { image, info } = data;
  const [like, setLike] = useState(false);
  return (
    <div className="text-center relative select-none">
      <div className="w-full relative h-[35vh] group">
        <a href="/product-detail/av00155/">
          <img
            src={image[0].href}
            alt=""
            className=" absolute top-0 left-0 w-full h-full"
          />
          <img
            src={image[1].href}
            alt=""
            className=" absolute top-0 left-0 w-full h-full group-hover:scale-0"
          />
        </a>
        {info.status !== "Hết hàng" ? (
          <div className=" cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 py-3 bg-orangePrimary opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
            <p className=" text-white font-semibold text-xl">MUA NGAY</p>
          </div>
        ) : (
          ""
        )}
        {info.status === "Hết hàng" ? (
          <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center font-semibold text-2xl text-white">
            <p>Hết hàng</p>
          </div>
        ) : (
          ""
        )}
        <div
          onClick={() => setLike((like) => !like)}
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
        {info.status === "Limited Edition" ? (
          <div className=" absolute left-0 top-6 text-sm px-2 py-1 text-white font-semibold italic bg-[#004e9b]">
            Limited Edition
          </div>
        ) : (
          ""
        )}
      </div>
      {info.status === "New Arrival" ? (
        <div className="w-full mt-4 pb-4 text-orangePrimary border-b-2 border-[#ccc] border-dashed">
          <p>{info.status}</p>
        </div>
      ) : (
        ""
      )}
      <div className="my-4">
        <a href="/product-detail/av00155/">
          <p className="font-semibold text-sm">{info.name}</p>
        </a>
        <p className="my-2">Royal White</p>
        <p className=" font-semibold">{info.price}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductCard;
