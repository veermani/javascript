var a=new Date();
var day=a.getDay();
var array=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
console.log(array[day]);

var hour=a.getHours();
var minute=a.getMinutes();
var second=a.getSeconds();
var ampm=hour >=12 ?"pm":"am";
var hour=hour%12;

console.log(hour +ampm+":"+minute+":"+second);