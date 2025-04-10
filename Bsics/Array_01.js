// Array filter:
const arr = [1,2,3,4,5,6,7,8,9,10];

// const ans = [];
// arr.forEach((value) => {
//     if(value>4){
//         ans.push(value);
//     }
// })

// const ans = arr.filter((value)=>{
//     return value>4;
// })

const ans = arr.filter((value)=> value>4 )
console.log(ans);
const ans2 =arr.filter((value) => value%2==0)
console.log(ans2);

//Array Map:
//const ans3 = [];
// arr.forEach((value) => {
//         ans3.push(value/2);
// })
// const ans3 = arr.filter((value)=>{
//     return (value/2);
// })
 const ans3 = arr.map((value) => value/2);
 console.log(ans3);

 //Chaining:
 const ans4 = arr
            .filter((value)=> value>4)
            .map((value)=> value+10)
            .filter((value)=> value%2==0)
console.log(ans4);

//Array reduce:
const ans5 = arr.reduce((acc,value)=>(acc+value),0);
console.log(ans5);








