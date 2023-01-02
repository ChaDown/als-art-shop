export function getTotalPrice(ProdsArr) {
  let sum = 0;
  ProdsArr.forEach((element) => {
    sum = sum + element.price;
  });
  return sum.toFixed(2);
}
