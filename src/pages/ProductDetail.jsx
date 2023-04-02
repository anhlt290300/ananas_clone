import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { shoesData } from "../assets/shoes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import InvolvedProducts from "../component/InvolvedProducts";
import WatchedProducts from "../component/WatchedProducts";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const ProductDetail = () => {
  const id = useParams().id;
  const shoe = shoesData.find((el) => el.info.id.toLowerCase() === id);
  const { image, info } = shoe;
  const [current, setCurrent] = useState(0);
  const [openImgs, setOpenImgs] = useState(false);
  const swiperRef = useRef(null);
  const [openSizes, setOpenSizes] = useState(false);
  const [size, setSize] = useState("");

  const [openNumber, setOpenNumber] = useState(false);
  const [number, setNumber] = useState("");

  const [like, setLike] = useState(false);

  const [openDescription, setOpenDescription] = useState(true);

  const [openRuler, setOpenRuler] = useState(false);

  const [openHelp, setOpenHelp] = useState(false);

  useEffect(() => {
    setOpenSizes(false);
  }, [size]);

  useEffect(() => {
    setOpenNumber(false);
  }, [number]);

  useEffect(() => {
    if (openImgs) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [openImgs]);

  useEffect(() => {
    if (openDescription) {
      setOpenRuler(false);
      setOpenHelp(false);
    }
  }, [openDescription]);

  useEffect(() => {
    if (openRuler) {
      setOpenDescription(false);
      setOpenHelp(false);
    }
  }, [openRuler]);

  useEffect(() => {
    if (openHelp) {
      setOpenRuler(false);
      setOpenDescription(false);
    }
  }, [openHelp]);

  return (
    <div>
      <div
        className={
          openImgs
            ? "py-16  grid grid-cols-12 gap-14 px-36 select-none group open relative"
            : "py-16  grid grid-cols-12 gap-14 px-36 select-none group relative"
        }
      >
        <div className=" col-span-7">
          <div className=" relative">
            <img src={image[current].href} alt="" className="w-full" />
            <div
              onClick={() => setOpenImgs((openImgs) => !openImgs)}
              className=" absolute right-5 bottom-5 cursor-pointer opacity-60 hover:opacity-100"
            >
              <img
                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_zoom.svg"
                alt=""
              />
            </div>
          </div>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
            }}
            slidesPerView={4}
            spaceBetween={2}
            className="mt-6"
            navigation={true}
            modules={[Navigation]}
          >
            {image.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={item.href}
                    onClick={() => setCurrent(index)}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="p-2 col-span-5">
          <p className="text-3xl font-semibold leading-normal">{info.name}</p>
          <div className="w-full flex items-center justify-between my-6">
            <p className=" font-thin">
              Mã sản phẩm: <span className=" font-semibold">{info.id}</span>
            </p>
            {info.status !== "" ? (
              <p className=" font-thin">
                Tình trạng:{" "}
                <span className=" font-semibold">{info.status}</span>
              </p>
            ) : (
              ""
            )}
          </div>
          <p
            style={{ fontFamily: "GeometricExtraBold" }}
            className=" text-xl text-orangePrimary font-semibold mb-6"
          >
            {info.price}
          </p>
          <div className="border-b-2 border-[#ccc] border-dashed" />
          <div className="flex items-center justify-start my-6">
            <div className="bg-[#a65e7e] p-4 mx-2" />
            <div className="bg-[#009473] p-4 mx-2" />
            <div className="bg-[#5065ac] p-4 mx-2" />
          </div>
          <div className="border-b-2 border-[#ccc] border-dashed" />
          <div className="grid grid-cols-2 gap-8 my-5">
            <div
              className={
                openSizes ? " relative group open" : " relative group "
              }
            >
              <p className=" font-semibold text-lg">SIZE</p>
              <div
                onClick={() => setOpenSizes((openSizes) => !openSizes)}
                className="border border-[#a5a5a5] py-2 px-4 flex items-center shadow-none drop-shadow-xl justify-between mt-2 group-[.open]:shadow-innerbox cursor-pointer"
              >
                <p className="font-semibold min-h-[24px]">{size}</p>
                <img
                  src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_down_black.png"
                  alt=""
                />
              </div>

              <div
                className={
                  openSizes
                    ? "w-full border border-[#a5a5a5] absolute top-full mt-[2px] p-1 block bg-white"
                    : "w-full border border-[#a5a5a5] absolute top-full mt-[2px] p-1 hidden bg-white"
                }
              >
                <div className="grid grid-cols-4">
                  {info.sizes.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={item !== size ? () => setSize(item) : () => {}}
                        className={
                          item === size
                            ? "text-center h-16 flex items-center justify-center border border-[#a5a5a5] bg-bgGray cursor-pointer outline outline-2 -outline-offset-4 outline-black"
                            : "text-center h-16 flex items-center justify-center border border-[#a5a5a5] hover:bg-bgGray cursor-pointer "
                        }
                      >
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className=" relative">
              <p className=" font-semibold text-lg">SỐ LƯỢNG</p>
              <div
                onClick={
                  size !== ""
                    ? () => setOpenNumber((openNumber) => !openNumber)
                    : () => {}
                }
                className={
                  size !== ""
                    ? "border border-[#a5a5a5] py-2 px-4 flex items-center justify-between mt-2 cursor-pointer"
                    : "border border-[#a5a5a5] py-2 px-4 flex items-center justify-between mt-2 cursor-not-allowed"
                }
              >
                <p className="font-semibold min-h-[24px]">{number}</p>
                <img
                  src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_down_black.png"
                  alt=""
                />
              </div>

              <div
                className={
                  openNumber
                    ? "w-full border border-[#a5a5a5] absolute top-full mt-[2px] p-1 block bg-white"
                    : "w-full border border-[#a5a5a5] absolute top-full mt-[2px] p-1 hidden bg-white"
                }
              >
                <div className="grid grid-cols-4">
                  {numbers.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={
                          item !== number ? () => setNumber(item) : () => {}
                        }
                        className={
                          item === number
                            ? "text-center h-16 flex items-center justify-center border border-[#ccc] bg-bgGray cursor-pointer outline outline-2 -outline-offset-4 outline-black"
                            : "text-center h-16 flex items-center justify-center border border-[#ccc] hover:bg-bgGray cursor-pointer "
                        }
                      >
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className=" col-span-4 bg-black text-white text-xl font-semibold text-center py-6 cursor-pointer">
              THÊM VÀO GIỎ HÀNG
            </div>
            <div
              onClick={() => setLike((like) => !like)}
              className="flex items-center justify-center bg-black cursor-pointer"
            >
              <img
                src={
                  like
                    ? "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg"
                    : "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg ?"
                }
                alt=""
              />
            </div>
          </div>

          <div className=" col-span-4 bg-orangePrimary mt-5 text-white text-xl font-semibold text-center py-6 cursor-pointer">
            THANH TOÁN
          </div>

          <div>
            <div
              onClick={() =>
                setOpenDescription((openDescription) => !openDescription)
              }
              className="flex items-center justify-start py-10 border-b-2 border-[#ccc] border-dashed"
            >
              <p
                className={
                  openDescription
                    ? "text-orangePrimary text-xl font-semibold"
                    : "text-black text-xl font-semibold"
                }
              >
                THÔNG TIN SẢN PHẨM{" "}
              </p>
              <img
                className={openDescription ? "rotate-180 ml-2" : "ml-2"}
                src={
                  openDescription
                    ? "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_up_orange.png"
                    : "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_down_black.png"
                }
                alt=""
              />
            </div>

            <div
              className={
                openDescription
                  ? " border-b-2 border-[#ccc] border-dashed h-[470px] overflow-hidden transition-all duration-300 ease-in"
                  : " border-b-2 border-[#ccc] border-dashed h-0 overflow-hidden transition-all duration-300 ease-in -translate-y-[2px]"
              }
            >
              <p className="mt-6">Gender: Unisex</p>
              <p>Size run: 35 – 46</p>
              <p>Upper: Corduroy</p>
              <p>Outsole: Rubber</p>
              <p className="pt-3">
                <img
                  src="https://ananas.vn/wp-content/uploads/Size-chart-1-e1559209680920.jpg"
                  alt=""
                />
              </p>
            </div>
          </div>

          <div>
            <div
              onClick={() => setOpenRuler((openRuler) => !openRuler)}
              className="flex items-center justify-start py-10 border-b-2 border-[#ccc] border-dashed"
            >
              <p
                className={
                  openRuler
                    ? "text-orangePrimary text-xl font-semibold"
                    : "text-black text-xl font-semibold"
                }
              >
                QUY ĐỊNH ĐỔI SẢN PHẨM{" "}
              </p>
              <img
                className={openRuler ? "rotate-180 ml-2" : "ml-2"}
                src={
                  openRuler
                    ? "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_up_orange.png"
                    : "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_down_black.png"
                }
                alt=""
              />
            </div>
            <div
              className={
                openRuler
                  ? " border-b-2 border-[#ccc] border-dashed h-[580px] overflow-hidden transition-all duration-300 ease-in"
                  : " border-b-2 border-[#ccc] border-dashed h-0 overflow-hidden transition-all duration-300 ease-in -translate-y-[2px]"
              }
            >
              <ul className="mt-4 ml-16">
                <li className=" relative after:w-4 after:h-4 after:bg-[url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/policy_bullet.png')] after:absolute after:top-[6px] after:right-[calc(100%+4px)] after:bg-no-repeat">
                  Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi
                  quyết định.
                </li>
                <li className=" relative after:w-4 after:h-4 after:bg-[url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/policy_bullet.png')] after:absolute after:top-[6px] after:right-[calc(100%+4px)] after:bg-no-repeat">
                  Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07
                  ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày,
                  kể từ ngày nhận hàng.
                </li>
                <li className=" relative after:w-4 after:h-4 after:bg-[url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/policy_bullet.png')] after:absolute after:top-[6px] after:right-[calc(100%+4px)] after:bg-no-repeat">
                  Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem,
                  hộp, nhãn mác.
                </li>
                <li className=" relative after:w-4 after:h-4 after:bg-[url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/policy_bullet.png')] after:absolute after:top-[6px] after:right-[calc(100%+4px)] after:bg-no-repeat">
                  Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy,
                  bám bẩn, biến dạng.
                </li>
                <li className=" relative after:w-4 after:h-4 after:bg-[url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/policy_bullet.png')] after:absolute after:top-[6px] after:right-[calc(100%+4px)] after:bg-no-repeat">
                  Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm
                  hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác: <br />
                  - Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn,
                  bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).{" "}
                  <br />- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn,
                  chúng tôi sẽ không hoàn lại tiền.
                </li>
                <li className=" relative after:w-4 after:h-4 after:bg-[url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/policy_bullet.png')] after:absolute after:top-[6px] after:right-[calc(100%+4px)] after:bg-no-repeat">
                  Trong trường hợp sản phẩm - size bạn muốn đổi không còn hàng
                  trong hệ thống. Vui lòng chọn sản phẩm khác.
                </li>
                <li className=" relative after:w-4 after:h-4 after:bg-[url('https://ananas.vn/wp-content/themes/ananas/fe-assets/images/policy_bullet.png')] after:absolute after:top-[6px] after:right-[calc(100%+4px)] after:bg-no-repeat">
                  Không hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào.
                  Mong bạn thông cảm.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div
              onClick={() => setOpenHelp((openHelp) => !openHelp)}
              className="flex items-center justify-start py-10 border-b-2 border-[#ccc] border-dashed"
            >
              <p
                className={
                  openHelp
                    ? "text-orangePrimary text-xl font-semibold"
                    : "text-black text-xl font-semibold"
                }
              >
                BẢO HÀNH THẾ NÀO ?{" "}
              </p>
              <img
                className={openHelp ? "rotate-180 ml-2" : "ml-2"}
                src={
                  openHelp
                    ? "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_up_orange.png"
                    : "https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_down_black.png"
                }
                alt=""
              />
            </div>

            <div
              className={
                openHelp
                  ? " border-b-2 border-[#ccc] border-dashed h-[300px] overflow-hidden transition-all duration-300 ease-in"
                  : " border-b-2 border-[#ccc] border-dashed h-0 overflow-hidden transition-all duration-300 ease-in -translate-y-[2px]"
              }
            >
              <p className="mt-6">
                Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu
                kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các
                lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ
                ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp
                chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm
                về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành
                Ananas ngay trong trung tâm TP.HCM trong giờ hành chính:
              </p>
              <p className="mt-2">
                Địa chỉ: 170-172, Đinh Bộ Lĩnh, P.26 , Q.Bình Thạnh, TP.HCM
                Hotline: 028 2211 0067
              </p>
            </div>
          </div>
        </div>

        {/* mark image */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 duration-200 delay-150 ease-in transition-all opacity-0 w-screen h-screen bg-white group-[.open]:scale-100 group-[.open]:opacity-100 z-[999]">
          <div className=" relative w-full h-full grid grid-cols-12 px-8">
            <div
              onClick={() => setOpenImgs((openImgs) => !openImgs)}
              className=" absolute top-4 right-4 cursor-pointer"
            >
              <img
                src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/icon_close.png"
                alt=""
              />
            </div>
            <div
              className="w-[50vw] h-full bg-contain bg-no-repeat absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundImage: `url(${image[current].href})` }}
            />
            <div className=" m-auto ">
              <div
                onClick={() => swiperRef.current?.slideNext()}
                className="flex justify-center rotate-90 mb-2 opacity-40 hover:opacity-100 cursor-pointer"
              >
                <img
                  src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/arr_left.png"
                  alt=""
                />
              </div>
              <Swiper
                allowTouchMove={false}
                className="h-[70vh]"
                direction={"vertical"}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={4}
                // loop={true}
                modules={{ Navigation }}
              >
                {image.map((item, index) => {
                  return (
                    <SwiperSlide key={index} className="p-auto">
                      <img
                        src={item.href}
                        onClick={() => setCurrent(index)}
                        className="w-full"
                        alt=""
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex justify-center -rotate-90 opacity-70 hover:opacity-100 cursor-pointer"
              >
                <img
                  src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/arr_left.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* mark image */}
      </div>

      <InvolvedProducts />
      <WatchedProducts />
    </div>
  );
};

export default ProductDetail;
