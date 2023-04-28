function foodDelivery(input){

let menuChicken = Number(input[0])
let menuFish = Number(input[1])
let menuVegetarian = Number(input[2])

let sumChicken = menuChicken * 10.35
let sumFish = menuFish * 12.4
let sumVegetarian = menuVegetarian * 8.15

let sumTotalMenu = sumChicken + sumFish + sumVegetarian

let grandTotal = sumTotalMenu + sumTotalMenu * 0.2 + 2.5

console.log(grandTotal)

}

foodDelivery(["2 ",
"4 ",
"3 "])
