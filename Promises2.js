console.log("start");

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Promise 2");
	}, 0);
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 3");
	}, 2000);
});
console.log("promise is starting");

promise2
	.then((data2) => {
		console.log(`Promise 2- ${data2}`);
	})
    promise3
	.then((data3) => {
		console.log(`Promise 3- ${data3}`);
	})
	.catch((err) => {
		console.log(`Promise 3 is rejected- ${err}`); // error will be printed in the terminal as well because we are not handling it inside then() method .
	})
	.catch((err) => {
		console.log(`Promise 2 is rejected- ${err}`); // error will be printed in the terminal as well because we are not handling it inside then() method .
	});
console.log("Promise is geting resolved")