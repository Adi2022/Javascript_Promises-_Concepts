// Promise- is a javascript object representing completetion or failure of asynchronous operations.

// promise has 3 states-
// 1) pending - initial state , neither fullfilled nor rejected
// 2) resolved- meaning that operationcompleted successfully.
// 3) rejected - meaning that operation failed.

// 1st way of creating promise

const promise1=Promise.reject("Welcome to Edu Uddan");
promise1.then((data)=>{
    console.log(`Promise is success- ${data}`); 
})
promise1.catch((data)=>{
    console.log(`Promise is failed-${data}`); 
})

// 2nd way of creating promise

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    reject("Welcome to Edu Uddan")
    },2000)
})

promise2.then((data)=>{
    console.log(`Promise is resolved- ${data}`); 
}).catch((err)=>{
    console.log(`Promise is rejected- ${err}`);     // error will be printed in the terminal as well because we are not handling it inside then() method .
})