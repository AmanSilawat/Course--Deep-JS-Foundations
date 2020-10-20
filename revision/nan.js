var number = 50;
var string = '50';
var strNum = '50Hello';
var nan = NaN;

// isNaN Output
console.log(isNaN(number)); // false
console.log(isNaN(string)); // false
console.log(isNaN(strNum)); // true          <--- isNaN vs Number.isNaN
console.log(isNaN(nan)); // true

console.log('...'); // Separator

// Number.isNaN Output
console.log(Number.isNaN(number)); // false
console.log(Number.isNaN(string)); // false
console.log(Number.isNaN(strNum)); // false   <--- isNaN vs Number.isNaN
console.log(Number.isNaN(nan)); // true
