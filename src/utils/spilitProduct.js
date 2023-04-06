export const spilitProducts = (products, page) => {
  //console.log("vao1 ", page);
  if (page !== 0) {
    if (products.length <= 20) return products;
    else if (page * 20 <= products.length) {
      let result = [];
      for (let i = (page - 1) * 20; i < page * 20; i++) {
        result.push(products[i]);
      }
      return result;
    } else if (
      page * 20 <= products.length - (products.length % 20) + 20 &&
      page * 20 > products.length
    ) {
      let result = [];
      
      for (
        let i = products.length - (products.length % 20);
        i < products.length;
        i++
      ) {
        result.push(products[i]);
      }

      return result;
    } else {
      return [];
    }
  }
  return [];
};
