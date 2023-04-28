function newHouse(input) {
  let flowerType = input[0];
  let flowerCount = Number(input[1]);
  let budget = Number(input[2]);

  let cost = 0;

  switch (flowerType) {
    case "Roses": {
      cost = flowerCount * 5;

      if (flowerCount > 80) {
        cost = cost * 0.9;
      }

      break;
    }
    case "Dahlias": {
      cost = flowerCount * 3.8;

      if (flowerCount > 90) {
        cost = cost * 0.85;
      }

      break;
    }
    case "Tulips": {
      cost = flowerCount * 2.8;

      if (flowerCount > 80) {
        cost = cost * 0.85;
      }
      break;
    }
    case "Narcissus": {
      cost = flowerCount * 3;

      if (flowerCount < 120) {
        cost = cost * 1.15;
      }
      break;
    }
    case "Gladiolus":
      {
        cost = flowerCount * 2.5;

        if (flowerCount < 80) {
          cost = cost * 1.2;
        }
        break;
      }
 
  }

  let diff = Math.abs(budget - cost);
  
  if (budget >= cost){
      console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(2)} leva left.`)
  } else {
      console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
  }

}

newHouse(["Narcissus",
"119",
"360"])


