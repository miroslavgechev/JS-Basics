function worldSwimmingRecord(input){

    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeFor1Meter = Number(input[2]);

    let timeDelay = Math.floor(distance / 15) * 12.5

    let time = distance * timeFor1Meter + timeDelay;

    let diff = Math.abs(time - currentRecord);

    if (time < currentRecord){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }

}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

