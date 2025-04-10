//singleton object
const tinderuser = new Object();
console.log(tinderuser);

tinderuser.id = "1234";
tinderuser.name = "Richa";
tinderuser.isLoggedIn = false;
console.log(tinderuser);

const regularuser = {
     email : "anika Ceamin",
     fulllName : {
        userFullName: {
            fName : "Anika",
            lName : "Ceamin"
        }
     }
};
console.log(regularuser.fulllName.userFullName.fName);

//concat two object using splied as array or assign
const obj1 = {1 : "a", 2 : "b"};
const obj2 = {2 : "c", 4 : "d", 5 : "e"};
const obj3 ={...obj1,...obj2};
const obj4 = Object.assign({},obj1,obj2);
console.log(obj3);
console.log(obj4);

//find all keys and values in an object as an array
const key = Object.keys(tinderuser);
const value =Object.values(tinderuser);
console.log(`keys = ${key} and values = ${value}`);
console.log(Object.entries(tinderuser));

//check any key present or not( to avoid undefind)
console.log(tinderuser.hasOwnProperty("id"));

//destructuring can do in object and array: 

const course = {
    courseName : "JavaScropt",
    price : "999",
    courseInstructor : "Richa"
}
//const {courseInstructor} = course;
//console.log(courseInstructor);
const {courseInstructor : instructor} = course;
console.log(instructor);

//JSON:



