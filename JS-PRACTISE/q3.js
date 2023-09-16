//

console.log("start the project - " + 1);

const promise1 = new Promise((resolve, reject) => {
	resolve();
});
promise1.then(() => {
	console.log("promise is successfully  resolved " + 2);
});

console.log("project progress is viewd - " + 3);

setTimeout(() => {
	console.log("Manager is asking project report " + 4);
}, 0);

console.log("project is done - " + 5);


// in setTimeout and Promises, priority is given to Promises , because Promises are in MicroTask Queue so they take less time to execute , whereas setTimeout is in MicroTask queue, where is takes more time.