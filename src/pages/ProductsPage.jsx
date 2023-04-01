import React from "react";
import Filter from "../component/Filter";
import Products from "../component/Products";
import { filterData } from "../assets/filter";
import { shoesData } from "../assets/shoes";
const ProductsPage = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-8 py-8 px-36">
      <Filter
        type={filterData.type}
        type_item={filterData.type_item}
        filters={filterData.filter}
      />
      <div className=" col-span-3">
        <Products data={shoesData} />
      </div>
    </div>
  );
};

export default ProductsPage;
