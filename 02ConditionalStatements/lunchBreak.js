function lunchBreak(input){

    let movieName = input[0];
    let movieLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let timeForLunch = breakLength / 8;
    let timeForRelax = breakLength / 4;

    let totalTime = movieLength + timeForLunch + timeForRelax;

    let diff = Math.abs(breakLength - totalTime);

    if (breakLength >= totalTime){
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(diff)} more minutes.`)
    }

}

lunchBreak(["Teen Wolf",
"48",
"60"])
