const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, 'input_real.txt');

const inputArray = fs.readFileSync(input).toString().split("\n");

let previous = null;
let increasedEntriesCount = 0;

for(let current of inputArray) {
	current = Number(current);
	if (current != null) {
	    if (previous == null) {
	    	console.log(`${current} (N/A - no previous measurement)`);
	    }
	    else if (current > previous) {
	    	increasedEntriesCount++;
			console.log(`${current} (\x1b[1mincreased)\x1b[0m) => ${increasedEntriesCount}`);
			
	    }
	    else if (current < previous){
			console.log(`${current} (decreased)`);
	    }
	    else if (current == previous){
			console.log(`${current} (equals !!!)`);
	    }

	    previous = current;
	}
}

console.log(`result => ${increasedEntriesCount}`)