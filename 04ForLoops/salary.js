function salary(input){

    let index = 0;
    let openTabsCount = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    for (i = 1; i <= openTabsCount; i++){

        let currentTab = input[index];
        index++;

        if (currentTab === "Facebook"){
            salary -= 150;
        } else if (currentTab === "Instagram"){
            salary -= 100;
        } else if (currentTab === "Reddit"){
            salary -= 50;
        }
        
        if (salary <= 0){
            console.log("You have lost your salary.");
            break;
        }

    }

    if (salary > 0){
        console.log(parseInt(salary));
    }

}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

