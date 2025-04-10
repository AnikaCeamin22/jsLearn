function multipleBy(num){
    return num*5;
}
multipleBy.power=2;

console.log(multipleBy(5));
console.log(multipleBy.power);
console.log(multipleBy.prototype);

function createUser(userName,score){
    this.userName=userName;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.print=function(){
    console.log(`score is : ${this.score}`);
    
}

const x=new createUser("X",25);
const y=new createUser("Y",26);

x.print();

