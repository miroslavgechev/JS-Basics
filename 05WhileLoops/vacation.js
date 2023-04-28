function vacation(input){

    let tripCost = Number(input[0]);
    let money = Number(input[1]);
    let spendingCount = 0;
    let days = 0;

    let index = 2;
    let currentAction = "";
    let currentValue = 0;

    let hasSpentTooMuch = false;

    while (tripCost > money){

        currentAction = input[index];
        index++;
        currentValue = Number(input[index]);
        index++;
        days++;

        if (currentAction === "spend"){
            money -= currentValue
            spendingCount++;
        } else if (currentAction === "save"){
            money += currentValue;
            spendingCount = 0;
        }
        
        if (money < 0){
            money = 0;
        }

        if (spendingCount === 5){
            hasSpentTooMuch = true;
            break;            
        }

    }

    if (hasSpentTooMuch) {
        console.log("You can't save the money.");
        console.log(days);
    } else {
        console.log(`You saved the money for ${days} days.`)
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
