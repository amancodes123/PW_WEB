console.log("Aman");

let arr = [1,2,3,4,5];
arr.push(6,7);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(9);
console.log(arr);

let a1=[1,2,3,4,5];
let a2=[3,4,5];
let a3=a1.concat(a2);
console.log(a1, a2, a3);

let s= a3.join("");
console.log(s);

a3.reverse();
console.log(a3);

console.log(a3.indexOf(4));


let arr1=[1,2,3,4,5,6];
console.log(arr1.slice(2,5));

arr1.splice(2,0,11);
console.log(arr1  );


//function
function greet(){
    console.log("hi there");
    console.log("how are you");
}
greet();

function sqr(x){
   // console.log(x*x);
   return(x*x);
}
let a=sqr(8);
console.log(a);