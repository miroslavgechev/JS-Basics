function histogram(input){

    let numberOfNumbers = Number(input[0]);

    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;


    for (counter = 1; counter <= numberOfNumbers; counter++){

        let currentNumber = Number(input[counter]);

        if (currentNumber < 200){
            p1Count++;
        } else if (currentNumber < 400){
            p2Count++;
        } else if (currentNumber < 600){
            p3Count++;
        } else if (currentNumber < 800){
            p4Count++;
        } else if (currentNumber >= 800){
            p5Count++;
        }
        
    }

    let p1 = (p1Count / numberOfNumbers) * 100;
    let p2 = (p2Count / numberOfNumbers) * 100;
    let p3 = (p3Count / numberOfNumbers) * 100;
    let p4 = (p4Count / numberOfNumbers) * 100;
    let p5 = (p5Count / numberOfNumbers) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}

histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])

