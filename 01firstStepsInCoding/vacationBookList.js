function vacationBookList(input){

let bookPages = Number(input[0])
let bookPagesPerHour = Number(input[1])
let bookDaysAvailable = Number(input[2])

let bookTotalTime = bookPages / bookPagesPerHour
let totalTimeNeeded = bookTotalTime / bookDaysAvailable

console.log(totalTimeNeeded)

}

vacationBookList(["212 ",
"20 ",
"2 "])
