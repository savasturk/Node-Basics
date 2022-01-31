/*function doWork (data, callback) {
    callback('done');
    callback('done second');
}

function doWorkPromise (data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //resolve('everyting worked!');
            reject('everyting is broken!');
        }, 1000);
        /*reject({
            error: 'something bad happened'
        });
    });
}

doWorkPromise('some data').then(function (data) {
    console.log(data);
}, function (error) {
    console.log(error);
})*/

var request = require('request');

function getWeather (location) {
    return new Promise(function (resolve, reject) {
    var encodedLocation = encodeURIComponent(location);
    var url  = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperal&appid=7a75502995dd10a775158ab5f3acde1a';

    if (!location) {
        return reject('No location provided');
    }   

    request({
        url: url,
         json: true
        }, function (error, response, body) {
            if (error) {
                reject('Unable to fetch weather.');
            } else {
                resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
            }
        });
    }); 
}

getWeather('san fransisco').then(function (currentWeather) {
    console.log(currentWeather);
}, function (error) {
    console.log(error);
});