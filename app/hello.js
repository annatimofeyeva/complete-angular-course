var greeting = "Hi TypeScript!";
console.log(greeting);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally " + i);
}
doSomething();
var count = [1, 2, 3];
console.log(count);
var f = [1, true, 'a'];
console.log(f);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
console.log(backgroundColor);
//endswith() returns a boolean - so we need another variable
var message = "abc";
var anna = "anna";
var endsWithCity = message.charAt(0);
console.log(endsWithCity);
//arrow function or lambda expression
var doLog = function (message) { return console.log(anna); };
console.log(doLog);
// var drawpoint = (point: {x: number, y: number}) => {
//   //.....
// }
//
// drawPoint({
//   x: 1,
//   y: 2
// })
