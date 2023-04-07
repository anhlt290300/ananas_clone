import React, { useState } from "react";

const data = [
  {
    title: "sản phẩm",
    href: "/product-list/",
  },
  {
    title: "nam",
    href: "/product-list/?gender=men",
  },

  {
    title: "nữ",
    href: "/product-list/?gender=women",
  },
  {
    title: "sale off",
    href: "/promotion/clearance-sale/",
  },
];

const thumnails = [
  "BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN",
  "HÀNG 2 TUẦN NHẬN ĐỔI - GIÀY NỬA NĂM BẢO HÀNH",
  "BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE",
  "FREE SHIPPING VỚI HOÁ ĐƠN TỪ 800K !",
];

const products = [
  {
    title: "cho nam",
    image: "https://ananas.vn//wp-content/uploads/Menu_Nam.jpg",
    href: "/product-list/?gender=men",
  },
  {
    title: "cho nữ",
    image: "https://ananas.vn//wp-content/uploads/Menu_Nu.jpg",
    href: "/product-list/?gender=woman",
  },
  {
    title: "outlet sale",
    image: "https://ananas.vn//wp-content/uploads/Menu_Sale-off.jpg",
    href: "/promotion/clearance-sale/",
  },
  {
    title: "thời trang & phụ kiện",
    image: "https://ananas.vn//wp-content/uploads/Menu_Phu-kien.jpg",
    href: "/product-list?gender=men,women&category=top,bottom,accessories&attribute=",
  },
];

const mens = [
  {
    title: "nổi bật",
    href: "#",
    list: [
      {
        title: "",
        href: "#",
        option: [
          {
            title_option: "Best Seller",
            href: "/product-list?gender=men&category=&attribute=best-seller",
          },
          {
            title_option: "New Arrival",
            href: "/product-list?gender=men&category=&attribute=new-arrival",
          },
          {
            title_option: "Sale off",
            href: "/product-list?gender=men&category=&attribute=sale-off",
          },
        ],
      },
      {
        title: "bộ sản phẩm",
        href: "#",
        option: [
          {
            title_option: "Pattas Living Journey",
            href: "/product-list?gender=&category=&attribute=living-journey",
          },
          {
            title_option: "Pattas Polka Dots",
            href: "/product-list?gender=&category=&attribute=polka-dots",
          },
          {
            title_option: "Basas Evergreen",
            href: "/product-list/?gender=&category=&attribute=evergreen-pack",
          },
          {
            title_option: "Urbas Ruler",
            href: "/product-list?gender=&category=&attribute=ruler",
          },
          {
            title_option: "Track 6 Class E",
            href: "/product-list?gender=&category=&attribute=track-6-class-e",
          },
        ],
      },
      {
        title: "Collaboration",
        href: "#",
        option: [],
      },
    ],
  },
  {
    title: "GIÀY",
    href: "#",
    list: [
      {
        title: "Dòng sản phẩm",
        href: "#",
        option: [
          {
            title_option: "Basas",
            href: "/product-list?gender=men&category=&attribute=basas",
          },
          {
            title_option: "Vintas",
            href: "/product-list?gender=men&category=&attribute=vintas",
          },
          {
            title_option: "Urbas",
            href: "/product-list?gender=men&category=&attribute=urbas",
          },
          {
            title_option: "Pattas",
            href: "/product-list?gender=men&category=&attribute=pattas",
          },
          {
            title_option: "Creas",
            href: "/product-list?gender=men&category=&attribute=creas",
          },
          {
            title_option: "Track 6",
            href: "/product-list?gender=men&category=&attribute=track-6",
          },
        ],
      },
      {
        title: "Style",
        href: "#",
        option: [
          {
            title_option: "High Top",
            href: "/product-list?gender=men&category=&attribute=high-top?gender=men&category=&attribute=high-top",
          },
          {
            title_option: "Low Top",
            href: "/product-list?gender=men&category=&attribute=high-top?gender=men&category=&attribute=low-top",
          },
          {
            title_option: "Slip-on",
            href: "/product-list?gender=men&category=&attribute=high-top?gender=men&category=&attribute=slip-on",
          },
        ],
      },
      {
        title: "Tất cả giày",
        href: "/product-list?gender=men&category=shoes&attribute=",
        option: [],
      },
    ],
  },
  {
    title: "THỜI TRANG & PHỤ KIỆN",
    href: "/product-list?gender=men&category=top,bottom,accessories&attribute=",
    list: [
      {
        title: "Nửa trên",
        href: "#",
        option: [
          {
            title_option: "Basic Tee",
            href: "/product-list?gender=men&category=&attribute=basic-tee-tron",
          },
          {
            title_option: "Graphic tee",
            href: "/product-list/?gender=&category=&attribute=graphic-tee",
          },
          {
            title_option: "Sweatshirt",
            href: "/product-list?gender=&category=&attribute=sweatshirt",
          },
          {
            title_option: "Hoodie",
            href: "/product-list?gender=&category=&attribute=hoodie",
          },
        ],
      },
      {
        title: "Phụ kiện",
        href: "#",
        option: [
          {
            title_option: "Nón",
            href: "/product-list?gender=men&category=&attribute=hat",
          },
          {
            title_option: "Dây giày",
            href: "/product-list?gender=men&category=&attribute=shoelaces",
          },
          {
            title_option: "Vớ",
            href: "/product-list?gender=men&category=&attribute=socks",
          },
          {
            title_option: "Ba lô & Túi",
            href: "/product-list?gender=men&category=&attribute=backpack",
          },
        ],
      },
      {
        title: "Xem tất cả",
        href: "/product-list?gender=men&category=top,bottom,accessories&attribute=",
        option: [],
      },
    ],
  },
];

const womans = [
  {
    title: "nổi bật",
    href: "#",
    list: [
      {
        title: "",
        href: "#",
        option: [
          {
            title_option: "Best Seller",
            href: "/product-list?gender=woman&category=&attribute=best-seller",
          },
          {
            title_option: "New Arrival",
            href: "/product-list?gender=woman&category=&attribute=new-arrival",
          },
          {
            title_option: "Sale off",
            href: "/product-list?gender=woman&category=&attribute=sale-off",
          },
        ],
      },
      {
        title: "bộ sản phẩm",
        href: "#",
        option: [
          {
            title_option: "Pattas Living Journey",
            href: "/product-list?gender=&category=&attribute=living-journey",
          },
          {
            title_option: "Pattas Polka Dots",
            href: "/product-list?gender=&category=&attribute=polka-dots",
          },
          {
            title_option: "Basas Evergreen",
            href: "/product-list/?gender=&category=&attribute=evergreen-pack",
          },
          {
            title_option: "Urbas Ruler",
            href: "/product-list?gender=&category=&attribute=ruler",
          },
          {
            title_option: "Track 6 Class E",
            href: "/product-list?gender=&category=&attribute=track-6-class-e",
          },
        ],
      },
      {
        title: "Collaboration",
        href: "#",
        option: [],
      },
    ],
  },
  {
    title: "GIÀY",
    href: "#",
    list: [
      {
        title: "Dòng sản phẩm",
        href: "#",
        option: [
          {
            title_option: "Basas",
            href: "/product-list?gender=woman&category=&attribute=basas",
          },
          {
            title_option: "Vintas",
            href: "/product-list?gender=woman&category=&attribute=vintas",
          },
          {
            title_option: "Urbas",
            href: "/product-list?gender=woman&category=&attribute=urbas",
          },
          {
            title_option: "Pattas",
            href: "/product-list?gender=woman&category=&attribute=pattas",
          },
          {
            title_option: "Creas",
            href: "/product-list?gender=woman&category=&attribute=creas",
          },
          {
            title_option: "Track 6",
            href: "/product-list?gender=woman&category=&attribute=track-6",
          },
        ],
      },
      {
        title: "Style",
        href: "#",
        option: [
          {
            title_option: "High Top",
            href: "/product-list?gender=woman&category=&attribute=high-top?gender=woman&category=&attribute=high-top",
          },
          {
            title_option: "Low Top",
            href: "/product-list?gender=woman&category=&attribute=high-top?gender=woman&category=&attribute=low-top",
          },
          {
            title_option: "Slip-on",
            href: "/product-list?gender=woman&category=&attribute=high-top?gender=woman&category=&attribute=slip-on",
          },
        ],
      },
      {
        title: "Tất cả giày",
        href: "/product-list?gender=woman&category=shoes&attribute=",
        option: [],
      },
    ],
  },
  {
    title: "THỜI TRANG & PHỤ KIỆN",
    href: "/product-list?gender=woman&category=top,bottom,accessories&attribute=",
    list: [
      {
        title: "Nửa trên",
        href: "#",
        option: [
          {
            title_option: "Basic Tee",
            href: "/product-list?gender=woman&category=&attribute=basic-tee-tron",
          },
          {
            title_option: "Graphic tee",
            href: "/product-list/?gender=&category=&attribute=graphic-tee",
          },
          {
            title_option: "Sweatshirt",
            href: "/product-list?gender=&category=&attribute=sweatshirt",
          },
          {
            title_option: "Hoodie",
            href: "/product-list?gender=&category=&attribute=hoodie",
          },
        ],
      },
      {
        title: "Phụ kiện",
        href: "#",
        option: [
          {
            title_option: "Nón",
            href: "/product-list?gender=woman&category=&attribute=hat",
          },
          {
            title_option: "Dây giày",
            href: "/product-list?gender=woman&category=&attribute=shoelaces",
          },
          {
            title_option: "Vớ",
            href: "/product-list?gender=woman&category=&attribute=socks",
          },
          {
            title_option: "Ba lô & Túi",
            href: "/product-list?gender=woman&category=&attribute=backpack",
          },
        ],
      },
      {
        title: "Xem tất cả",
        href: "/product-list?gender=woman&category=top,bottom,accessories&attribute=",
        option: [],
      },
    ],
  },
];

const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  return (
    <div className=" select-none w-full">
      <div className=" desktop:flex items-center justify-around grid grid-cols-12  w-full relative desktop:h-[7rem] h-[8rem] ">
        <a href="/" className=" block col-span-4 ">
          <img
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg"
            alt=""
            className="bg-cover m-auto"
          />
        </a>
        <nav className=" h-full pt-6 desktop:block hidden">
          <ul className="flex h-full">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className={` group h-full flex items-center cursor-pointer transition-all duration-200 ease-linear`}
                >
                  <a
                    href={item.href}
                    className={
                      index < 3
                        ? "flex items-center desktop-L:text-2xl desktop:text-xl uppercase px-5 h-full relative after:w-4 after:h-4 after:opacity-0 after:bg-bgFooter after:absolute after:bottom-0 after:left-1/2 after:translate-y-1/2 after:rotate-45 after:transition-all after:duration-200 after:delay-500 after:ease-linear hover:after:opacity-100"
                        : "flex items-center desktop-L:text-2xl desktop:text-xl uppercase px-5 h-full relative"
                    }
                  >
                    <span style={{ fontFamily: "GeometricExtraBold" }}>
                      {item.title}
                    </span>
                    {index !== data.length - 1 ? (
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chevron-down ml-2"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </span>
                    ) : (
                      ""
                    )}
                  </a>

                  {/* hop products */}
                  <div
                    className={`w-screen bg-bgFooter absolute top-full left-0 z-[999] text-center h-0 opacity-0 group-hover:w-screen group-hover:h-[28rem] group-hover:opacity-100 overflow-hidden transition-all delay-500 duration-0 ease-linear`}
                  >
                    <ul className="grid grid-cols-4 w-full py-6 px-28 gap-12">
                      {products.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className=" flex flex-col items-center justify-center text-gray-400 hover:text-white w-full h-full"
                          >
                            <a
                              href={item.href}
                              className="w-full relative after:w-full after:h-full after:absolute after:bg-[rgba(0,0,0,0.5)] after:top-0 after:left-0 hover:after:bg-transparent"
                            >
                              <img
                                src={item.image}
                                alt=""
                                className="w-full h-fit"
                              />
                            </a>
                            <a
                              className=" uppercase font-semibold text-xl py-4 w-full text-center whitespace-nowrap"
                              href={item.href}
                            >
                              <>{item.title}</>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    <a
                      className=" italic mb-8 bt-6 block text-gray-400"
                      href="/coming-soon/"
                    >
                      MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ{" "}
                      <span className="text-white">DỪA</span> !
                    </a>
                  </div>
                  {/* hop products */}

                  {/* hop mens */}
                  <div
                    className={
                      index === 1
                        ? "w-full bg-bgFooter absolute top-full left-0 h-fit z-[999] text-center hidden group-hover:block "
                        : "hidden"
                    }
                  >
                    <ul className="grid grid-cols-3 w-full py-6 px-56 gap-16 relative">
                      {mens.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className=" relative  text-gray-400 w-full h-full "
                          >
                            <div
                              className={
                                index === 0
                                  ? "w-full flex flex-col items-start justify-start border-r border-borderColor border-dashed"
                                  : "w-full flex flex-col items-start justify-start"
                              }
                            >
                              <a
                                className="text-white uppercase text-xl font-semibold"
                                href={item.href}
                              >
                                {item.title}
                              </a>
                              {item.list.map((item_, index_) => {
                                return (
                                  <div
                                    key={index_}
                                    className="grid grid-cols-1 text-start mt-4"
                                  >
                                    <a
                                      href={item_.href}
                                      className="text-orangePrimary font-semibold capitalize"
                                    >
                                      {item_.title}
                                    </a>
                                    {item_.option.map((item__, index__) => {
                                      return (
                                        <a
                                          key={index__}
                                          href={item__.href}
                                          className="tracking"
                                        >
                                          {item__.title_option}
                                        </a>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <a
                      className=" italic mb-8 bt-6 block text-gray-400"
                      href="/coming-soon/"
                    >
                      MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ{" "}
                      <span className="text-white">DỪA</span> !
                    </a>
                  </div>
                  {/* hop mens */}

                  {/* hop womans */}
                  <div
                    className={
                      index === 2
                        ? "w-full bg-bgFooter absolute top-full left-0 min-h-[20rem] z-[999] text-center hidden group-hover:block"
                        : "hidden"
                    }
                  >
                    <ul className="grid grid-cols-3 w-full py-6 px-56 gap-16 relative">
                      {womans.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className=" relative  text-gray-400 w-full h-full "
                          >
                            <div
                              className={
                                index === 0
                                  ? "w-full flex flex-col items-start justify-start border-r border-borderColor border-dashed"
                                  : "w-full flex flex-col items-start justify-start"
                              }
                            >
                              <a
                                className="text-white uppercase text-xl font-semibold"
                                href={item.href}
                              >
                                {item.title}
                              </a>
                              {item.list.map((item_, index_) => {
                                return (
                                  <div
                                    key={index_}
                                    className="grid grid-cols-1 text-start mt-4"
                                  >
                                    <a
                                      href={item_.href}
                                      className="text-orangePrimary font-semibold capitalize"
                                    >
                                      {item_.title}
                                    </a>
                                    {item_.option.map((item__, index__) => {
                                      return (
                                        <a
                                          key={index__}
                                          href={item__.href}
                                          className="tracking"
                                        >
                                          {item__.title_option}
                                        </a>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <a
                      className=" italic mb-8 bt-6 block text-gray-400"
                      href="/coming-soon/"
                    >
                      MỌI NGƯỜI THƯỜNG GỌI CHÚNG TÔI LÀ{" "}
                      <span className="text-white">DỪA</span> !
                    </a>
                  </div>
                  {/* hop womans */}
                </li>
              );
            })}
            <a href="/discoveryou/" className="px-5 h-full flex items-center">
              <img
                className="-translate-y-3"
                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/DiscoverYOU.svg"
                alt=""
              />
            </a>
          </ul>
        </nav>
        <div className="relative desktop:block hidden">
          <img
            className=" absolute top-1/2 left-2 -translate-y-1/2"
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_tim_kiem.svg"
            alt=""
          />
          <input
            type="text"
            placeholder="Tìm kiếm"
            className=" outline-none border-borderColor border pl-8 pr-2 py-2 focus:border-blue-300 focus:shadow focus:shadow-blue-300"
          />
        </div>

        <div className=" col-span-6 desktop:hidden flex items-center justify-center border-l border-borderColor h-full">
          <div className="mx-4">
            <img
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/mobile/mb_search.png"
              alt=""
            />
          </div>
          <a href="" className="mx-4">
            <img
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/mobile/mb_location.png"
              alt=""
            />
          </a>
          <a href="/your-cart/" className="flex items-end mx-4">
            <img
              src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/mobile/mb_cart.png"
              alt=""
            />
            <span className="text-3xl">(10)</span>
          </a>
        </div>
        <div
          onClick={() => setOpenBurgerMenu((openBurgerMenu) => !openBurgerMenu)}
          className={
            openBurgerMenu
              ? " col-span-2 desktop:hidden  h-full w-[8rem] bg-[#4c4c4c] flex flex-col items-center justify-center relative group open"
              : " col-span-2 desktop:hidden  h-full w-[8rem] bg-[#4c4c4c] flex flex-col items-center justify-center relative group"
          }
        >
          <span className="w-2/5 h-1 bg-white rounded-full my-1 transition-all duration-300 ease-in-out group-[.open]:w-0"></span>
          <span className="w-2/5 h-1 bg-white rounded-full my-1 transition-all duration-300 ease-in-out group-[.open]:rotate-45"></span>
          <span className="w-2/5 h-1 bg-white rounded-full my-1 transition-all duration-300 ease-in-out absolute top-1/2 left-1/2 -translate-y-[calc(50%+4px)] -translate-x-1/2  group-[.open]:-rotate-45"></span>
          <span className="w-2/5 h-1 bg-white rounded-full my-1 transition-all duration-300 ease-in-out group-[.open]:w-0"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
