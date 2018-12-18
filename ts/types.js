var username = "huron";
var age = 20;
var friends = ["a", "b"];
var Status;
(function (Status) {
    Status[Status["OK"] = 5000] = "OK";
    Status[Status["WARN"] = 5001] = "WARN";
    Status[Status["ERROR"] = 5002] = "ERROR";
})(Status || (Status = {}));
var status1 = Status.WARN;
var something = "10";
something = [];
something = {};
something = 10;
var in1;
in1 = 10;
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//let messageCode: string | number | Person;
console.log("staus", status1);
console.log("Hello TS - \n\n\n\n\n\n\n\n\n\n" + username.toUpperCase());
