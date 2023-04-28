function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fisherCount = input[2];

  let price = 0;

  switch (season) {
    case "Spring":
      price = 3000;

      if (fisherCount <= 6) {
        price = price * 0.9;
      } else if (fisherCount > 7 && fisherCount <= 11) {
        price = price * 0.85;
      } else {
        price = price * 0.75;
      }
      break;

    case "Summer":
    case "Autumn":
      price = 4200;

      if (fisherCount <= 6) {
        price = price * 0.9;
      } else if (fisherCount > 7 && fisherCount <= 11) {
        price = price * 0.85;
      } else {
        price = price * 0.75;
      }
      break;

    case "Winter":
      price = 2600;

      if (fisherCount <= 6) {
        price = price * 0.9;
      } else if (fisherCount > 7 && fisherCount <= 11) {
        price = price * 0.85;
      } else {
        price = price * 0.75;
      }
      break;
  }

  if (fisherCount % 2 === 0 && season !== "Autumn"){
      price = price * 0.95;
  }

  let diff = Math.abs (budget - price);

  if (budget >= price){
      console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
  } else {
      console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
  }

}

fishingBoat(["2000",
"Winter",
"13"])


