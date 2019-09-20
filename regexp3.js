var a="this is a book";
var reg=/(?=.*(t))(?=.*(o))(?=.*(b))/;
if(reg.test(a)){
    console.log("true");
}
else{
    console.log("false");
}