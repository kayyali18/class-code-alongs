console.log (this);
console.log ('this refers to the Global Object... i.e. the DOM;');

function logThis () {
    console.log (this);
}

// logThis (); 
// --> Object[global]

let myObj = {
    name: 'Object I made',
    logThis: logThis
}

myObj.logThis();

let chair = {
    wheels: true,
    legs: 4,
    moveToRoom () {
        if (this.wheels == true) {
            console.log('moved!');
        }
    }
}

chair.moveToRoom();

const denver = {
    logThis,
    buildings: {
     logThis,
     athletic: [
       { name: "Coors Field", floors: 4, completed: 1995, height: 64, logThis },
       { name: "Pepsi Center", floors: 5, completed: 1999, height: 68 }
     ],
     medical: [
       { name: "Saint Joseph Hospital", floors: 12, completed: 1873, height: 120, beds: 365 },
       { name: "Swedish Medical Center", floors: 6, completed: 1905, height: 65, beds: 368 }
     ]
   },
   restaurants: [
     { name: "Fruition Restaurant", type: "Fine Dining", number_of_reviews: 788 },
     { name: "Sam's No. 3", type: "Cheap Eats", number_of_reviews: 1870 },
   ]
 };

//  denver.logThis();
//  denver.buildings.athletic[0].logThis();

class SpaceProbe {

    constructor (title, classification) {
    
      // new empty object will log
      console.log(this);  
  
      this.title = title;
      this.classification = classification
  
      // object with added properties will log
      console.log(this);  
    }
  
    loo() { 
      console.log('Loo method! ', this);
    }
    
  }

//   let x = new SpaceProbe ('SpaceX Falcon', 'Mark IV');

// x.loo ();


// Interview Question

function es5Func () {
    console.log('The value of this is set when the function is executed', () => 'Value of this when function is created');
}

// es5Func();

var vampire = {
    name: 'dracula',
    dislikes: [
      'garlic',
      'crosses',
      'stakes'
    ],
    whatDoYouDislike: function () {
      // console.log(this)
      
      this.dislikes.forEach(( item ) => {
        console.log(this.name + ' dislikes ' + item)
      })
      
    //   this.dislikes.forEach(function ( item ) {
    //     console.log(this.name + ' dislikes ' + item)
    //   }.bind(this))
    }
  }
  
  vampire.whatDoYouDislike()