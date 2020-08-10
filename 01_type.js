let x = "5";
x++; // 5        //y = Number(x) + 1;
x; // 6

//  NaN (Invalid Number) NaN is part of IEEE 754

var myAge = Number("0o46"); //Binary Octal is 38
var myCatAge = Number("n/a"); //NaN
Number("0o46") - "contain string"; // NaN

// isNaN first coerce is NaN or not after return true and false
isNaN(myAge); //fase
isNaN(myCatAge); //true
isNaN("any string"); //true

Number.isNaN(myCatAge); //true
Number.isNaN("any string"); //false

//Negative Zero --------------------
var trendRate = -0;
trendRate === -0; // true

trendRate.toString(); //"0"
trendRate === 0; //true
trendRate < 0; //false
trendRate > 0; //false

Object.is(trendRate, -0); //true
Object.is(trendRate, 0); //false

//any 0 and -0 zero convert to 0 or -0 but it's -1 or 1
Math.sign(-3); //-1
Math.sign(3); // 1
Math.sign(-0); //-0
Math.sign(0); // 0

//fix this
function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

sign(-3); //-1
sign(3); // 1
sign(-0); //-1
sign(0); // 1

// some program using direction arrow for negative or postitive value
function sign(trendRate) {
  var direction = trendRate < 0 || Object.is(trendRate, -0) ? "▼" : "▲";
  return `${direction} ${Math.abs(trendRate)}`; //abs() return absolute value of a number.
}

sign(-3); //-1
sign(3); // 1
sign(-0); //-1
sign(0); // 1

//type checking exercise

//poly filling
