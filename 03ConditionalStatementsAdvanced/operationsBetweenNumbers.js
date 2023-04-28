function operationsBetweenNumbers(input) {
  let numberOne = Number(input[0]);
  let numberTwo = Number(input[1]);
  let operator = input[2];
  let result = 0;
  let resultType;

  switch (operator) {
    case "+":
      result = numberOne + numberTwo;
      if (result % 2 === 0) {
        resultType = "even";
      } else {
        resultType = "odd";
      }

      console.log(
        `${numberOne} ${operator} ${numberTwo} = ${result} - ${resultType}`
      );
      break;

    case "-":
      result = numberOne - numberTwo;
      if (result % 2 === 0) {
        resultType = "even";
      } else {
        resultType = "odd";
      }

      console.log(
        `${numberOne} ${operator} ${numberTwo} = ${result} - ${resultType}`
      );
      break;

    case "*":
      result = numberOne * numberTwo;
      if (result % 2 === 0) {
        resultType = "even";
      } else {
        resultType = "odd";
      }

      console.log(
        `${numberOne} ${operator} ${numberTwo} = ${result} - ${resultType}`
      );
      break;

    case "/":
      if (numberTwo === 0) {
        console.log(`Cannot divide ${numberOne} by zero`);
        break;
      }
      result = numberOne / numberTwo;
      if (result % 2 === 0) {
        resultType = "even";
      } else {
        resultType = "odd";
      }

      console.log(
        `${numberOne} ${operator} ${numberTwo} = ${result.toFixed(2)}`
      );
      break;

    case "%":
      if (numberTwo === 0) {
        console.log(`Cannot divide ${numberOne} by zero`);
        break;
      }
      result = numberOne % numberTwo;

      console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
      break;
  }
}

operationsBetweenNumbers(["7",
"3",
"*"])
