//toString -----------------------
let str = 10;
str.toString(); '10'
str.valueOf(); //10

[].toString(); //''
[1, 2, 3].toString(); //[1,2,3]
[null, undefined].toString(); //','
[[], [], [], []].toString(); //',,,'
[,,,,].toString(); //",,,"

str = {};
str.toString(); //[object object]

str = {a:2};
str.toString(); //[object object]

str = {toString(){ return"x"}}; 
str.toString(); //"x"


//toNumber -----------------------
Number(0); // 0
Number("0"); //0
Number("-0"); //-0
Number("009"); //9
Number("3.1245"); //3.1245
Number("0."); //0
Number(".0"); //0
Number("."); //NaN
Number("0xaf"); //175

Number(false); //0
Number(true); //1
Number(null); //0
Number(undefined); //NaN

//array coresion to number
Number(['']) //0
Number(['0']) //0
Number(['-0']) //-0
Number([null]) //0
Number([undefined]) //0
Number([1, 2, 3]) //NaN
Number([[[]]]) //0

Number({}) //NaN
Number({valueOf() {return 3;}}) //3



//toBoolean -----------------------
//false coercion
Boolean("")
Boolean(0)
Boolean(-0)
Boolean(null)
Boolean(false)
Boolean(undefined)

//true coercion
Boolean("foo")
Boolean(25)
Boolean({a: 2})
Boolean([1, 2])
Boolean(true)
Boolean(function(){})
//and more


//Coercion -----------------------
// auto convert to string
var numStudents = 16;
console.log(
  `There are ${numStudents} students.`
);

//
7+"a";  //coersion to string

+"5" // coersion to number

// i get a value using input type text this alway in string
var studentsInputElement = {value: "10"}

studentsInputElement.value;
+studentsInputElement.value; // lose redability
Number(studentsInputElement.value); // more redability

!+"5" //false
true //true
!true //false - negate (!)
!!true //true - negate (!)


//Coercion corner cases -----------------------
Number( "" ); // 0
Number( "  \t\n" ); // 0
Number( null ); // 0
Number( undefined ); // NaN
Number( [] ); // o
Number( [1, 2, 3] ); // NaN
Number( [null] ); // 0
Number( [undefined] ); // 0
Number( {} ); // NaN

String( -0 ) //0
String( null ) //"null"
String( undefined ) //"undefined"
String( [null] ) //""
String( [undefined] ) //""

Boolean( new Boolean(false) ) //true

//The Root Of All (Coercion) Evil
var studentInput = {}
studentInput.value = "";
Number(studentInput.value); //0

studentInput.value = "  \t\n";
Number(studentInput.value); //0

Number(true); //1
Number(false); //0

1 < 2; //true
1 < 3; //true
1 < 2 < 3; //true (but...)

(1 < 2) < 3; //true
(trrue) < 3; //true
1 < 3; //true















