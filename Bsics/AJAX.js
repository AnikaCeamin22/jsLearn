const sendRequest = (method,url,data)=>{
    const promise = new Promise((resolve,reject)=>{
        // create a new response
        const xhr= new XMLHttpRequest();
        //what to do when a response arrive
        xhr.onload = ()=>{
            if(xhr.status<400){
              resolve(xhr.response);
            }
            else{
                // to find applicaion specific error
                reject(`there is an error ${xhr.status}`);
            }
        }
        xhr.onerror= ()=>{
            reject(`There is an error`);
        }
        //prepare a request
        xhr.open(method,url);
        //Type defined
        xhr.responseType='json';
        //send a request
        xhr.send(data); // data must be string
    });
    return promise;
}

const getData = ()=>{
    alert('Click on Get Data');
    sendRequest("GET","https://jsonplaceholder.typicode.com/todos/1")
                .then((res)=>{
                    console.log(res);                    
                })
                .catch((err)=>{
                    console.log(err);                    
                });
}

const sendData =()=>{
    alert('Click on Send Data');
    sendRequest("POST",
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          })
           )
            .then((res)=>{
                    console.log(res);                    
            })
            .catch((err)=>{
                    console.log(err);                    
            });
  }

let g=document.getElementById('get');
let s=document.getElementById('send');

g.addEventListener("click",getData);
s.addEventListener("click",sendData);