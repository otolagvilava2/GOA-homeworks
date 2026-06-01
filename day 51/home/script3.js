let pirveli=Number(prompt("enter your first figher health"))
let meore=Number(prompt("enter your second figher health"))

if(pirveli<50 || meore<50){
    console.log("this hp is not enoght")
}
else{
    console.log((`გამარჯვებული ამდენი hp იყო`), Math.max(pirveli,meore))
}