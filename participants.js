// participant.js
class Participant {
    constructor(name, HA, LA) {
        this.name = name;
        this.HAbility = HA;
        this.LAbility = LA;
    }

    jump() {
        return `${this.constructor.name} ${this.name} jumped`;
    }

    run() {
        return `${this.constructor.name} ${this.name} run`;
    }
}

class Human extends Participant {}
class Cat extends Participant {}
class Robot extends Participant {}

class Obstacle {
    pass() {
        return 'The Obstacle';
    }
}

class Treadmill extends Obstacle {
    constructor(l) {
        super();
        this.length = l;
    }

    pass() {
        return 'The Treadmill';
    }
}

class Wall extends Obstacle {
    constructor(h) {
        super();
        this.height = h;
    }

    pass() {
        return 'The Wall';
    }
}

function passObstacle(arrPart, arrObs) {
    arrPart.forEach(participant => {
        arrObs.forEach(obstacle => {
            if (obstacle instanceof Wall) {
                if (participant.HAbility >= obstacle.height) {
                    
                    console.log(`${participant.jump()} ${obstacle.pass()}`);
                } else {
                    console.log(`${participant.name} the ${participant.constructor.name} couldn't pass the Wall.`);
                }
            } else if (obstacle instanceof Treadmill) {
                if (participant.LAbility >= obstacle.length) {
                    participant.run();
                    console.log(`${participant.run()} ${obstacle.pass()}`);
                } else {
                    console.log(`${participant.name} the ${participant.constructor.name} couldn't pass the Treadmill.`);
                }
            }
        });
    });
}

module.exports = {
    passObstacle,
    Participant,
    Human,
    Cat,
    Robot,
    Obstacle,
    Treadmill,
    Wall
};
