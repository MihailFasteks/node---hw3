var parts = require('./participants');

// Heights in centimeters, lengths in meters
var human1 = new parts.Human('Alex', 100, 2000);
var cat1 = new parts.Cat('Bublik', 50, 100);
var robot1 = new parts.Robot('X-JAY', 0, 10000);

var wall1 = new parts.Wall(60);
var treadmill1 = new parts.Treadmill(500);
let partsArr = [human1, cat1, robot1];
let obsclsArr = [wall1, treadmill1];

parts.passObstacle(partsArr, obsclsArr);