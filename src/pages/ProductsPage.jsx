import React, { useEffect, useState } from "react";
import Filter from "../component/Filter";
import Products from "../component/Products";
import { filterData } from "../assets/filter";
import { getShoesFromAttribute, getAllShoes } from "../assets/shoes";
import { getTopFromAttribute } from "../assets/top";
import { getAccessoriesFromAttribute } from "../assets/accessories";
import { useLocation } from "react-router-dom";
import BtnScroll from "../component/BtnScroll";
import Helmet from "../component/Helmet";
const ProductsPage = () => {
  const [data, setData] = useState(getAllShoes());

  const search = useLocation().search;
  const category =
    new URLSearchParams(search).get("category") === null
      ? ""
      : new URLSearchParams(search).get("category");
  const attribute =
    new URLSearchParams(search).get("attribute") === null
      ? ""
      : new URLSearchParams(search).get("attribute");

  useEffect(() => {
    const listAttribute = attribute === "" ? [] : attribute?.split(",");
    if (category === "") {
      setData(getShoesFromAttribute(listAttribute));
    } else {
      if (category === "shoes" || category === "")
        setData(getShoesFromAttribute(listAttribute));
      else if (category === "top") setData(getTopFromAttribute(listAttribute));
      else {
        console.log(category)
        setData(getAccessoriesFromAttribute(listAttribute));
      }
    }
  }, [search, category, attribute]);

  return (
    <Helmet title="Sản Phẩm - Ananas">
      <div className="w-full grid grid-cols-4 gap-8 py-8 px-36">
        <Filter
          type={filterData.type}
          type_item={filterData.type_item}
          filters={filterData.filter}
        />
        <div className=" col-span-3">
          <Products data={data} />
        </div>
        <BtnScroll />
      </div>
    </Helmet>
  );
};

export default ProductsPage;
