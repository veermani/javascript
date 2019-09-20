 
// creating a function which will be the 
//prototype for the object to be created later 
function fruits() { 
	this.name = 'fruit 1'; 
} 

// creating a function to whose object will 
// inherit properties from the prototype 
// using object.create() method 
function
apple() { 
	fruits.call(this); 
} 

// creating an object of the apple function which 
// will have properties of the prototype 
// object i.e. fruits 
apple.prototype = Object.create(fruits.prototype); 
const app = new apple(); 

// Displaying the created object 
console.log(app.name); 
 
