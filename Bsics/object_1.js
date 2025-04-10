//singleton : constructor theke hle he
//Object.create();

//object literals

const mySym = Symbol("Key1"); // creat Symbol

const user = {
    name : "Anika",
    "fullName" : "Anika Ceamin",
    [mySym] : "Symbol", // symbol use in object
    age : 18,
    location : "BrahmanBaria",
    email : "anika@gmail.com",
    isLoggedIn : false,//
    lastLogInDays : ["Monday", "Sunday"]
};

console.log(user.email);//// try to use this formate most of the time
console.log(user["email"]); // try to use this formate special case
console.log(user.fullName); // may or not  work, not good to use this
console.log(user["fullName"]);
console.log(user[mySym]);
console.log(typeof user[mySym]);

user.age=23;
//Object.freeze(user); // can't change object data using this
//user.age=22;
console.log(user);

//object methord
user.func = function() {
    console.log(`${this.fullName} Hello all in object methord`);
}
user.func();
console.log(user.func());
