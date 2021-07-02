var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + "and b = " + b);

    if (l<=  0 || b <= 0){
        console.log("should be Grater than 0 l = " + l + "And B = " +b);
    }
    else {
        console.log("Area is " + rect.area(l,b));
        console.log("perimeter = "  + rect.perimeter(l,b));
    }
}

solveRect(5,6);