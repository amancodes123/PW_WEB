let x= function(){
    console.log("hi");
}

x();

//imegteatly call and use
(function exec(){
    console.log("named");
})();  

(function (x){
    console.log(x*x);
})(5);