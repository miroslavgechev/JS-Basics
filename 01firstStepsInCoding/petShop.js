function petShop(input){

    let packsDog = Number(input[0]);
    let packsCat = Number(input[1]);

    let totalPrice = packsDog * 2.50 + packsCat * 4

    console.log(`${totalPrice} lv.`)

}

petShop(["5 ",
"4 "]
)