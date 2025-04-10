function login(username) {
    if(username == undefined)
    {
        return "Please enter your name";
    }
    return `${username}, just logged in.`;
} 
console.log(login());
console.log(login("Richa"));

//rest operator(...)/splied operaor(...)***
function calculateCartPrice(...val) {
    return val;
}
console.log(calculateCartPrice(200,300,400));

 

