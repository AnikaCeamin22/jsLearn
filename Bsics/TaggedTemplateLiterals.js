// Template Literals 
console.log(`i am ABC ${2+3} add to me`);

//Tagged Template Literals
//used when we try to modify anything in template literals
let a=12,b=13;
const modifier = (strings,...values)=>{
    console.log("AAA"); // does not show        
    const m=String.reduce((pre,curr)=>{
    return pre+curr+(values.length? "$ " + values.shift() : "")
    },"");
    return m;
}
console.log(modifier,`Hell0 all ${a} and ${b} are team mate at this time`);
