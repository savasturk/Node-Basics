var request = require('request');

module.exports = function (location, callback) {
    var encodedLocation = encodeURIComponent(location);
    var url  = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperal&appid=7a75502995dd10a775158ab5f3acde1a';
    // move url into here
    // somesite.com/a%20test
    // a test
    encodeURIComponent(location);

    if (!location) {
        return callback('No location provided');
    }   

    request({
        url: url,
         json: true
        }, function (error, response, body) {
            if (error) {
                callback('Unable to fetch weather.');
            } else {
                callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
            }
        });
}