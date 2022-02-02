/*var person = {
    name: 'Pinar',
    age: 21
};

function updatePerson (obj) {
    /*obj = {
        name: 'Pinar',
        age: 24
    };
    obj.age = 24;
}
updatePerson(person);
console.log(person);
*/
var debug = require('debug');
// Array Example
var grades = [15, 80];

function addGrades (gradesArr) {
    gradesArr.push(55);
    debugger;

    //gradesArr = [12, 33, 99];
}

addGrades(grades);
console.log(grades);

