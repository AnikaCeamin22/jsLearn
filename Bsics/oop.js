//object literal:
const obj={
    userName:"Anika",
    age:23,

    getUser: function(){
        console.log(`Name : ${this.userName} and Age : ${this.age}`)
        console.log(this);
    }
}

obj.getUser();
console.log(this);

//
function User(userName,loginCount,isLoggedIn)
{
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.getAll=function(){
        console.log(`Welcome ${userName}`);        
    }

    return this;
}
const useOne=User("anika",12,0);
const useTwo =User("Ceamin",6,1);
const userThree=new User("Richa",2,0);
console.log(useOne);
console.log(userThree);
console.log(useTwo);
//important of new key word




  


