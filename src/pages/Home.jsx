import React from "react";
import HomeBanner from "../component/HomeBanner";
import HomeBuy from "../component/HomeBuy";
import HomeNews from "../component/HomeNews";
import Slider from "../component/Slider";
import SliderCollection from "../component/SliderCollection";
import Helmet from '../component/Helmet'
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

const Home = () => {
  return (
    <Helmet title="Ananas - DiscoverYOU">
      <div className="h-fit relative text-center w-full">
        <Slider sliders={sliders} />
        <div className=" desktop-L:px-32 desktop-L:py-20 desktop:px-16 desktop:py-10 tablet:px-3 tablet:py-6">
          <div className="grid grid-cols-2 desktop:gap-10 tablet:gap-6">
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
        <section>
          <p className="text-3xl font-semibold desktop-L:mt-12 desktop:mt-8">TIN TỨC & BÀI VIẾT</p>
          <HomeNews />
        </section>
        <div className="bg-[#303030] select-none uppercase font-semibold px-6 py-1 inline-block text-white cursor-pointer desktop-L:mb-16 desktop:mb-8">
          muốn xem nữa
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
