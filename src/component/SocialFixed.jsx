import React from "react";

const SocialFixed = () => {
  return (
    <div className=" fixed right-0 top-[43%] bg-[#666] text-center flex items-center flex-col text-white w-10 cursor-pointer select-none z-[999]">
      <a href="https://www.facebook.com/Ananas.vietnam/" className="flex justify-center my-2">
        <img
          src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_facebook_2.svg"
          alt=""
        />
      </a>
      <a href="https://www.facebook.com/Ananas.vietnam/" className="flex justify-center my-2">
        <img
          src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_instagram_2.svg"
          alt=""
        />
      </a>
      <a href="https://www.facebook.com/Ananas.vietnam/" className="flex justify-center my-2">
        <img
          src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_youtube_2.svg"
          alt=""
        />
      </a>
    </div>
  );
};

export default SocialFixed;
