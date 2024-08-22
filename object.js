let obj = {id:101, name: "Alex", salary:10000};

let emp = new Object();
emp.id=102;
emp.name="Aman";
console.log(emp);
console.log(obj);

function Exp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}
const e = new Exp(10,"abc",2000);
console.log(e);

delete emp.id
console.log(emp);


//object method

let emp={
    id:101,
    name:'sanket',
    age:24
};
let keys=Object.keys(emp);
console.log(keys);

let values=Object.values(emp);
console.log(values);

let entries=Object.entries(emp);
console.log(entries);

Object.freeze(emp);//freeze do not updates values


Object.seal(emp);

let o = Object.assign({},emp);
console.log(0);