console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));

var myMath = {
    PI: Math.PI,
    random: function() {
        return Math.random();
    },
    floor: function(num) {
        return Math.floor(num);
    }
}

console.log("myMath.random()", myMath.random());
console.log("myMath.PI", myMath.PI);
console.log("myMath.floor(3.9)", myMath.floor(3.9));