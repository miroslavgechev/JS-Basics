function shopping(input){

    let budget = Number(input[0]);
    let vcs = Number(input[1]);
    let cpus = Number(input[2]);
    let rams = Number(input[3]);

    let vcsPrice = vcs * 250;
    let cpusPrice = cpus * vcsPrice * 0.35;
    let ramsPrice = rams * vcsPrice * 0.10;

    let totalPrice = vcsPrice + cpusPrice + ramsPrice;

    if (vcs > cpus){
        totalPrice = totalPrice * 0.85;
    }

    let diff = Math.abs(budget - totalPrice);

    if (budget >= totalPrice){
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }

}

shopping(["920.45",
"3",
"1",
"1"])

