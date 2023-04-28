function coins(input) {
  let sum = Number(input[0]);
  let coinCount = 0;

  sum = Math.floor(sum*100);

  while (sum !== 0) {
    if (sum - 200 >= 0) {
      sum -= 200;
    } else if (sum - 100 >= 0) {
      sum -= 100;
    } else if (sum - 50 >= 0) {
      sum -= 50;
    } else if (sum - 20 >= 0) {
      sum -= 20;
    } else if (sum - 10 >= 0) {
      sum -= 10;
    } else if (sum - 5 >= 0) {
      sum -= 5;
    } else if (sum - 2 >= 0) {
      sum -= 2;
    } else if (sum - 1 >= 0) {
      sum -= 1;
    }

    coinCount++;
  }

  console.log(coinCount);
}

coins(["2.73"]);
