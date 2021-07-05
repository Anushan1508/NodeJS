const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + "and b = " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR", err.message);
        }
        else {
            console.log("The area os rectangke l = " + l + "and B = " + b + "is " + rectangle.area());
            console.log("The perimeter os rectangke l = " + l + "and B = " + b + "is " + rectangle.perimeter());
        }
    });
    console.log("This statement is after the call to rect");
}

solveRect(5,6);
solveRect(5,-6);