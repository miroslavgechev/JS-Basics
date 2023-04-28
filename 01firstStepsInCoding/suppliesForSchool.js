function suppliesForSchool(input){

let pens = Number(input[0])
let markers = Number(input[1])
let eraser = Number(input[2])
let discount = Number(input[3])

let pricePens = pens * 5.8
let priceMarkers = markers * 7.2
let priceEraser = eraser * 1.2
let totalSum = priceEraser + priceMarkers + pricePens
let totalSumWithDiscount = totalSum - (totalSum*discount/100)

console.log(totalSumWithDiscount)

}

suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "])
