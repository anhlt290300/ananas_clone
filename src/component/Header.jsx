import React, { useEffect, useState } from "react";

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
  const [current, setCurrent] = useState(0);
  const [flag, setFlag] = useState(true);

  const pre = () => {
    if (current === 0) {
      setCurrent(thumnails.length - 1);
    } else setCurrent((current) => current - 1);
  };

  const next = () => {
    if (current === thumnails.length - 1) {
      setCurrent(0);
    } else setCurrent((current) => current + 1);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (flag) {
        if (current === thumnails.length - 1) {
          setCurrent(0);
        } else setCurrent((current) => current + 1);
      }
      //console.log('123')
    }, 3000);
    return () => clearInterval(interval);
  }, [flag, current]);

  return (
    <div className=" select-none w-full">
      <div className="flex items-center justify-around w-full relative h-[7rem] ">
        <a href="/">
          <img
            src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg"
            alt=""
            className="bg-cover"
          />
        </a>
        <nav className=" h-full pt-6">
          <ul className="flex h-full">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" group h-full flex items-center cursor-pointer transition-all duration-200 ease-linear"
                >
                  <a
                    href={item.href}
                    className={
                      index < 3
                        ? "flex items-center text-2xl uppercase px-5 h-full relative hover:after:w-4 hover:after:h-4 hover:after:bg-bgFooter hover:after:absolute after:bottom-0 after:left-1/2 hover:after:translate-y-1/2 hover:after:rotate-45"
                        : "flex items-center text-2xl uppercase px-5 h-full relative"
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
                    className={
                      index === 0
                        ? "w-screen bg-bgFooter absolute top-full left-0 z-[999] text-center h-0 group-hover:w-screen group-hover:h-fit overflow-hidden transition-all duration-300 ease-in"
                        : "hidden"
                    }
                  >
                    <ul className="grid grid-cols-4 w-full py-6 px-28 gap-12 h-full">
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
        <div className="relative ">
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
      </div>

      <div className=" bg-bgGray py-3 flex items-center justify-center w-full">
        <svg
          onClick={() => pre()}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-left cursor-pointer text-bgFooter hover:text-black hover:scale-110 transition-all duration-200 ease-in-out"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <div
          onMouseEnter={() => setFlag(false)}
          onMouseLeave={() => setFlag(true)}
          className="w-1/2 block overflow-hidden"
        >
          <div
            style={{
              transform: `translateX(-${current * 50}vw)`,
              transition: "all",
              transitionDuration: "1s",
            }}
            className="w-full flex flex-row ease-in-out z-0"
          >
            {thumnails.map((item, index) => {
              return (
                <div
                  key={index}
                  className="block text-center whitespace-nowrap min-w-full"
                >
                  <p>
                    <a href="/faqs/" className="hover:text-black">
                      {item}
                    </a>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <svg
          onClick={() => next()}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right cursor-pointer  text-bgFooter hover:text-black hover:scale-110 transition-all duration-200 ease-in-out"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="sevenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
