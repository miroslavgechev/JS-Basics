function cake(input) {
  let cakeWidth = Number(input[0]);
  let cakeLength = Number(input[1]);

  let pieces = cakeLength * cakeWidth;

  let currentValue = input[2];

  let hasEnded = false;

  let index = 3;

  while (currentValue !== "STOP") {
    pieces -= Number(currentValue);

    if (pieces <= 0) {
      hasEnded = true;
      break;
    }

    currentValue = input[index];
    index++;
  }

  if (hasEnded) {
    console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
  } else {
    console.log(`${pieces} pieces are left.`);
  }
}

cake(["10", "2", "2", "4", "6", "STOP"]);
