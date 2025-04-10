const name = "Anika Ceamin";
const repoCount = 50;

console.log(name + repoCount + " Value");// not good to use
console.log(`${name}${repoCount} Value`); // try to use most of time
console.log(name);

const gameName = new String("TikTok");
console.log(gameName);
console.log(` is = ${gameName[1]}`);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const sub = gameName.substring(2,5);
console.log(sub);

console.log(gameName.slice(-5,-1));

const str = "   Anika   ";
console.log(str.trim());

const url = "httml://anika.com/Anika20/Richa";
console.log(url.replace("20","22"));

console.log(url.includes("://",7));
console.log(url.includes("://"));

// string to array convert
console.log(url.split("/"));
console.log((url[3]));







