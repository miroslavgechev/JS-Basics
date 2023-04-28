function godzillaVsKong(input){

    let totalBudget = Number(input[0]);
    let statists = Number(input[1]);
    let priceClothing = Number(input[2]);

    let budgetDecor = totalBudget * 0.1;

    let budgetClothing = priceClothing * statists 

    if (statists > 150){
        budgetClothing = budgetClothing * 0.9
    }

    let totalExpenses = budgetClothing + budgetDecor;

    let diff = Math.abs(totalBudget - totalExpenses)

    if (totalBudget >= totalExpenses){
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }

}

godzillaVsKong(["9587.88",
"222",
"55.68"])

