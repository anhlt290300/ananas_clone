import React, { useEffect, useState } from "react";
import { ReactComponent as ReactLogo } from "../assets/loadingicon.svg";
import { useLocation, useParams } from "react-router-dom";
const Loading = () => {
  const [open, setOpen] = useState(false);
  const pathname = useLocation().pathname;
  const search = useLocation().search;
  const category =
    new URLSearchParams(search).get("category") === null
      ? ""
      : new URLSearchParams(search).get("category");
  const attribute =
    new URLSearchParams(search).get("attribute") === null
      ? ""
      : new URLSearchParams(search).get("attribute");
  const gender =
    new URLSearchParams(search).get("gender") === null
      ? ""
      : new URLSearchParams(search).get("gender");

  useEffect(() => {
    if (pathname === "/product-list") {
      setOpen(true);
      document.body.style.overflow = "hidden";
      let timeOut = setTimeout(() => {
        setOpen(false);
        document.body.style.overflow = "scroll";
      }, 1000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [category,attribute,gender]);
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
