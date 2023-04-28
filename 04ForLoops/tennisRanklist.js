function tennisRanklist(input){

    let index = 0;

    let tournaments = Number(input[index]);
    index++;

    let initialPoints = Number(input[index]);
    index++;

    let points = 0;

    let wonTournamentsCounter = 0;
    
    for (counter = 0; counter < tournaments; counter++){

        let currentTournament = input[index];
        index++;

        if (currentTournament === "W"){
            points += 2000;
            wonTournamentsCounter++;
        } else if (currentTournament === "F"){
            points += 1200;
        } else if (currentTournament === "SF"){
            points += 720;
        }

    }

    let averagePoints = points / tournaments;
    let wonTournamentsRatio = wonTournamentsCounter / tournaments * 100;

    console.log(`Final points: ${points + initialPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${wonTournamentsRatio.toFixed(2)}%`);

}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])
