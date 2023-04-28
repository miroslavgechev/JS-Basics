function trainTheTrainers(input) {
  let juryCount = Number(input[0]);

  let index = 1;
  let currentValue = input[index];
  let taskCount = 0;
  let totalGrade = 0;
  let totalAverageGrade = 0;

  while (currentValue !== "Finish") {
    let currentPresentation = input[index];
    index++;
    taskCount++;

    let currentTotalGrade = 0;

    for (let gradeCount = 0; gradeCount < juryCount; gradeCount++) {
      let currentGrade = Number(input[index]);
      index++;

      currentTotalGrade += currentGrade;
      totalGrade += currentGrade;
    }

    let currentAverageGrade = currentTotalGrade / juryCount;

    console.log(`${currentPresentation} - ${currentAverageGrade.toFixed(2)}.`);

    currentValue = input[index];
  }

  totalAverageGrade = totalGrade / (taskCount * juryCount);

  console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`);
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
