var regx=/[0-9]/;
let s=require("readline");
var z=s.createInterface(process.stdin,process.stdout);
z.question("enter phone no",function(name){
    if (regx.test(name)){
        console.log("valid no");
    }
    else{
        console.log("Invalid no");
    }
    process.exit();
});     