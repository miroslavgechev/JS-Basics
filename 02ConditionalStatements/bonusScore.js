function bonusScore(input) {
  let initialPoints = Number(input[0]);
  let bonusPoints = 0;
  let totalPoints = 0;

  if (initialPoints <= 100) {
    bonusPoints = 5;
  } else if (initialPoints > 1000) {
    bonusPoints = initialPoints * 0.1;
  } else {
    bonusPoints = initialPoints * 0.2;
  }

  if (initialPoints % 2 === 0) {
    bonusPoints = bonusPoints + 1;
  }

  if (initialPoints % 10 === 5) {
    bonusPoints = bonusPoints + 2;
  }

  totalPoints = initialPoints + bonusPoints;

  console.log(bonusPoints);
  console.log(totalPoints);
}

bonusScore(["2703"])
