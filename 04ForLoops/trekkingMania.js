function trekkingMania(input){

    let index = 0;

    let groupCount = Number(input[index]);
    index++;

    let musalaCount = 0;
    let monblanCount = 0;
    let kiliCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    let peopleCounter = 0;
    
    for (counter = 0; counter < groupCount; counter++){

        let currentNumber = Number(input[index]);
        index++;

        if (currentNumber <= 5){
            musalaCount += currentNumber;
        } else if (currentNumber <= 12){
            monblanCount += currentNumber;
        } else if (currentNumber <= 25){
            kiliCount += currentNumber;
        } else if (currentNumber <= 40){
            k2Count += currentNumber;
        } else {
            everestCount += currentNumber;
        }

        peopleCounter += currentNumber;

    }

    let musalaPercentage = musalaCount / peopleCounter * 100;
    let monblanPercentage = monblanCount / peopleCounter * 100;
    let kiliPercentage = kiliCount / peopleCounter * 100;
    let k2Percentage = k2Count / peopleCounter * 100;
    let everestPercentage = everestCount / peopleCounter * 100;

    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${monblanPercentage.toFixed(2)}%`);
    console.log(`${kiliPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);

}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
