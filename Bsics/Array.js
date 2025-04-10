const myArr = [1,2,3,4,5,6];
const myABC = ['A','B','C','D','E'];
const myArr2 = new Array(1,2,3,"a",'A');
console.log(myArr);
myArr.push(22);
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.unshift(0);
console.log(myArr);

//convert to string(toString,join)
const arr=myArr.join();
console.log(arr);
console.log(typeof arr);

//slice,splice*****
console.log(myArr);
const A=myArr.slice(1,3);
console.log("myArr = ", myArr);
console.log(" A = ", A);
const B=myArr.splice(1,3); // splice(where new element add,how many element remove,defined new element to be added) in main array
console.log("myArr = ", myArr); // change the main array
console.log(" B = ", B);
const F=myArr.splice(2,0,9,10);
console.log("myArr = ", myArr); // change the main array
console.log(" F = ", F);

//marge arrays
const C = A.concat(B,myArr);
console.log(" C = ", C);
//or splied(...)
const D = [...myABC,...myArr2,...myArr];
console.log(" D = ", D);

//convet one array
const E = [1,2,[3,4],5,[6,[7,7]]];
const one = E.flat(Infinity);
console.log(" one = ", one);

// string, object convet to array***
const s='Anika';
console.log(Array.isArray(s));
console.log(Array.from(s));
console.log(Array.from({name: "Anika"}));
console.log(Array.from(22334));
let x=0,y=3,z=5;
console.log(Array.of(x,y,z));







  