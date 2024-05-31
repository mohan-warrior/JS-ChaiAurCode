let score = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber);

// after conversion output values
//"33" => 33
//"33abc" => NaN
//true=>1; false=>0
//null => 0
//undefined => NaN
//"Mohan" =>NaN

let isLoggedIn= ""

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=>true; 0=>false
//"" => false
// "MOhan" => true


let someNumber =44

let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);