// hoisting in js
test()

function test(){
    var x;
    var x;
    var x=10;
    var x=20;
    console.log(' value of x is ' + x);
   
    
}

// myTesting()
 
const myTesting=()=>{
    console.log("Hello i m testing") 
}
 myTesting()

// Function expressions are NOT Hoisted in JS**********************