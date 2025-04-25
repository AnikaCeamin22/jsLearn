// Fetch API
let file = "./Fetchdata.txt";

const find = () =>{
    fetch(file)
          .then((res)=>{
            return res.text();
          })
          .then((res)=>{
            document.getElementById('id1').innerHTML=res;
          })
}

async function  find2(){
    let res = await fetch(file);
    let ans = await res.text();
    document.getElementById('id2').innerHTML=ans;
}

//

