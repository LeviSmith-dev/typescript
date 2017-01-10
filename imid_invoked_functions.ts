// function fullName(first: string, last: string) {
	
// }


var names : string[] = ['Levi', 'Ashlee', 'Liam'];
var counter : number = 0;

(function(){
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);