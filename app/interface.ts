//With this Interface we definethe shape of the object
//For the Interface we uses Pascale naming convention

Class Point {
  x: number;
  y: number;

draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y)
  }

getDistance = (another: Point){
//....
  }
}

var point = new Point (); //variablepointof type Point
point.draw();
