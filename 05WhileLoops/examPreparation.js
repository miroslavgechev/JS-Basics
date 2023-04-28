function examPreparation(input){

    let badGradesLimit = Number(input[0]);
    let badGradesCount = 0;

    let numberOfProblems = 0;
    let taskGrade = 0;
    let index = 1;
    let nextValue = input[index];
    let currentGrade = 0;
    let lastProblem = "";

    let hasFailed = false;

    while (nextValue !== "Enough"){

        lastProblem = nextValue;
        numberOfProblems++;
        index++
        currentGrade = Number(input[index]) 
        taskGrade += currentGrade;
        
        if (currentGrade <= 4){
            badGradesCount++
        }

        if (badGradesCount === badGradesLimit){
            hasFailed = true;
            console.log(`You need a break, ${badGradesLimit} poor grades.`);
            break;
        }
        
        index++;
        nextValue = input[index];

    }

    if (!hasFailed){
        let averageScore = taskGrade / numberOfProblems
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblem}`)
    }

}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
