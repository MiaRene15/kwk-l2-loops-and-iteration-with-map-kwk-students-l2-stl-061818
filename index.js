// Code your solution in this file.

let studentArray = ['Mary', 'Joan', 'Eva', 'Frida', 'Taylor','Agnes']

function other(students) {
  return students.toLowerCase()
}

function lowerCaseStudentNames(names) {
  return names.map(other)
}

const firstName = ['Mary', 'Joan', 'Eva', 'Frida', 'Taylor', 'Agnes']

const lastName = ['Cassatt', 'Mitchell', 'Hesse', ' Kahlo', 'Swift', 'Martin']

function people(students) {
    return `firstName: ${firstName}, lastName: ${lastName}`
}

function nameToAttributes(names) {
  return names.map(people)
}
