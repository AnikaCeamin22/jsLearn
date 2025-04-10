// async function getAll(){
//     try {
//         const response = await fetch('https://randomuser.me/api/')  //string
//          const data = await response.json(); //convert string to json
//          console.log(data);                
//     } catch (error) {
//         console.log("Error: =  ",error);        
//     }
// }
// getAll();

//or
fetch('https://randomuser.me/api/')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);    
})
.catch(function(error){
    console.log("Error: =  ",error);
})

/*
The fetch() method takes one mandatory argument, 
the path to the resource you want to fetch.

 It returns a Promise that resolves to the 
 Response to that request — as soon as 
 the server responds with headers —
 even if the server response is an HTTP error status.

You can also optionally pass in an init options
 object as the second argument.
 */

