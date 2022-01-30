var request = require('request');
var url  = 'http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperal&appid=7a75502995dd10a775158ab5f3acde1a';

request({
    url: url,
     json: true
    }, function (error, response, body) {
        if (error) {
            console.log('Unable to fetch weather.');
        } else {
            //console.log(JSON.stringify(body.main, null, 4));
            // It's 272.424 in Altstadt!
            console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
        }
    });

console.log('After request!');