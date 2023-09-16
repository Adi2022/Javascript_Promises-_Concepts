// shallow copy in js

let a = 10;
let b = a;

a = 100;

console.log(a);
console.log(b);

// objects and arrays

const array1 = [10, 20, 30, 40];

const arr2 = Object.assign({}, array1);

array1[0] = 1001;

console.log(array1);
console.log(arr2);

// find frequency of words

const word = "Hellloo";

const findFrequency = (word) => {
	let output = {};
	for (let key of word) {
		if (output[key] === undefined) {
			output[key] = 1;
		} else {
			output[key] = output[key] + 1;
		}
	}

	return output;
};

console.log(findFrequency(word));
