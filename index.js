var robot = require("robotjs");

// Type "Hello World".

function type() {
  robot.typeString("Hello World");
  robot.keyTap("enter");
}

setTimeout(type, 3000);

// Press enter.
