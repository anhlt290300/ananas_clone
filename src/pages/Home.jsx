import React from "react";
import HomeBanner from "../component/HomeBanner";
import HomeBuy from "../component/HomeBuy";
import HomeNews from "../component/HomeNews";
import Slider from "../component/Slider";
import SliderCollection from "../component/SliderCollection";
const sliders = [
  {
    image: "https://ananas.vn/wp-content/uploads/LowHigh_Desktop-1920x1050.jpg",
    href: "/product-list?gender=&category=&attribute=living-journey",
  },
  {
    image:
      "https://ananas.vn/wp-content/uploads/Hi-im-Mule_1920x1050-Desktop.jpg",
    href: "/product-list?gender=&category=&attribute=living-journey",
  },
];

const slidersCollection = [
  [
    {
      image:
        "https://ananas.vn/wp-content/uploads/banner-phu%CC%A3_2m-600x320.jpg",
      href: "/product-list?gender=&category=&attribute=black",
      title: "ALL BLACK IN BLACK",
      description:
        "Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán",
    },
    {
      image:
        "https://ananas.vn/wp-content/uploads/IMG_9453_retouch-600x331.jpg",
      href: "/product-list?gender=&category=&attribute=living-journey",
      title: 'BÌNH MỚI RƯỢU "MỚI"',
      description:
        "Vẫn kế thừa vẻ tối giản, nguyên bản đã được định hướng bởi cái tên, Basas mới trở lại với những cải tiến đáng giá chắc chắn sẽ đem đến một trải nghiệm thú vị như hành trình chúng tôi làm ra nó.",
    },
  ],
  [
    {
      image: "https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg",
      href: "/promotion/clearance-sale/",
      title: "OUTLET SALE",
      description:
        'Danh mục những sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.',
    },
  ],
];

const homebuy = [
  {
    image: "https://ananas.vn/wp-content/uploads/catalogy-1.jpg",
    title: "GIÀY NAM",
    href: "#",
    option: [
      {
        title_option: "New Arrivals",
        href: "/product-list?gender=men&category=shoes&attribute=new-arrival",
      },
      {
        title_option: "Best Seller",
        href: "/product-list?gender=men&category=shoes&attribute=best-seller",
      },
      {
        title_option: "Sale-off",
        href: "/product-list?gender=men&category=shoes&attribute=sale-off",
      },
    ],
  },
  {
    image: "https://ananas.vn/wp-content/uploads/catalogy-2.jpg",
    title: "GIÀY NỮ",
    href: "#",
    option: [
      {
        title_option: "New Arrivals",
        href: "/product-list?gender=woman&category=shoes&attribute=new-arrival",
      },
      {
        title_option: "Best Seller",
        href: "/product-list?gender=woman&category=shoes&attribute=best-seller",
      },
      {
        title_option: "Sale-off",
        href: "/product-list?gender=woman&category=shoes&attribute=sale-off",
      },
    ],
  },
  {
    image: "https://ananas.vn/wp-content/uploads/catalogy-3.jpg",
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
    ],
  },
];

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
const Home = () => {
  return (
    <div className="h-fit relative text-center w-full">
      <Slider sliders={sliders} />
      <div className=" px-32 py-20">
        <div className="grid grid-cols-2 gap-10">
          {slidersCollection.map((item, index) => {
            return <SliderCollection key={index} sliders={item} />;
          })}
        </div>
        <HomeBuy data={homebuy} />
      </div>
      <HomeBanner
        image="https://ananas.vn/wp-content/uploads/Banner_Clothing.jpg"
        href="/product-list?gender=men,women&category=top,accessories&attribute="
      />
      <HomeNews data={homenews} />
      <div className="bg-[#303030] select-none uppercase font-semibold px-6 py-1 inline-block text-white cursor-pointer mb-16">
          muốn xem nữa
      </div>

    </div>
  );
};

export default Home;
