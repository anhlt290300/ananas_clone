import { getShoesFromId } from "../assets/shoes";
import { getTopFromId } from "../assets/top";
import { getAccessoriesFromId } from "../assets/accessories";

export const getTotal = (listItems) => {
  let total = 0;
  listItems?.forEach((el) => {
    if (el.category === "shoes") {
      let item = getShoesFromId(el.id);
      let money =
        Number(item.saleprice.replace(" VND", "").replace(".", "")) *
        Number(el.quantity);
      //console.log(item);
      total += money;
    } else if (el.category === "top") {
      let item = getTopFromId(el.id);
      let money =
        Number(item.saleprice.replace(" VND", "").replace(".", "")) *
        Number(el.quantity);
      ///console.log(item);
      total += money;
    } else {
      let item = getAccessoriesFromId(el.id);
      let money =
        Number(item.saleprice.replace(" VND", "").replace(".", "")) *
        Number(el.quantity);
      //console.log(item);
      total += money;
    }
  });
  total = [...total.toString()];
  total = total.reverse();
  let result = "";
  for (let i = 0; i < total.length; i++) {
    if ((i + 1) % 3 === 0) result += total[i].toString() + ",";
    else result += total[i].toString();
  }
  result = [...result];
  result.reverse();
  total = "";
  for (let i = 0; i < result.length; i++) {
    if (i === 0 && result[i] === ",") continue;
    else total += result[i];
  }
  //console.log(total + " VND");
  return total;
};

export const getTotalWishList = (price, quantity) => {
  let price_ = price.replace(" VND", "").replace(".", "");
  price_ = Number(price_) * quantity;
  price_ = [...price_.toString()].reverse();
  let total = "";
  for (let i = 0; i < price_.length; i++) {
    if ((i + 1) % 3 === 0 && i !== price_.length - 1)
      total += price_[i].toString() + ",";
    else total += price_[i].toString();
  }
  total = [...total].reverse();
  return total;
};
