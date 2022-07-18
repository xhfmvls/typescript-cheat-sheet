var identities1 = function (arg1) {
    return arg1;
};
var identities2 = function (arg1, arg2) {
    return arg1;
};
var identities3 = function (arg1, arg2) {
    return [arg1, arg2];
};
console.log(identities1('test'));
console.log(identities2(10, 'test'));
console.log(identities3('test', 12));
var returnedIdentities = function (arg1, arg2) {
    console.log(arg1, ' ', typeof (arg1));
    console.log(arg2, ' ', typeof (arg2));
    var inIdentities = {
        id1: arg1,
        id2: arg2
    };
    return inIdentities;
};
console.log(returnedIdentities);
