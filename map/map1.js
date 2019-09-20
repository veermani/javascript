var arr=[10,20,30,40,50];
var newArr=arr.map(function(value){
    value++;
return value;
   console.log(value);
});

console.log(arr);
console.log(newArr);