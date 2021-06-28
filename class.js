// 술 주량 판단 

class User {
    constructor({count, action, isHealthy}) {
        this.count = count;
        this.action = action;
        this.isHealthy = isHealthy;
    }
    sayInfo = () => {
       if (this.count < 3) {
           console.log(`You are freshman in alcohol : ${this.count}`);
       } else if (this.count < 7) {
           console.log(`You are a little good at alcohol : ${this.count}`);
       } else {
           console.log(`You are senior in alcohol : ${this.count}`);
       }
    }
    sayHealthy() {
        if (this.isHealthy) {
            console.log(`Your current status is healthy`)
        } else {
            console.log(`You are not healthy!`)
        }
    }
}

// 인스턴스 생성

const kim = new User({
    count: 10,
    action: "sleep",
    isHealthy: false, 
})

kim.sayInfo();
kim.sayHealthy();