let st = new Set();
st.add(1);
//chainning property
st.add(2).add(3).add(4).add(2).delete(1);
console.log(st);

// convert arr or string to set;
let arr=[10,11,12,13,14];
let s = "Bangladesh";
let stx = new Set(arr);
let sty = new Set(s);
console.log(stx);
console.log(sty);

//convert set to array
// set is iterable
console.log([...sty]);
console.log(Array.from(st));

//set can do mathematical set operation
//union
sty.add(11).add(12);
let uni = new Set([...stx,...sty]);
console.log(uni);
//intersection
let interset = new Set([...stx].filter((x)=>{
    return sty.has(x);
}));
console.log(interset);
//difference
let diff = new Set([...sty].filter((x)=>{
    return !stx.has(x);
}));
console.log(diff);

//WeakSet
// is not iterable and used only for object;
//it helps to maintan class
let ws = new WeakSet();
class SomeClass{
    constructor(){
        ws.add(this);
    }
    called(){
        if(ws.has(this)){
            return "Called the method using object instance";
        }else{
            return new Error("Not allow");
        }
    }
};
let inst = new SomeClass();
console.log(inst.called());
//console.log(SomeClass.prototype.called());


//ES11(2020):
//optinal Chainning,helps to save from error and return undefind it not find any element
let ans = arr?.[10];
console.log(ans);

const obj = {
    step1 : {
        step2: {
            step3: "Hello",
        }
    }
}
let step = obj?.step1?.step2?.step3;
console.log(step);

//Nullish Coalessing Operator:
//hepls to set default value when finds any null or undefind 
let p = null;
console.log(p?? "JavaScript");













