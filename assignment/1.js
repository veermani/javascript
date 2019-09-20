// ASSIGNMENT 1 - JAVASCRIPT

// Ques 1) Find the output of the followings (along with the reasons):-

// 	a) 

// for(var i = 0; i<10; i++){
// console.log("i >>>>" , i);
// 			setTimeout(function(){
// 				console.log(i);
// },1000)
// }
// OUTPUT:
// i >>>> 0
// i >>>> 1
// i >>>> 2
// i >>>> 3
// i >>>> 4
// i >>>> 5
// i >>>> 6
// i >>>> 7
// i >>>> 8
// i >>>> 9
//after 1 sec
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

// REASON: 
// after printing 9 value of i,NOW i is 10 and value is ressign to every elements which was in SetTimeout function and 10 becoz keyword is var.

//b)	
// for(let j = 0; j<10;j++){
// console.log("j >>>>" , j);
// 			setTimeout(function(){
// 				console.log(j);
// },1000)

// }

// OUTPUT:
// j >>>> 0
// j >>>> 1
// j >>>> 2
// j >>>> 3
// j >>>> 4
// j >>>> 5
// j >>>> 6
// j >>>> 7
// j >>>> 8
// j >>>> 9

// after 1 second 

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// reason: let does not reassign the value..

//Ques 2) Find the output of the followings:-

//a.
// function abc(){
// console.log(b)
// }
// let b = 'delta';
// abc();
//result:  b=delta
//Reason:function is finding variable in its own scope ,it getSelection.There is calling after the declaration
//b.
// function abc(){
// console.log(c)
// }
// abc();
// let c = 'delta';
// output:reference console.error(c not defined becoz calling before assigning value later);


// Ques 3) Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38

// var a=new Date();
// var day=a.getDay();
// var array=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
// console.log(array[day]);

// var hour=a.getHours();
// var minute=a.getMinutes();
// var second=a.getSeconds();
// var ampm=hour >=12 ?"pm":"am";
// var hour=hour%12;

// console.log(hour +ampm+":"+minute+":"+second);

// output:
// monday
// 2pm:55:22
// Ques 4) The _____ method of an Array object adds and/or removes elements from an array.
//         A. Reverse
//         B. Shift
//        C. Slice
//        D. Splice
// ans:
//splice


// Ques 5) Which of the following is not considered a JavaScript operator?
// A. new
// B. this
// C. delete
// D. typeof

//ANS: this

// Ques 6) Write the output for the following code, also define reason

// var a=10
 
// let func = ()=>{
//  console.log(a)
//  for(var a=1; a<5; a++)
//  {
//    console.log(a)
//  }
//  console.log(a)
// }
 
// func()

//answer-  undefined 1 2 3 4 5 
//concept- function is first of all finding variable in own scope because var a is declared in in for loop so hoisting is working
//  that why printing undefined  and condtion is failed on var i=5 so at the end 5 is printing


// Q7) - Which of the following is the output of the below JavaScript code?
//  var x = [typeof x, typeof y][1];
//   typeof typeof x;
// 1.  "undefined"
// 2.  "number"
// 3.  "string"
// 4.  "object"


//ans: string
// since type of x is undefined and undefined is string so typeof=string

// Ques 8) Select the output for the following code , also explain it
 
// let a = ("success" && "not success")||1
// console.log(a);


// Success
// not success
// 1
// undefined

//answer- 'not suceess'

//concept- in the case of && operator if the first value is false then it return to first statement
//  otherwise it go to second statement and return second statement
 
//concept- in the case of || operator if the first value is false then it go to
//second statement return second statemnt in case of first value is true then it return first statement not go to seconde statement

// false values commonly are:

// 1.0
// 2.false
// 3.null
// 4.synatax erroe;
