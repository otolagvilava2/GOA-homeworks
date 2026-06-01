let random=Math.floor(Math.random)
let momxmarebeli=Number(prompt("შემოიყვანეთ კამათ₾ის რიცხვი 1-6"))
if(Number.isInteger(momxmarebeli)){
    console.log("ეს არ არის რიცხვი")
}
if else(random>momxmarebeli){
    console.log(`შენ უფრო ნაკლები რიცხვი გქონდა`)
}
else{
    console.log("შენ უფრო მაღალი რიცხვი გქონდა")
}