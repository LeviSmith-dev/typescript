// closures

//Function declaration
console.log(fullName('Levi', 'Smith'));
// console.log(otherFullName('Levi', 'Smith'));
// console.log(thirdFullName('Levi', 'Smith'));

function fullName(first: string, last: string) : string {
	return first + " " + last;
}

// Function Expression

var otherFullName : (first: string, last: string) =>;

otherFullName = function (first: string, last: string) {
	return first + " " + last;
}

var thirdFullName : (first: string, last: string) => string = function (first: string, last: string) {
	return first + " " + last;
}
