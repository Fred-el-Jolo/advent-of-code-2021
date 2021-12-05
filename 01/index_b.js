const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, 'input.txt');

const inputArray = fs.readFileSync(input).toString().split("\n");

let group1 = [inputArray[0],inputArray[1], inputArray[2]];
let group2 = [inputArray[1],inputArray[2]];
let group3 = [inputArray[2]];
const output = [];

inputArray.forEach((element, index, array) => {
	
	console.log(`currentIndex=${currentIndex} currentValue=${currentValue} previousValue=${previousValue}`);
});


// const tupleArray = inputArray.reduce((previousValue, currentValue, currentIndex, array) => {
// 	console.log(`currentIndex=${currentIndex} currentValue=${currentValue} previousValue=${previousValue}`);

// 	let result = previousValue;
// 	const currentNumber = Number(currentValue);

// 	let tuple;
// 	if (currentIndex %3 === 0) {
// 		tuple = {
// 			total: 0,
// 			values: [],
// 			count: 0,
// 		};
// 		tuple.values = [currentNumber];
// 		tuple.total = currentNumber;
// 		tuple.count++;
// 		result.push(tuple);
// 	}
// 	else {
// 		tuple = previousValue[previousValue.length-1];
// 		if (tuple) {
// 			tuple.values.push(currentNumber);
// 			tuple.total += currentNumber;
// 			tuple.count++;
// 		}
// 	}

// 	return result;
// }, []);

// console.log(tupleArray);
