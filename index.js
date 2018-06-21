// Code your solution in this file.

let studentArray = ['Mary', 'Joan', 'Eva', 'Frida', 'Taylor','Agnes']

function other(students) {
  return students.toLowerCase()
}

function lowerCaseStudentNames(names) {
  return names.map(other)
}

const fullNames = ['Mary Cassatt', 'Joan Mitchell', 'Eva Hesse', 'Frida Kahlo', 'Taylor Swift', 'Agnes Martin']

function namesToAttribute(names) {
   return names.map(function (name) {
     const studentFirst //split name here 
     const studentLast //split name here 
     
     return {firstName: studentFirst, lastName: studentLast}
   })
}

function people() {
  return ' firstName: ${} '
}
  
  
  
}

