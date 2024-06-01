// primitive 
//7 types :String,number, Boolean, null,
//  undefined, Symbol, BigInt

const score = 100 
const scoreValue =100.3

const isLoggedIn =false 
const outsideTemp =null
let userEmail;//value will be undefined here


const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

const bigNumber=345678347784844849n


//Reference (Non-primitive)
//Array ,Objects, Functions

const heros=["shaktiman","naagraj","doga"];

//object {}
let myObj={
    name:"Mohan",
    age: 22,
}


const myFunction =function (){
    console.log("Hello World");
}

console.log(typeof null); //object
console.log(typeof myFunction);//function

console.log(typeof anotherId);//symbol

//https://262.ecma-international.org/5.1/#sec11.4.3




//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive), Heap(Non-primitive) memory