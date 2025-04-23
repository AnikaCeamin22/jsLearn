// "use strict";
console.log("Allah Help")

// Callback*********************************
let f=1;
let day=10;
// let enroll = (callback)=>{
//     console.log('Enroll in the course.....');
//     setTimeout(()=>{
//         if(f){
//             callback();
//         }else {
//             console.log('Failed to enroll');
//         }        
//     },2000);
// }

// let process = (callback)=>{
//     console.log('Processing the course...');
//     setTimeout(()=>{
//         if(day<=10){
//             callback();
//         }else{
//             console.log('Failed to complied the course in time');    
//         }
//     },3000);   
// }

// let getCertificate = ()=>{
//     console.log('Certificate is in processing...');
//     setTimeout(()=>{
//         console.log('Congrast! :)');        
//     },1000);    
// }

// enroll(function(){
//     process(getCertificate);
// })

// Promise*********************

let enroll_2 = ()=>{
    console.log('Enroll in Coures_2....');
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(f){
                resolve();
            }else{
                reject('Failed to enroll');
            }
        },2000);
    })   
    return promise; 
}

let process_2 = ()=>{
    console.log('Processing the course_2...');
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(day<=10){
                resolve();
            }else{
                reject('Failed to complied the course _2 in time')
            }
        },3000);
    })  
    return promise;  
}

let getCertificate_2 = ()=>{
    console.log('Certificate in processing for Course_2');
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done :)');
        },1000);
    }) 
    // or 
    // let promise =Promise.resolve('Done ...');
    return promise;   
}

enroll_2()
         .then(process_2)  // then takes a function as input, there the call function has no paremeter so we can call it by using this name, otherwise we need to write as ()=>{ return proecss(para); } 
         .then(getCertificate_2)
         .then((re)=>{
            console.log(re);            
         })
         .catch((err)=>{
            console.log(err);            
         })



// async and await use to represent promise call more efficiently
async function course(){
    try{
        await enroll_2();
        await process_2();
        let re = await getCertificate_2();
        console.log(re);        
    }catch(err){
        console.log(err);
        
    }
}
course();












 














