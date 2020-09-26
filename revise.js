/* 
== allows coercion (type diffrent)
=== diallows coercion (type same)


null double equal to undefined = true


If non-primitives: ToPrimitive
Prefer: ToNumber
=> 42 == [42]
=> numbert == ToPrimitive


Avoid
0 == ' '	// true
42 == [42]	//true
false == []   // true  <= coercion arr to boolean
== not comparisons with unknown types

Boolean(undefined) // 0
String(undefined) // "undefined"
Number(undefined) // NaN

Boolean([]) // 1
String([]) // ""
String([1, 2, 3]) // 1, 2, 3
Number([]) // 0
Number([1, 2, 3]) // NaN



Why to use Named function Expression
1. self-reference : usefull for recursion
2. more debuggable stack traces
3. more self-documenting code


IIFE


Binding Type
1. this default gloable binding
2. Implicit Binding
3. Dynamic Binding
4. Explicit Binding
5. new keyword Binding
6. 

*/

// comparisons null and undefined
var obj1 = { topic: null };
var obj2 = {};

if (obj1.topic == null && obj1.topic == null) {
	'null == null && undefined == null'; // consoleThis
}

if (obj1.topic == null || obj1.topic == null &&
	obj2.topic == null || obj2.topic == null) {
	'null == null || undefined == null'; // consoleThis
}


// <script type="module"  src="review.js"></script>  <=use this in index.html
// import * as workShop from "module/review_module.js";

// import ask from "module/review_module.js";
// workShop.ask("It's working")



// this reference to the objcet
var obj = {
	name: "Kyle",
	ask: function askName(question) {
		console.log(this.name +', '+ question);
	}
}

obj.ask('Whats my name'); // Kyle, Whats my name
new (obj.ask.bind(obj))(('Whats my name')); // undefined, Whats my name





// this reference to the gloable
var obj2 = {
	name: "Will",
	ask: (question) => {
		console.log(this.name +', '+ question);
	}
}

obj2.ask('Whats my name'); // , Whats my name

/*
** BOXING **
primitives values don’t have methods or properties.
Boxing is wrapping a primitive value in an Object.
When you treat a primitive type like if it were an object.
BoxingThis new object is then linked to the related built-in <.prototype>, so you can use prototype methods on primitive types.



4 ways to call a function in JavaScript



1 A regular function

function sum(a, b) {
  return a + b;
}
sum(5, 6);           // => 11
([3, 7]).reduce(sum) // => 10




*/