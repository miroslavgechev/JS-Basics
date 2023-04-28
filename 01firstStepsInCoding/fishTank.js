function fishTank(input) {

let fishTankLength = Number(input[0])
let fishTankWidth = Number(input[1])
let fishTankHeight = Number(input[2])
let fishTankPercentage = Number(input[3])

let fishTankSizeCubicCentimeters = fishTankLength * fishTankWidth * fishTankHeight
let fishTankSizeLiters = fishTankSizeCubicCentimeters * 0.001

let liters = fishTankSizeLiters - fishTankSizeLiters * fishTankPercentage/100

console.log(liters)

}

fishTank(["85 ",
"75 ",
"47 ",
"17 "])
