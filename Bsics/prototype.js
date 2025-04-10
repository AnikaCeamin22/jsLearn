let name = "   Anika   ";

let myHeros = ['Anika','Camin'];

let heroPower={
    Anika: 'observation',
    Ceamin:'wise',
    getPower: function(){
        console.log(`Power is: ${this.Anika}`);        
    }
}

Object.prototype.Richa = function(){
    console.log(`Anika Ceamin Richa`);    
}
console.log(heroPower);
heroPower.Richa();
myHeros.Richa();

Array.prototype.Hello=function(){
    console.log("HEAo");    
}
//heroPower.Hello();
myHeros.Hello();



