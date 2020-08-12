
// TYPESCRIPT & FLOW
/*
Benefit ------------

1. catch type-related mistakes
2. communicate type intent
3. provide IDE feedback

caveats----------
1. inferencing is best-guess, not a guarantee
2. annotations are optional
3. any part of the application that isn't type uncertainty

inference -------
*/

var teacher = "Kyle";
// var teacher: string = "Kyle";  //custom type
//..
teacher = { name: "Kyle"} //"Kyle"


var studentName: string = "Frank"; //"Frank"
var studentCount: number = 16 - studentName; //NaN



/*
// prons ---
they make types more obvious in code
familiarity
extremely popular these days
they're very sophisticated and good at what they do

cons ---
they use "non-js-standard" syntax (or code comments)
the require* a build process.