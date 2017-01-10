// function printAddress(street: string, streetTwo?: string, state = 'UT'){
// 	console.log(street);
// 	if (streetTwo) {
// 			console.log(streetTwo);
// 	}
// 	console.log(state);
// }

// printAddress('123 any st');
// printAddress('123 any st', 'suite 540');
// printAddress('123 any st', 'suite 540', 'AZ');
// printAddress('123 any st', 'AZ', '85251');

function lineupCard(team: string, ...players: string[]) {
	console.log('Team:' + team);
	for(let player of players) {
		console.log(player);
	}
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');