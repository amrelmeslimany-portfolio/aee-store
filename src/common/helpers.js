export const handlePrice = (price) =>
  Math.round(parseFloat(price.replace(",", "").slice(2)));

export const discountPrice = (price, discount = 20) => {
  let discountNumber = discount / 100;
  return price - price * discountNumber;
};

export const calcTotalPrice = (data = []) => {
  let total = {
    beforeDiscount: 0,
    afterDiscount: 0,
  };
  data.forEach((item) => {
    total.beforeDiscount += handlePrice(item.course_price);
    total.afterDiscount += discountPrice(handlePrice(item.course_price));
  });

  return total;
};
