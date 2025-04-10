//creat promise
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task;
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log("Async task 1 is complete");
        resolve();
    },2000)
})
//consumed promise
promiseOne.then(function(){
    console.log("Promise Consumed");    
})

//or
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is complete");
        resolve();
    },2000)
}).then(function(){
    console.log("Promise Consumed too");
})

//or
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "anika", age:23})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);    
})

//or
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error) resolve({userName: "Ceamin", age:23});
        else reject("Go Back");
    },3000)
})
promiseFour
.then(function(re){
    console.log(re);
    return re.userName;    
})
.then(function(re){
    console.log(re);    
})
.catch(function(error){
    console.log(error);    
})
.finally(function(){
    console.log("Tata all");
    
})

//or not work for rejection, use try catch block
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error) resolve({userName: "Richa", age:23});
        else reject("Anika Ceamin");
    },1000)
})
async function consumePromiseFive(){
    try{
       const response = await promiseFive;
       console.log(response);
    }catch(error){
        console.log(error);
        
    }    
}
consumePromiseFive();