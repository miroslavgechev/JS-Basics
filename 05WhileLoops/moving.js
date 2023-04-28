function moving(input) {
  let spaceWidth = Number(input[0]);
  let spaceLength = Number(input[1]);
  let spaceHeight = Number(input[2]);

  let spaceSpace = spaceHeight * spaceLength * spaceWidth;

  let index = 3;
  let currentValue = input[index];

  let spaceHasEnded = false;

  while (currentValue !== "Done") {
    spaceSpace -= Number(currentValue);

    if (spaceSpace <= 0) {
      spaceHasEnded = true;
      break;
    }

    index++;
    currentValue = input[index];
  }

  if (spaceHasEnded) {
    console.log(
      `No more free space! You need ${Math.abs(spaceSpace)} Cubic meters more.`
    );
  } else {
    console.log(`${spaceSpace} Cubic meters left.`);
  }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
