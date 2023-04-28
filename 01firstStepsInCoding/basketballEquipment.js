function basketballEquipment(input){

let annualFee = Number(input[0])

let priceShoes = annualFee * 0.6
let priceJersey = priceShoes * 0.8
let priceBall = priceJersey * 0.25
let priceAccessories = priceBall * 0.2

let total = annualFee + priceShoes + priceJersey + 
priceBall + priceAccessories

console.log(total)

}

basketballEquipment(["365 "])