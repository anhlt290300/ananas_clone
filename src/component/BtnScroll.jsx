import React, { useEffect, useState } from "react";

const BtnScroll = () => {
  const handleScroll = () => {
    const moveTostart = setInterval(() => {
      //console.log(scrollY)
      const y = window.scrollY;
      window.scrollTo(0, y - 300);
      if (y < 100) {
        window.scrollTo(0, 0);
        clearTimeout(moveTostart);
      }
    }, 10);
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) setOpen(true);
      else setOpen(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      onClick={() => handleScroll()}      
      className={open ? " fixed right-8 top-2/3 cursor-pointer hover:shadow-lg shadow-black select-none":'hidden'}
    >
      <img
        src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/gotop.png"
        alt=""
      />
    </div>
  );
};

export default BtnScroll;
