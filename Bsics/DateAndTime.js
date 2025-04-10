let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let creatDate = new Date(2024,9,9);
console.log(creatDate.toDateString());
console.log(creatDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myDate.getTime());

// gives time in milisecond 
//convert to second
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getHours());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday : "short",
})