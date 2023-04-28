function onTimeForTheExam(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMinute = Number(input[3]);

  let examTime = examHour * 60 + examMinute;
  let arrivalTime = arrivalHour * 60 + arrivalMinute;

    

  if (arrivalTime > examTime) {
    console.log("Late");

    if (arrivalTime - examTime < 60) {
      console.log(`${arrivalTime - examTime} minutes after the start`);
    } else {
      if ((arrivalTime - examTime) % 60 < 10) {
        console.log(
          `${Math.floor((arrivalTime - examTime) / 60)}:0${
            (arrivalTime - examTime) % 60
          } hours after the start`
        );
      } else {
        console.log(
          `${Math.floor((arrivalTime - examTime) / 60)}:${
            (arrivalTime - examTime) % 60
          } hours after the start`
        );
      }
    }
  } else if (arrivalTime === examTime) {
    console.log("On time");
  } else if (examTime - arrivalTime <= 30) {
    console.log("On time");
    console.log(`${examTime - arrivalTime} minutes before the start`);
  } else {
    console.log("Early");

    if (examTime - arrivalTime < 60) {
      console.log(`${examTime - arrivalTime} minutes before the start`);
    } else {
      if ((examTime - arrivalTime) % 60 < 10) {
        console.log(
          `${Math.floor((examTime - arrivalTime) / 60)}:0${
            (examTime - arrivalTime) % 60
          } hours before the start`
        );
      } else {
        console.log(
          `${Math.floor((examTime - arrivalTime) / 60)}:${
            (examTime - arrivalTime) % 60
          } hours before the start`
        );
      }
    }
  }
}

onTimeForTheExam(["11", "30", "12", "29"]);
