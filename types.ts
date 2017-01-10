// Boolean true or false value
let paidAccount : boolean = true;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Levi Smith";

// Array
var ages : number[] = [33, 28, 11];

// Tuple
let players1 : [number, string, number, number];
players1 = [3, 'Corerra', .333, 33];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiData : any[] = [213, 'levi', true];

// Void
function printOut(msg: string): void {
	console.log(msg);
}