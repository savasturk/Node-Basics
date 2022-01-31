function doWork (data, callback) {
    callback('done');
}

function doWorkPromise (data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //resolve('everyting worked!');
            reject('everyting is broken!');
        }, 1000);
        /*reject({
            error: 'something bad happened'
        });*/
    });
}

doWorkPromise('some data').then(function (data) {
    console.log(data);
}, function (error) {
    console.log(error);
})