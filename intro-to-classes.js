class Instructor {
    constructor(name, mod, traits) {
        this.name = name;
        this.mod = mod;
        this.traits = traits;
    }

    teachLesson (topic, duration) {
        if (duration > 3) return 'I\'m not teaching that';
        return `Let's learn ${topic}`;
    }

    gradeProject (student, project) {
        return `${student} got an A on ${project}`;
    }
}

class TA extends Instructor {
    constructor(name, mod, traits) {
        super(name, mod, traits);
    }

    whoIsMe () {
        console.log(`I am ${this.name} and I teach mod ${this.mod} and I am a ${this.joinArr()}`);
    }

    joinArr () {
        let newTraits = this.traits.join(', ');
        return newTraits;
    }
}


let Ahmad = new TA('Ahmad', 2, ['disciplined', 'coder', 'programmer']);

Ahmad.whoIsMe();

console.log (Ahmad.teachLesson('math', 2))
console.log (Ahmad.gradeProject('Dude', 'Module 2'))

