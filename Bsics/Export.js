export const pi=3.1416;
const mod=1e9+7;
export default mod;
export function func(){
    console.log(`I am External`);    
}

//async function
export function run(){
    setTimeout(()=>{
        console.log("I am running");        
    },2000);
}
