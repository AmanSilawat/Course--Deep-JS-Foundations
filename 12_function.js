/*
1. reliable function self-reference (recursion, etc)
2. more debuggable stack traces
3. more self-documenting code
*/

// arrow function / anonymous arrow function
var ids = people.map(person => person.id);

// use getId to more redability
var ids = person.map(function getId(person) {
	return person.id;
});