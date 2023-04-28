function sumPrimeNonPrime(input) {
  let index = 0;
  let currentValue = input[index];

  let sumPrimeNumbers = 0;
  let sumNonPrimeNumbers = 0;

  while (currentValue !== "stop") {
    let currentNumber = Number(currentValue);
    let isNonPrime = false;

    if (currentNumber < 0) {
      console.log("Number is negative.");
      index++;
      currentValue = input[index];
      continue;
    } else if (currentNumber === 0) {
      index++;
      currentValue = input[index];
      continue;
    }

    for (let check = 2; check < currentNumber; check++) {
      if (currentNumber % check === 0) {
        isNonPrime = true;
        break;
      }
    }

    if (isNonPrime) {
      sumNonPrimeNumbers += currentNumber;
    } else {
      sumPrimeNumbers += currentNumber;
    }

    index++;
    currentValue = input[index];
  }

  console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}

sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])

