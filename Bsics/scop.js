//child scope parent scope,everything can accecss
// but parent cant not acccess child things,
function one() {
    const username = "anika";

    function two() {
        const website = "youtube";
        console.log(username);
        
    }
    //console.log(website); /not work
    two(); 
}
one();
    
 
console.log(addOne(4)); // work
function addOne(num) {
    return num+1;
}
console.log(addOne(6)); // work


//console.log(addTwo(10));// not work
const addTwo = function (num) {
    return num+2;
}
console.log(addTwo(2));//work


    
