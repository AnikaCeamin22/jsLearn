// this in object
const user = {
    name : "anika",
    age : 23,

    welCome : function() {
        console.log(this);        
        console.log(`${this.name}, welcome you .How are you?`);        
    }
}
user.welCome();
user.name = "Richa";
user.welCome();

console.log(this);// empty object.
// but in browser , global object(window).

//this in function -> show a global object 
function chai() {
    let username = "ceamin";
    console.log(this); 
    console.log(`Chai Name = ${this.username}`);
       
}
chai();

//this in arrow function -> show an empty object
const milk = () => {
    let username = "ceamin";
    console.log(this); 
    console.log(`Milk Name = ${this.username}`);   
}
milk();

//implicet returned
const addTwo = (num1, num2) => (num1+num2);
console.log(addTwo(5,10));

const obj = () => ({name: "Ceamin"});
console.log(obj());









