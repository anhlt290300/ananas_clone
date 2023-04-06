import React, { useEffect, useState } from "react";
import { ReactComponent as ReactLogo } from "../assets/loadingicon.svg";
import { useDispatch, useSelector } from "react-redux";
import { ToggleLoad } from "../redux/loadingSlice";
const Loading = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const isload = useSelector((state) => state.loading.isload);
  useEffect(() => {
    if (isload) {
      setOpen(true);
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
      let a = setTimeout(() => {
        window.onscroll = function () {};
        setOpen(false);
        dispatch(ToggleLoad());
      }, 1000);
      return () => {
        clearTimeout(a);
      };
    }
  }, [isload, dispatch]);
  return (
    <div
      className={
        open
          ? "fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[rgba(255,255,255,.6)] z-[9999] "
          : "fixed top-0 left-0 w-screen h-screen hidden items-center justify-center bg-[rgba(255,255,255,.6)] z-[9999]"
      }
    >
      <ReactLogo className="w-12 h-12" />
    </div>
  );
};

export default Loading;
