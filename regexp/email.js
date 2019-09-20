var regx=/[^0-9/]@tz$/;
let s=require("readline");
var z=s.createInterface(process.stdin,process.stdout);
z.question("enter username",function(name){
    if (regx.test(name)){
        console.log("valid username");
    }
    else{
        console.log("Invalid username");
    }
    process.exit();
});