function doWork () {
    // throw error that say 'unable to do work'
    throw new Error('Unable to do work!');
}

try {
    //throw new Error('Unable to decrypt accounts!');
    //call do work
    doWork();
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Finally block executed!');
}

console.log('try catch ended');