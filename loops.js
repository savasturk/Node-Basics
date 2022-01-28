// countDownWhile(startingPoint, stoppingPoint)
function countDownWhile (startingPoint, stoppingPoint) {
    while (startingPoint >= stoppingPoint) {
        console.log('countDownWhile: ' + startingPoint--);
    }
}

countDownWhile(10, 0);

//coutDownFor
function countDownFor (startingPoint, stoppingPoint) {
    for (; startingPoint >= stoppingPoint; startingPoint--) {
        console.log('countDownFor: ' + startingPoint);
    }
}

countDownFor(20, 10);

/*var i = 0;
var countLimit = 8;

while (i < countLimit) {
    console.log('while: ' + i++);
    console.log('while: ' + ++i);
}

for (i = 0; i < countLimit; i++) {
    console.log('for: ' + i);
}*/