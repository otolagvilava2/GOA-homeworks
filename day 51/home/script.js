let random=Math.floor(Math.random()*5)+1
let guess=Number(prompt(`you have to guess number 1-5:`))
if(random===guess){
    console.log("შენ სწორად გამოიცანი")

}
else{
    console.log("შენ არასწორად გამოიცანი")
}