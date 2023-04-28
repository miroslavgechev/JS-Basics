function sumSeconds(input) {
  let competitorOne = Number(input[0]);
  let competitorTwo = Number(input[1]);
  let competitorThree = Number(input[2]);

  let totalTime = competitorOne + competitorTwo + competitorThree;

  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  if (seconds < 9) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

sumSeconds(["50",
"50",
"49"])


