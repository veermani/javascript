<!-- creating 3 object constructors and assigning values to it -->
var obj1 = { a: 10 }; 
var obj2 = { b: 20 }; 
var obj3 = { c: 30 }; 
  
<!--creating a target object and copying values and properties to it using object.assign() method -->
var new_obj = Object.assign({}, obj1, obj2, obj3); 
  
<!-- Displaying the target object -->
console.log(new_obj); 