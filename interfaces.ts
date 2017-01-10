interface User {
	email : string;
	firstName? : string;
	lastName? : string;
}

function profile(user: User) : string {
	return `welcome, ${user.email}`;
}

var realUser = {
	email: "test@test.com",
};

console.log(profile(realUser));