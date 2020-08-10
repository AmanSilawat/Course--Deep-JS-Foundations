null == undefined // true
null === undefined //false

var workshop = {};  
console.log( workshop.topic )  //undefined

workshop.topic === null;  //false
workshop.topic == null;  // true


var work1 = 42; 
var work2 = [42];

work1 == work2 // false
work1 === work2 // false

// corner cases of equality
var arr = [];
//if (arr) {
//if (Boolean(arr)) {
if (true) {
  //yep
}

//if (arr == true) {
//if ("" == true) {
//if (0 == 1) {
if (false) {
  //Nope
}

//if (arr == false) {
//if ("" == false) {
//if (0 == 0) {
if (true) {
  //yep
}


//Avoid  ==
0 == 0 //true
"" == " " //false
//non-primitive



//Preferring ==
// you know type then use ==










