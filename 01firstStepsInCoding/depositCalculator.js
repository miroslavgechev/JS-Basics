function depositCalculator(input){

let depositSum = Number(input[0])
let depositPeriod = Number(input[1])
let depositAnnualInterest = Number(input[2])

let interest = depositSum * depositAnnualInterest / 100
let interestMonthly = interest / 12
let totalSum = depositSum + depositPeriod*interestMonthly

console.log(totalSum)

}

depositCalculator(["200 ",
"3 ",
"5.7 "]
)