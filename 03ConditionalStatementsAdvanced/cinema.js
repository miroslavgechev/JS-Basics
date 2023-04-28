function cinema(input) {
  let type = input[0];
  let rows = Number(input[1]);
  let cols = Number(input[2]);

  let size = rows * cols;
  let income = 0;

  switch (type) {
    case "Premiere":
      income = size * 12;
      break;
    case "Normal":
      income = size * 7.5;
      break;
    case "Discount":
      income = size * 5.0;
      break;
  }

  console.log(`${income.toFixed(2)} leva`)

}

cinema(["Normal",
"21",
"13"])

