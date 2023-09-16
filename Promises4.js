// to avoid promise chaining , we can use async-await to increase code readability.

const func1 = () => {
	const promise1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve (1);
		}, 0);
	});

	return promise1;
};

const func2 = () => {
	const promise2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(2);
		}, 0);
	});

	return promise2;
};

const func3 = () => {
	const promise3 = new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(3);
		}, 0);
	});
	return promise3;
};
test()
async function test(){
 
   try{
    // const response1=await func1();
    // const response2=await func2();
    // const response3=await func3();
	// const output=(response1+response2+response3)
	// const output=await Promise.all([func1(),func2(),func3()])

	const output=await Promise.allSettled([func1(),func2(),func3()])

     console.log("Response is " + JSON.stringify(output))
   }
   catch(err){
    console.log('error', err);
}
   
}



// promise1
// 	.then((data1) => {
// 		console.log(data1); //Promise 1
// 		promise2
// 			.then((data2) => {
// 				console.log(data2); //Promise 2
// 				promise3
// 					.then((data3) => {
// 						console.log(data3); //Promise 3
// 					})
// 					.catch((err) => {
// 						console.error(`Error in third then ${err}`);
// 					});
// 			})
// 			.catch((err) => {
// 				console.error(`Error in second then ${err}`);
// 			});
// 	})
// 	.catch((err) => {
// 		console.error(`Error in first then ${err}`);
// 	});
