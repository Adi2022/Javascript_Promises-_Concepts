// async -await are used to handle Promises

const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise Resolved Value at p1!");
	}, 10000);
});

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise Resolved Value at p2!");
	}, 5000);
});

// await  can only be used inside async function....
async function handlePromise() {
	console.log("hello promise at top");
	// But here using async-await to handle promise, JS Engine appears to  waits in line 15 and promise is resolve, then after 100000s , its prints both logs , togther, but first Namste Javscript and then Promise console.
	const val1 = await p1;
	console.log("Namste javascript and val1");
	console.log(val1);

	const val2 = await p2;
	console.log("Namste javascript and val2");
	console.log(val2);
}

handlePromise();

// function getData(){
// JS engine will not wait for a promise to get resolve using .then() and JS Engine goes to next line and first prints Namste Javascript and then resolves promise after 10000seconds.
//     p.then((res)=>console.log(res))
//     console.log("Namste javascript")
// }

// getData()

// async function getData(){
//      return p
// }

// const data=getData();
// data.then((res)=>{
//     console.log(res)
// })

// using async-await to fetch data from api

// to handle errors in asyunc-await , we use try-catch method
const API_URL = "https://api.github.com/users/Adi2022";

async function handlePromise1() {
	try {
		const data = await fetch(API_URL);
		const result = await data.json();
		console.log(result);
	} catch (error) {
		console.log(error, "api is not responding");
	}
}

handlePromise1();
