'use strict'

var global;

var fn = function () {
    var name = 'inner';
    global = name;
    return name;
}

fn ();

// What is global?
console.log (global);




