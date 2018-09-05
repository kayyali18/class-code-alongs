//  Given the following dataset, return an array of just the front-end classrooms

let classrooms = [
  { roomLetter: "A", program: "FE", capacity: 32 },
  { roomLetter: "B", program: "BE", capacity: 29 },
  { roomLetter: "C", program: "FE", capacity: 27 },
  { roomLetter: "D", program: "BE", capacity: 30 },
  { roomLetter: "E", program: "FE", capacity: 22 },
  { roomLetter: "F", program: "BE", capacity: 19 },
  { roomLetter: "G", program: "FE", capacity: 29 },
  { roomLetter: "H", program: "BE", capacity: 18 }
];

var classFE = classrooms.filter(classes => classes.program.includes("FE"));


console.log('\nProblem 1:\n')
console.log(classFE);

//   Example Output:

// [
//     { roomLetter: 'A', program: 'FE', capacity: 32 },
//     { roomLetter: 'C', program: 'FE', capacity: 27 },
//     { roomLetter: 'E', program: 'FE', capacity: 22 },
//     { roomLetter: 'G', program: 'FE', capacity: 29 }
//   ]

// 2. Given the following dataset, return an array of objects where the keys are mod (value: the number of the module)
// and studentsPerInstructor (value: how many students per instructor there are for that mod.)

let mods = [
  { mod: 1, students: 27, instructors: 3 },
  { mod: 2, students: 33, instructors: 3 },
  { mod: 3, students: 20, instructors: 2 },
  { mod: 4, students: 16, instructors: 2 }
];

let newMod = mods.map(obj => {
    let newObj = {
        mod: obj.mod,
        studentsPerInstructor: obj.students / obj.instructors
    }
    return newObj
})

console.log('\nProblem 2:\n')
console.log (newMod)

//   [
//     { mod: 1, studentsPerInstructor: 9 },
//     { mod: 2, studentsPerInstructor: 11 },
//     { mod: 3, studentsPerInstructor: 10 },
//     { mod: 4, studentsPerInstructor: 8 }
//   ]


// 3. Given the following dataset, return an array of all the instructors who can teach JavaScript.


let instructors = [
  { name: 'Pam', module: 2, teaches: ['scope', 'recursion', 'node'] },
  { name: 'Brittany', module: 2, teaches: ['oop', 'pwas'] },
  { name: 'Nathaniel', module: 2, teaches: ['oop', 'scope', 'mobile'] },
  { name: 'Robbie', module: 4, teaches: ['node', 'pwas'] },
  { name: 'Leta', module: 4, teaches: ['pwas', 'node', 'recursion'] },
  { name: 'Travis', module: 1, teaches: ['javascript', 'html', 'css'] },
  { name: 'Louisa', module: 1, teaches: ['javascript', 'html', 'css', 'node', 'pwas'] },
  { name: 'Christie', module: 3, teaches: ['javascript', 'react', 'node'] },
  { name: 'Will', module: 3, teaches: ['javascript', 'redux', 'react', 'oop', 'scope'] }
];


let teachesJS = instructors.filter (teacher => teacher.teaches.includes('javascript'));
teachesJS = teachesJS.map (e => e.name);


console.log('\nProblem 3:\n')
console.log (teachesJS);
//Example Output 
// ['Travis', 'Louisa', 'Christie', 'Will']


// 4. Given the following dataset, return an object where the keys are 'feCapacity' and 
// 'beCapacity', and the values are the total capacity for all classrooms in each program.

let classroomsFourth = [
  { roomLetter: 'A', program: 'FE', capacity: 32 },
  { roomLetter: 'B', program: 'BE', capacity: 29 },
  { roomLetter: 'C', program: 'FE', capacity: 27 },
  { roomLetter: 'D', program: 'BE', capacity: 30 },
  { roomLetter: 'E', program: 'FE', capacity: 22 },
  { roomLetter: 'F', program: 'BE', capacity: 19 },
  { roomLetter: 'G', program: 'FE', capacity: 29 },
  { roomLetter: 'H', program: 'BE', capacity: 18 }
];

let x = classroomsFourth.reduce((acc, room) => {
  if (room.program == 'FE') acc.feCapacity += room.capacity;
  else acc.beCapacity += room.capacity;

  return acc; //always return the acc
}, {feCapacity: 0, beCapacity: 0})





console.log('\nProblem 4:\n')
console.log(x)
console.log()
console.log()


// 5. Given the following dataset, return an array of all unique toppings that the bakery needs. (no duplicates)

let bakery = [
  {
    cakeFlavor: 'dark chocolate',
    filling: null,
    frosting: 'dark chocolate ganache',
    toppings: [ 'dutch process cocoa', 'toasted sugar', 'smoked sea salt' ]
  },
  {
    cakeFlavor: 'yellow',
    filling: 'citrus glaze',
    frosting: 'chantilly cream',
    toppings: [ 'berries', 'edible flowers' ]
  },
  {
    cakeFlavor: 'white chiffon',
    filling: 'mint and sage drizzle',
    frosting: 'whipped sweet cream',
    toppings: [ 'mint', 'cranberry', 'edible flowers' ]
  },
  {
    cakeFlavor: 'butter rum',
    filling: 'ginger cardamom swirl',
    frosting: 'spiced rum glaze',
    toppings: [ 'crystallized ginger', 'toasted sugar' ]
  },
  {
    cakeFlavor: 'vanilla',
    filling: 'St Germaine',
    frosting: 'whipped cream',
    toppings: [ 'smoked sea salt', 'crystallized ginger', 'berries' ]
  },
  {
    cakeFlavor: 'honey',
    filling: 'chocolate and cayenne',
    frosting: 'chocolate buttercream',
    toppings: [ 'smoked sea salt', 'toasted sugar' ]
  }
];

let toppings = bakery.reduce ((acc, cake) => {
    cake.toppings.forEach(topping => {
      if (!acc.includes(topping)) acc.push(topping);
    })
    return acc;
}, [])

console.log('\nProblem 5:\n')
console.log (toppings)



//write out a filter function called filterThis

Array.prototype.filterThis = function (callback) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    let addToArray = callback (this[i], i, this);
    if (addToArray) results.push(this[i]);
  }
  return results;
};

let arr = ['a', 'b', 'c', 'd']


console.log('\nFilter This Method:\n')

let hi  = arr.filterThis( (element, index, array) => {
  return index > 0;
});

console.log (hi)