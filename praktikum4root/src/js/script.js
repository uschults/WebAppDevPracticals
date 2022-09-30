let userName = "Andrew"
let userAge = 21
let userPets = ["Cat", "Dog"];
var userBalance = 1200
const EVERY_DAY_SPENDING = 2.4;
var everyDaySpendingPerPet = 6
var daysSurvived = 0
//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)
console.log("User Balance", userBalance)
console.log("Every Day spending per pet", everyDaySpendingPerPet)
console.log("Days Survived", daysSurvived)

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

function nameVertical(name) {
    console.log(name)
    for (let index = 0; index < name.length; index++) {
        console.log(name[index])
        
    }
}
// Sarah for example
nameVertical(userName)


function code(n) {
    return (n < 100) ? "Not a valid code" :
    (n < 200) ? "Informational responses (100-199)" :
    (n < 300) ? "Successful responses (200-299)" :
    (n < 400) ? "Redirection messages (300-399)" :
    (n < 500) ? "Client error responses (400-499)" :
    (n < 600) ? "Server error responses (500-599)":
    "Not a valid code" 
 }
// for example n = 121
console.log(code(121));



