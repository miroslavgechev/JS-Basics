function oldBooks(input){

    let index = 0;
    let favoriteBook = input[index];
    index++;
    let currentValue = input[index];
    index++
    let booksChecked = 0;

    let isFound = true;

    while (currentValue !== favoriteBook){
        
        if(currentValue === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${booksChecked} books.`);
            isFound = false;
            break;

        }
        
        booksChecked++;
        currentValue = input[index];
        index++

    }

    if (isFound){

        console.log(`You checked ${booksChecked} books and found it.`)

    }

}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

