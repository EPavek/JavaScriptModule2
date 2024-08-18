// Ask the user their name
var Fname = prompt("What is your name?");

// Ask the user their favorite number
var myFavNum = prompt(`Hello ${Fname}! What is your favorite number?`);

// Set for pi and area
const piValue = 3.1415926;

var myArea = 0;

// Check that a positive number was used
while (myFavNum <= 0)
{
  myFavNum = prompt("Please enter a positive number");
}

myArea = (myFavNum*myFavNum)*piValue;

document.write(`Hello ${Fname}, your favorite number is ${myFavNum}. If you used this number as the radius of a circle, the circle's area would be ${myArea}!`)
