/*
1995 Brendan Eich is the creator of the JavaScript language

defination of closure -------------
jab function call hota hai tab function apne outside ke lexical scope ko saved rkta hai.

Closure is when a function  "remembers" its lexical scope even when the function is executed outside the lexical scope.


module ******
Encapsulation : hiding data and behaviour
*/
function WorkshopModule(teacher) {
	var publicAPI = {ask, };
	return publicAPI;

	//******

	function ask(querstion) {
		console.log(teacher, querstion);
	}
};

var workshop = WorkshopModule("Kyle");

workshop.ask("it's a module, right?");