function yardGreening(input) {
  let squareMeters = Number(input[0]);

  totalPrice = squareMeters * 7.61;
  totalDiscount = totalPrice * 0.18;
  priceWithDiscount = totalPrice - totalDiscount;

  console.log(`The final price is: ${priceWithDiscount} lv.`);
  console.log(`The discount is: ${totalDiscount} lv.`);
}

yardGreening(["550"]);
