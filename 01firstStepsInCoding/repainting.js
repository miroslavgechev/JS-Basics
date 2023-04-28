function repainting(input){

let inputNylon = Number(input[0])
let inputPaint = Number(input[1])
let inputThinner = Number(input[2])
let inputHours = Number(input[3])

let sumNylon = inputNylon * 1.5 + 2 * 1.5
let sumPaint = inputPaint * 14.5 + inputPaint * 14.5 * 0.1
let sumThinner = inputThinner * 5
let sumBags = 0.4
let sumMaterials = sumNylon + sumPaint + sumThinner + sumBags

let sumHours = inputHours * 0.3 * sumMaterials

let grandTotal = sumMaterials + sumHours

console.log(grandTotal)

}

repainting(["10 ",
"11 ",
"4 ",
"8 "])
