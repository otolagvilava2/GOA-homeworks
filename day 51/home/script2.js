let balance =Number(prompt("enter your balance"))
let nishani=Math.sign(balance)
if(nishani<0){
    console.log("შენ გაქ დავალიანება")

}
else if(nishani == 0 ){
    console.log("შენ არ გაქ ფული")
}
else{
    console.log("შენ გაქ ფული")
}