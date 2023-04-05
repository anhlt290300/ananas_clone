import React from "react";
import PropTypes from "prop-types";
const homenews = [
  {
    image:
      "https://ananas.vn/wp-content/uploads/kvngang_mobile_web-300x160.jpg",
    href: "/urbas-corluray-pack/",
    title: "URBAS CORLURAY PACK ",
    description:
      "Urbas Corluray Pack đem đến lựa chọn “làm mới mình” với sự kết hợp 5 gam màu mang sắc thu; phù hợp với những người trẻ năng động, mong muốn thể hiện cá tính riêng biệt khó trùng lặp.",
  },
  {
    image:
      "https://ananas.vn/wp-content/uploads/Mobile_Blog-1980s_0-300x160.jpg",
    href: "/cam-hung-vintas-saigon-1980s/",
    title: "VINTAS SAIGON 1980s",
    description:
      "Với bộ 5 sản phẩm, Vintas Saigon 1980s Pack đem đến một sự lựa chọn “cũ kỹ thú vị” cho những người trẻ sống giữa thời hiện đại nhưng lại yêu nét bình dị của Sài Gòn ngày xưa ...",
  },
  {
    image: "https://ananas.vn/wp-content/uploads/peeping_pattas01-300x160.jpg",
    href: "/sneaker-fest-vietnam-va-su-ket-hop/",
    title: "SNEAKER FEST VIETNAM VÀ SỰ KẾT HỢP",
    description:
      "Việc sử dụng dáng giày Vulcanized High Top của Ananas trong thiết kế và cảm hứng bắt nguồn từ linh vật Peeping - đại diện cho tinh thần xuyên suốt 6 năm qua Sneaker Fest Vietnam, chúng tôi tự tin đây sẽ là sản phẩm đáng mong chờ cho mọi “đầu giày” vào mùa hè năm nay...",
  },
  {
    image:
      "https://ananas.vn/wp-content/uploads/shoes-anatomy-thumbnail-300x160.jpg",
    href: "/anatomy-of-vulcanized/",
    title: '"GIẢI PHẪU" GIÀY VULCANIZED',
    description:
      'Trong phạm vi bài viết ngắn, hãy cùng nhau tìm hiểu cấu tạo giày Vulcanized Sneaker - loại sản phẩm mà Ananas đã chọn làm "cốt lõi" để theo đuổi trong suốt hành trình của mình...',
  },
];
const HomeNews = ({ isHome = true }) => {
  return (
    <div className="text-center select-none">
      <div className="grid grid-cols-2 px-32 py-12 gap-10 text-start">
        {homenews.map((item, index) => {
          return (
            <div
              key={index}
              className={isHome ? "w-full" : index === 0 ? "hidden" : "w-full"}
            >
              <a href={item.href} className=" relative">
                <img src={item.image} className="w-full h-[45vh] " alt="" />
              </a>
              <div className="mt-8">
                <a href={item.href} className="text-2xl font-semibold">
                  {item.title}
                </a>
                <p className="mt-2">
                  {item.description}{" "}
                  <a
                    href={item.href}
                    className="italic text-orangePrimary hover:underline"
                  >
                    Đọc thêm
                  </a>{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

HomeNews.propTypes = {
  isHome: PropTypes.bool,
};

export default HomeNews;
