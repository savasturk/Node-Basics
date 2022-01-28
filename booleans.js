/*var isValid = false;

//isValid = !isValid;

if (!isValid) {
    console.log('Data is valid!');
} else {
    console.log('Data is not valid!');
}*/
var isValid = false;

function toggleBoolean (booleanVar) {
    if (typeof booleanVar === 'boolean') {
        return !booleanVar;
    } else {
        console.log('Warning! Not a boolean.');
    }
}

var newBoolean = toggleBoolean('Pinar');
console.log(newBoolean);