pass=prompt("enter your password")
datvla = pass.length <=8 ? console.log("weak")
         :pass.length<=12?console.log("normal")
         :console.log("good")