var d1=new Date(2010,11,08)
d1.setFullYear(2019,00,01);

var d2=new Date();
var a=Math.floor((d2.getTime()-d1.getTime())/86400000);
console.log(a);
