// Boolean true or false value
var paidAccount = true;
// Number
var age = 33;
var taxRate = 7.5;
// String
var fullName = "Levi Smith";
// Array
var ages = [33, 28, 11];
// Tuple
var players1;
players1 = [3, 'Corerra', .333, 33];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any
var apiData = [213, 'levi', true];
// Void
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=types.js.map