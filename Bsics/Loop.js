// // for of:
// const arr = [ 1,2,3,'A','B','C'];
// console.dir(arr);
// for(let i of arr){
//     console.log(i);    
// }
// const str = "Bangladesh";
// console.dir(str);
// for(let i of str){
//     console.log(i);    
// }
// const obj = {
//     Fname : "Anika",
//     Lname : "Ceamin",
//     age: 23,
// }
// console.dir(obj);
// //not work for object because Symbol.iterator is absent
// // for(let i of obj){
// //     console.log(i);    
// // }
// const st = new Set([1,2,2,2,3,4,5]);
// console.dir(st);
// for(let i of st){
//     console.log(i);    
// }
// const mp = new Map([
//     [1, "Hello"],
//     [2, "All"],
// ])
// console.dir(mp);
// for(let [key,value] of mp){
//     console.log(value);    
// }


// // for in:
// const arr1 = [ 1,2,3,'A','B','C'];
// for(let key in arr1){    
//     console.log(`${key} = = ${arr1[key]}`);    
// }
// const str1 = "Bangladesh";
// for(let key in str1){
//     console.log(`${key} = = ${str1[key]}`);   
// }
// const obj1 = {
//     Fname : "Anika",
//     Lname : "Ceamin",
//     age: 23,
// }
// for(let key in obj1){
//     console.log(`${key} = = ${obj1[key]}`);     
// }
// const st1 = new Set([1,2,2,2,3,4,5]);
// for(let key of st1){
//     console.log(key);    
// }
// const mp1 = new Map([
//     [1, "Hello"],
//     [2, "All"],
// ])
// // not work
// // for(let key in mp1){
// //     console.log(mp1[key]);    
// // }


// for Each:
const arr2 = [1,2,3,'A','B','C'];
//using call back function
arr2.forEach( function(value,key,arr) {
    console.log(`${key} = = ${value}`);   
})
//using arrow function
arr2.forEach( (value,key,arr)=> {
    console.log(`${key} = = ${value}`);   
})
//using regular function
function print(value) {
    console.log(value);    
}
arr2.forEach(print);
const st2 = new Set([1,2,2,2,3,4,5]);
st2.forEach( (value)=> {
    console.log(` = = ${value}`);   
})
const mp2 = new Map([
    [1, "Hello"],
    [2, "All"],
])
mp2.forEach( (value,key)=> {
    console.log(`${key} = = ${value}`);   
})







