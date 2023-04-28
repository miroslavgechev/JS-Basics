function toyShop(input) {
  let bookingPrice = Number(input[0]);
  let puzzlePieces = Number(input[1]);
  let dollPieces = Number(input[2]);
  let bearPieces = Number(input[3]);
  let minionPieces = Number(input[4]);
  let truckPieces = Number(input[5]);

  let totalPieces =
    puzzlePieces + dollPieces + bearPieces + minionPieces + truckPieces;

  let budget =
    puzzlePieces * 2.6 +
    dollPieces * 3 +
    bearPieces * 4.1 +
    minionPieces * 8.2 +
    truckPieces * 2;

    if (totalPieces >= 50){
        budget = budget * 0.75
    }
    
    budget = budget * 0.9

    let diff = Math.abs(budget - bookingPrice)

    if (budget >= bookingPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])


