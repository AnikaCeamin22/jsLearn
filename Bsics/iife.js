//IIFE = Immediately Invoked Function Expressions
(function () {
    //named IIFE
    console.log(`DB Connected`);    
})();


( () => {
    console.log('DB Connected using arrow function');
    
})();

( (name) => {
    console.log(`${name} Connected using arrow function`);
    
})('Anika');

//Falsy value = false,0,-0,null,undefined,NaN,""
//Truethy Value other all as ->"0", " ",'false',[],{},function(){}

//Nullish Coalesing Operator:
let val1,val2,val3;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? null ?? 20; 
console.log(`val1 = ${val1}  and val2 = ${val2} and val3 = ${val3}`)

