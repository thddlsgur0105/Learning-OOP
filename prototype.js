//constructor function = 생성자 함수

function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function() {
    return this.first + this.second + this.third;
}

var kim = new Person("kim", 10, 20, 30);
// kim의 sum function 만을 선택적으로 재정의하는 것 가능
kim.sum = function() {
    return "this : "+(this.first+this.second);
}

var lee = new Person("lee", 10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

// var d1 = new Date("2021-3-10");
// console.log("d1.getFullYear()", d1.getFullYear());
// console.log("d1.getMonth()", d1.getMonth());

// console.log("Date", Date);
