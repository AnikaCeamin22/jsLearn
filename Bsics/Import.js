//Type 1
//import {pi} from './Export.js'; // named export
//console.log(pi);

//Type 2
// to import all export at a time
//import * as test from './Export.js';
//console.log(test);  // test return object

//Type 3
// for by default
import external,{pi as p,func as f} from './Export.js'
console.log(p, external);
f();


//Dynamic import: for ES11(2020)
(async function(){
    const { pi, run } = await import('./Export.js');
    run();
})();


