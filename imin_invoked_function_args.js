// a function expression
var fullName;
fullName = function (first, last) {
    return first + ' ' + last;
};
console.log(fullName('Levi', 'Smith'));
// immediately invoked version
(function (first, last) {
    console.log(first + ' ' + last);
})('Levi', 'Smith');
//# sourceMappingURL=imin_invoked_function_args.js.map