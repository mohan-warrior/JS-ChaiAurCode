let score = true

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);

// after conversion output values
//"33" => 33
//"33abc" => NaN
//true=>1; false=>0
//null => 0
//undefined => NaN
//"Mohan" =>NaN

let isLoggedIn= ""

let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1=>true; 0=>false
//"" => false
// "MOhan" => true


let someNumber =44

let stringNumber =String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *************************Operations****************************

let value = 3 
let negValue =-value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Mohan"

let str3= str1+str2
// console.log(str3);

// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32

//above 4 lines of code will not be accepted in big companies 
// console.log((3+4)*5%3);//the code need to be clear by using brackets whereever needed

console.log(+true); //1
console.log(+"");//0

let num1, num2, num3 
num1=num2=num3=2+2 //not a good practice 

let gameCounter =100
gameCounter++
console.log(gameCounter);

let gameCounter1 =200
++gameCounter1
console.log(gameCounter1);

//check the mdn website for prefix and postfix in JS 
//https://tc39.es/ecma262/#sec-toprimitive this link might also help 