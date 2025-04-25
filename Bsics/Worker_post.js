let cnt=0;
const func = ()=>{
    cnt++;
    postMessage(cnt);
    setTimeout(()=>{
        func();
        console.log(`Time out`);        
    },2000);
}
func();