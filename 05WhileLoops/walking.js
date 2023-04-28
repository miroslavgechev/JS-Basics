function walking(input) {
  let currentValue = "";
  let totalSteps = 0;
  let diff = 0;
  let index = 0;

  while (totalSteps < 10000) {
    currentValue = input[index];
    index++;

    if (currentValue !== "Going home") {
      totalSteps += Number(currentValue);
    } else {
      currentValue = input[index];
      totalSteps += Number(currentValue);
      break;
    }
  }

  diff = Math.abs(totalSteps - 10000);

  if (totalSteps >= 10000) {
    console.log("Goal reached! Good job!");
    console.log(`${diff} steps over the goal!`);
  } else {
    console.log(`${diff} more steps to reach goal.`);
  }
}

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])



