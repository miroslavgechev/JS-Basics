function cinemaTickets(input) {
  let index = 0;
  let currentValue = input[index];
  let totalStudentTickets = 0;
  let totalStandardTickets = 0;
  let totalKidTickets = 0;
  let hasFinished = false;

  while (currentValue !== "Finish") {
    let movieName = currentValue;
    index++;
    let seatsCount = Number(input[index]);
    index++;
    let ticketCount = 0;

    currentValue = input[index];

    while (currentValue !== "End") {
     
        if (currentValue === "Finish"){
            hasFinished = true;
            break;
        }
     
        switch (currentValue) {
        case "standard":
          totalStandardTickets++;
          break;
        case "student":
          totalStudentTickets++;
          break;
        case "kid":
          totalKidTickets++;
          break;
      }

            ticketCount++;

      if (seatsCount <= ticketCount){
          break;
      }

      index++;
      currentValue = input[index];
    }

    let moviePercentFull = (ticketCount / seatsCount) * 100;

    console.log(`${movieName} - ${moviePercentFull.toFixed(2)}% full.`);

    if (hasFinished){
        break;
    }

    index++;
    currentValue = input[index];
  }

  let totalTickets =
    totalKidTickets + totalStandardTickets + totalStudentTickets;
  let percentStudentTickets = (totalStudentTickets / totalTickets) * 100;
  let percentStandardTickets = (totalStandardTickets / totalTickets) * 100;
  let percentKidTickets = (totalKidTickets / totalTickets) * 100;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
  console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
  console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

