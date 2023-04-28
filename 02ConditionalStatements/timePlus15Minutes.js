function timePlus15Minutes(input){

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes + 15;

    let finalHours = Math.floor(totalMinutes / 60);
    let finalMinutes = totalMinutes % 60;

    if (finalHours >= 24){
        finalHours = 0;
    }

    if (finalMinutes <= 9){
        console.log(`${finalHours}:0${finalMinutes}`)
    } else {
        console.log(`${finalHours}:${finalMinutes}`)
    }

}

timePlus15Minutes(["11", "08"])