
   
   var d = new Date(2010,08,08);
   console.log(d.toString());
      d.setFullYear(2019,00,01);
      console.log(d.toString());
    var n = d.getTime();
    var a=n/1000;
    var b=a/60;
    var c=b/60;
    var z=c/24;
    //console.log(z);
          


    var e = new Date();
  console.log(e.toString());
    var f = e.getTime();
    var g=f/1000;
    var h=g/60;
    var i=h/60;
    var j=i/24;
    //console.log(j);
          
var k=Math.floor(j-z);
console.log(k);