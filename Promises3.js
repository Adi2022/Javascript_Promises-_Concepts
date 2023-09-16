// Promise chaining

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 1");
	}, 0);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 2");
	}, 1000);
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 3");
	}, 2000);
});

promise1
	.then((data1) => {
		console.log(data1); //Promise 1
		promise2
			.then((data2) => {
				console.log(data2); //Promise 2
				promise3
					.then((data3) => {
						console.log(data3); //Promise 3
					})
					.catch((err) => {
						console.error(`Error in third then ${err}`);
					});
			})
			.catch((err) => {
				console.error(`Error in second then ${err}`);
			});
	})
	.catch((err) => {
		console.error(`Error in first then ${err}`);
	});
