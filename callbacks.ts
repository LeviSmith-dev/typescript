// higher order functions and call backs


//asynchronous function
var dbQuery = function() : void {
	setTimeout(() => {
		console.log('Query results');
	}, 3000) // mimics a db query not a callback
}

function loadPage(q : () => void) { // higher order function
	console.log('Header');
	q();
	console.log('Sidebar');
	console.log('Footer');

}

loadPage(dbQuery);