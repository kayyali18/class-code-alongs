'use strict'



var bestDog = 'Tammy';
function moveAway(seconds) {
    var result = seconds * 2;
    if (result > 5)  return 'I HAVE TO GO NOW';
    return 'Man, it sure is rainy over there'
}
// console.log(moveAway(2));


class Mammal {
    constructor () {
        this.legs = 4;
        this.fur = true;
    }

    move () {
        console.log (`I am a ${this.type} moving on ${this.legs} legs`)
    }
}

class Dog extends Mammal {
    constructor () {
        super ();
        this.type = 'Dog'
        this.barks = true;
        this.canine = true;
    }

    bark () {
        console.log ('WOOOOF!')
    }
}

class Cat extends Mammal {
    constructor () {
        super ();
        this.type = 'Cat';
    }

    meow () {
        console.log ('Meoooooowwwwwwwwww')
    }
}

class BluePoint extends Cat {
    constructor () {
        super ();
        this.type = 'Blue Point'
    }
}

var doggo = new Dog ();
var kitty = new Cat ();
var clara = new BluePoint ();

// clara.move ();

// doggo.move ()
// doggo.bark ();

// kitty.move ();
// kitty.meow ();

function greeting () {
    var name = 'Ahmad';
    return {
        greet: () => `Hello ${name}`
    }
}

var myGreet = greeting;
console.log (myGreet().greet());