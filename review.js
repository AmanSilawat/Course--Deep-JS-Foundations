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





// Prototype: Shadowing
function Workshop(teacher) {
	this.teacher = teacher;
};
Workshop.prototype.ask = function(question) {
	console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");

deepJS.ask = function(question) {
	this.__proto__.ask.call(this.question.toUpperCase());
};

deepJS.ask("Opps, is this infinit recursion?")