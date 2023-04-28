function oscars(input){

    let index = 0;
    
    let name = input[index];
    index++;
    
    let points = Number(input[index]);
    index++;
    
    let juryCount = input[index];
    index++;

    for (i = 1; i <= juryCount; i++){
        
        let currentName = input[index];
        index++;

        let currentScore = Number(input[index]);
        index++;

        points += (currentName.length * currentScore)/2;

        if (points > 1250.5){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }

    }

    if (points <= 1250.5){
        console.log(`Sorry, ${name} you need ${(1250.5 - points).toFixed(1)} more!`);
    }


}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
