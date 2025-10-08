let x = 7
console.log(x > 5) // true
console.log(x == 7) // checks value only
console.log(x === "7") // checks value and data type
console.log(x != 5) // true

if(x > 5) {
    console.log("x is greater than 5")
} else if(x == 5) {
    console.log("x is equal to 5")
} else {
    console.log("x is less than 5")
}

if(x > 700){
    console.log("x is greater than 700")
}else if(x > 400){
    console.log("x is smaller than 700 but greater than 400")
}else{
    console.log("x is smaller than 400")
}

age = 10
weight = 70

if(age < 15 && weight > 50){
    console.log("Overweight for this age")
}

console.log(parseFloat("abc"))

let money = false
let vip = false

if(money || vip){
    console.log("You can enter the club")
}else{
    console.log("You cannot enter the club")
}

let y = 5

if(y != 5){
    console.log("y is not 5")
}else{
    console.log("y is 5")
}