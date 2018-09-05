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
  
  let cohorts = [
    { cohort: 1806, module: 1, studentCount: 28, curriculum: ['html', 'css', 'javascript'] },
    { cohort: 1804, module: 2, studentCount: 30, curriculum: ['javascript', 'css', 'recursion', 'scope', 'oop'] },
    { cohort: 1803, module: 3, studentCount: 20, curriculum: ['react', 'redux', 'html', 'javascript'] },
    { cohort: 1801, module: 4, studentCount: 18, curriculum: ['pwas', 'mobile', 'node', 'javascript', 'css'] }
  ];

  let combined = instructors.map (teacher => {
      let count;
      cohorts.forEach (mod => {
          if (teacher.module == mod.module) count = mod.studentCount
      })
      return {name: teacher.name, studentCount: count}
  })
  

  console.log (combined)
  console.log ('\n\n\n')

  let avgStudents = instructors.reduce ((acc, teacher) => {
      //check teachers count in each mod
      
      //save that count
      // find each mods students
      // divide by teachers

      //retun cohort: avg
  }, {cohort1806: 0,
      cohort1804: 0,
      cohort1803: 0,
      cohort1801: 0})
  
  // EXERCISE ONE: 
  // Return an array of instructors where each instructor is an object with a name and the count of students in their module. e.g. 
  // [
  //  { name: 'Pam', studentCount: 21 },
  //  { name: 'Robbie', studentCount: 18 }
  // ]
  
  // EXERCISE TWO:
  // Return an object of how many students per teacher there are in each cohort
  // e.g. { 
  // cohort1806: 9,
  // cohort1804: 10.5
  // }