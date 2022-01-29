/*var person = {
    gender: 'male',
    //eyeColor: 'brown',
    'eyeColor': 'brown'
};
var firstNameProperty = 'firstName';

person[firstNameProperty] = 'Pinar';
person.lastName = 'Test';
person.age = 24;

delete person.age;
console.log(person);

function greetUser (person) {
    console.log('Hello ' + person.firstName + ' ' + person.lastName);
}

greetUser(person);*/
var pet = {
    name: 'Patches',
    type: 'Dog'
};

function printPet (pet) {
    console.log('Your ' + pet.type + ' ' + 'is named ' + pet.name);
}

printPet(pet);