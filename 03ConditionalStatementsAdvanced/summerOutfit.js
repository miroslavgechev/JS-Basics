function summerOutfit(input) {
  let centigrade = Number(input[0]);
  let timeOfDay = input[1];
  let outfit = "";
  let shoes = "";

  switch (timeOfDay) {
    case "Morning":
      if (centigrade <= 18 && centigrade >= 10) {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
      } else if (centigrade <= 24 && centigrade >= 19) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (centigrade >= 25) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      }
      break;

    case "Afternoon":
      if (centigrade <= 18 && centigrade >= 10) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (centigrade <= 24 && centigrade >= 19) {
        outfit = "T-Shirt";
        shoes = "Sandals";
      } else if (centigrade >= 25) {
        outfit = "Swim Suit";
        shoes = "Barefoot";
      }
      break;

    case "Evening":
      if (centigrade <= 18 && centigrade >= 10) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (centigrade <= 24 && centigrade >= 19) {
        outfit = "Shirt";
        shoes = "Moccasins";
      } else if (centigrade >= 25) {
        outfit = "Shirt";
        shoes = "Moccasins";
      }
      break;
  }

  console.log(`It's ${centigrade} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["28",
"Evening"])

