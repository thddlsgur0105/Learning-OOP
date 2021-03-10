var kim = {
    "name": "kim",
    first: 10,
    second: 20,
    sum: function() {
        return this.first + this.second;
    }
}

var lee = {
    "name": "lee",
    first: 10,
    second: 10,
    sum: function() {
        return this.first + this.second;
    }
}

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

var d1 = new Date("2021-3-10");
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());