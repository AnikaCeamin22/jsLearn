const str="Anika/Ceamin:Richa";
console.log(str.charAt(4));
console.log(str.charCodeAt(4));
console.log(str[4]);
console.log((str.at(4)));
console.log(str.at(-2));
//str[4]=$; not work;
console.log(`is = ${str.charAt(50)}`);
console.log(`is = ${str.at(50)}`);
console.log(`is = ${str.charCodeAt(50)}`);
console.log(`is = ${str[50]}`);


console.log("Slice = \n");
console.log(str.slice(4,8));
console.log(str.slice(-2.-9));
console.log(str.substring(4,7));
console.log(str.substr(-4,2));

console.log(str.concat(" ", "Hello ", "All."));

console.log("Trim  = \n");
const str1 = "        Anika    Ceamin   ";
console.log(str1.trim());
console.log(str1.trimEnd());
console.log(str1.trimStart());
console.log(str1.trimLeft());
console.log(str1.trimRight());

console.log("To convert a number to a string \n");
const num="22";
console.log(num.padEnd(1,""));
console.log(num.padStart(4,'x'));
console.log(num.toString());

console.log(num.repeat(4));
console.log(num.replace(22,24));
// replace use in regular expression => replace, match and search
console.log(str.replace(/richa/i,"Ceamin"));
console.log(str1.replaceAll('i','o'));
//convert string to array
console.log(str1.split("n"));

//searching 8
console.log("String Search = ");
console.log(str.indexOf("ka"));
console.log(str.indexOf("nk"));
console.log(str.lastIndexOf("i"));
console.log(str.indexOf("ka",10));
console.log(str.search("ka"));
console.log(str.search(/CE/i));
console.log(str.match("i"));
console.log(str.match(/A/ig));
console.log(str.includes("/"));
console.log(str.startsWith("Anika"));
console.log(str.endsWith("cha"));




