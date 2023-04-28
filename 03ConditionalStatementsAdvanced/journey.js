function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let destination;
  let cost = 0;
  let type;

  switch (season) {
    case "summer":
      type = "Camp";
      if (budget <= 100) {
        destination = "Bulgaria";
        cost = budget * 0.3;
      } else if (budget <= 1000) {
        destination = "Balkans";
        cost = budget * 0.4;
      } else {
        destination = "Europe";
        cost = budget * 0.9;
      }
      break;

    case "winter":
      type = "Hotel";
      if (budget <= 100) {
        destination = "Bulgaria";
        cost = budget * 0.7;
      } else if (budget <= 1000) {
        destination = "Balkans";
        cost = budget * 0.8;
      } else {
        destination = "Europe";
        cost = budget * 0.9;
      }
      break;
  }

  if (destination === "Europe") {
    type = "Hotel";
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${type} - ${cost.toFixed(2)}`);
}

journey(["1500", "summer"]);
