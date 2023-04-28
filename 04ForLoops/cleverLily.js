function cleverLily(input){

    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerToySold = Number([input[2]]);

    let money = 0;
    let toyCount = 0;

    for (index = 1; index <= lilysAge; index++){

        if (index % 2 === 0){
            money += index * 5;
            money--;
        } else {
            toyCount++;
        }

    }

    let toysSold = toyCount * pricePerToySold;

    money = money + toysSold;

    let diff = Math.abs(money - washingMachinePrice);

    if (money >= washingMachinePrice){
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}

cleverLily(["10",
"170.00",
"6"])
