// question-1

function varTest() {
	var a = 1;
	{
		var a = 2;
		console.log("var a is" + a);
	}

	console.log("var a is" + a);
}

varTest();

function letTest() {
	let a = 1;
	{
		let a = 2;
		console.log(a);
	}

	console.log(a);
}
letTest();

// question -2

var rate = 10;

function getRate() {
	if (rate === undefined) {
		var rate = 6;
		return rate;
	} else {
		return 10;
	}
}

console.log("Rate is ", getRate());

// when we are using a variable , with same name as above i.e rate, so local variable has higher priority than global varibale , declared before function declartion.

// Question 3

// Explain the Scope of Temporal Dead Zone in below code

{  
    // func();
    // TDZ STARTS
	const func = () => console.log(" letVar is "  + letVar);
    // TDZ
    let letVar = 10; // TDZ ENDS
	func();
   
}
