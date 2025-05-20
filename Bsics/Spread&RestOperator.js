// Spread operator used to copy or concatenate any array or object

let nums1=[1,2,3,4];
let nums2=[5,6,7,8,9];

let nums=nums1; // create a reference of nums1 in nums
nums1.push(10);
console.log(nums + "  " + nums1);

// to create a copy
let copyNums=[...nums1];
nums1.pop();
console.log(copyNums + "  " + nums1);

// concatenate two arrays
let con=[...nums1, ...nums2];
console.log(con);

const obj1={
    id: 123,
    name: 'ABC',
    age: 23
};
const obj2={
    city: "DD",
    number: 88,
    learn: "JS"
};

//concatenate two objects
const obj={...obj1,...obj2};
console.log(obj);


const obj3=obj1;  //create a reference of nums1 in nums
obj1.id=111;
console.log(obj3.id + "   " + obj1.id);
// to create a copy
const obj4={...obj1};
obj1.name="DEF";
console.log(obj4.name + "   " + obj1.name);


