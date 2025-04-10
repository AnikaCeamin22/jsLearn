console.log("2" > 1);
console.log("1" == 1);
console.log("1" === 1); // cheack value and datatype
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined >= 0);

/*
null >=0 true 
because an equality cheak == and 
comparisions > < >= <= work differently.
Comparision convert null to a number, treating it as 0.
that's why null>=0 true and null > 0 false.
*/


