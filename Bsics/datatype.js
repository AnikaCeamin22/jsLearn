"use strict"; // treat all JS code as newer version
//alert(3+3); // work only browser

console.log(3+3); 
console.log('Richa');

let name="Anika";
let age=23;
let isLoggedIn=false;

/*
datatype:
1.Number => 2 to 53,
2.Bigint,
3.string,
4.boolean,
5.null => standalone value,
6.undefined => value not assigned
7.symbol => unique-ness used
8.object
*/

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof age);

// Symbol
const id1 = Symbol('123');
const id2=Symbol('123');
console.log(id1 == id2);
console.log(id1 === id2);

// BigInt
const bigNum=12344n;
console.log(bigNum);
console.log(typeof bigNum);




