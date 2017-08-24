var greeting: string = "Hi TypeScript!";
console.log(greeting);


function doSomething() {
  for (var i = 0; i<5; i++){
  console.log(i);
}
  console.log("Finally " + i);
}

doSomething();

var count: number[] = [1,2,3];
console.log(count);
var f: any[] = [1, true, 'a'];
console.log(f);

enum Color {Red =0, Green = 1, Blue = 2};
var backgroundColor = Color.Red;
console.log(backgroundColor);

//endswith() returns a boolean - so we need another variable
var message: String = "abc";
var anna: String = "anna";
var endsWithCity = message.charAt(0);
console.log(endsWithCity);
//arrow function or lambda expression
var doLog = (message) => console.log(anna);
console.log(doLog);

// var drawpoint = (point: {x: number, y: number}) => {
//   //.....
// }
//
// drawPoint({
//   x: 1,
//   y: 2
// })
