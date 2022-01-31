var request = require('request');

module.exports = function (location) {
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