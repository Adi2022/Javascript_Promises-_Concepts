

function test1() {
	let a = 10;
	return function testInner() {
		console.log(a);
	};
}
const res=test1();
res()
