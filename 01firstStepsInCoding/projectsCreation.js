function projectsCreation(input){

let archName = input[0]
let projectsNumber = Number(input[1])

let hours = projectsNumber * 3

console.log(`The architect ${archName} will need ${hours} hours to complete ${projectsNumber} project/s.`)

}

projectsCreation(["George ",
"4 "]
)