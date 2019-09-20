var a='nitesh';
try{
     if(a<0) throw "number is to low";
    if(a>10) throw "number is to high";
    f(isNaN(a)) throw "not a number";
     if(a=="") throw "empty value";
    console.log(b);
}
catch(e){
    console.log(e.message);
}
finally{
    console.log("heloo");
}