// least exposure or least prevalent principle search on wikipidia.

function fun() {
	console.log("print first")
}
fun();  //print first



//this is called IIFE (immediately invoked function expression)
( fun )();  //print first


// this is not a called function decorator because first word not a statement.
( function anotherOne() {
	console.log("print first");
} )();


// make sure understand what's you doing
var teacher = (function getTeacher() {
  try {
    return fetchTeacher(1);
  }
  catch(err) {
    return "Kyle";
  }
})();
console.log(teacher);



//block scoping : encapsulation
var teacher = "Kyle";
{
  let teacher = "Suzy";
  console.log(teacher); //Suzy
}
console.log(teacher); //Kyle


// block scoping: intend
function diff(x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  return y - x;
}
diff(20, 5)

 

// block scoping: explicit let block
function formatStr(str) {
  { let prefix, rest;
   prefix = str.slice(0, 3);
   rest = str.slice( 3 );
   str = prefix.toUpperCase() + rest;
  }
  
  if (/^FOO:/.test( str )) {
    return str;
  }
  
  return str.slice( 4 );
}

formatStr("hello");


// mutating value is allowing in const array
const teachers = [];
teachers.push('Kyle');
teachers[1] = 'Suzy';



// hoisting is not actually a real thing. javascript engin does not hoist. hoisting is a metaphor that we have made up is a launguage converntion

// metaphor implies that copy relationship without you potentialy even knowing.

student5  // undefined
teacher1  // undefined

var student5 = "you";
var teacher1 = "Kyle";



//....
var teacher = "kyle";
otherTeacher(); //ReferenceError: otherTeacher is not defined

function otherTeacher() {
  console.log(teacher); //undefined
  var teacher = "Suzy";
}


//.....................
{
	teach = "Kyle"; //TDZ Error
	let teach//
}

var teach = "Kyle";

{
	console.log(teach)//TDZ Error
	teach = "Suzy"; 
}














