const num1=22;
console.log(num1);
console.log(num1.toFixed(4));

const balance = new Number(100);
console.log(balance);

console.log(typeof balance.toString());
console.log(balance.toFixed(6)); // decimal point 

const num2 = 123.895;
console.log(num2.toPrecision(3));

const num3=100000000;
console.log(num3.toLocaleString());

// use Number object
console.log(Number);
console.log(Number.MIN_VALUE);
console.log((Number.MIN_SAFE_INTEGER));

// *************Math****************
console.log(Math);
console.log(Math.abs(-10));
console.log(Math.round(34.5));
console.log(Math.PI);
console.log(Math.min(2,5,60,9));

console.log(Math.random());
console.log(Math.round(Math.random()*10+1));

//how generate random value
let max=20,min=10;
let ra = Math.floor(Math.random()*(max-min+1)) + min;
console.log(`random = ${ra}`);




