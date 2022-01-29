/* createAdder(baseNumber)

    return function (numberToAdd)
    add up baseNumber & numberToAdd
    return result
*/
function createAdder (baseNumber) {
    return function (numberToAdd) {
        return baseNumber + numberToAdd;
    }
}

var addTen = createAdder(10);
console.log(addTen(2)); //12
console.log(addTen(0)); //10


/*function greetMaker (name) {
    function greet () {
        //var age = 20;
        console.log('Hello ' + name +'!');
    }
   // console.log(age);
    return greet;
}

var greedPinar = greetMaker('Pinar');
greedPinar();
greedPinar();
greedPinar();

var greetWorld = greetMaker('world');
greetWorld();*/