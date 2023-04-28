function specialNumbers(input) {
  let n = Number(input[0]);
  let printLine = "";

  for (firstDigit = 1; firstDigit <= 9; firstDigit++) {
    for (secondDigit = 1; secondDigit <= 9; secondDigit++) {
      for (thirdDigit = 1; thirdDigit <= 9; thirdDigit++) {
        for (fourthDigit = 1; fourthDigit <= 9; fourthDigit++) {
          if (
            n % firstDigit === 0 &&
            n % secondDigit === 0 &&
            n % thirdDigit === 0 &&
            n % fourthDigit === 0
          ) {
            printLine += `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit} `;
          }
        }
      }
    }
  }

  console.log(printLine);

}

specialNumbers(["3"]);
