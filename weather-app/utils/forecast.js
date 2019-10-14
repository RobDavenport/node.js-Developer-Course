const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const weatherURL = 'https://api.darksky.net/forecast/67c390fc8d024ad04462357d9810cd3c/' + latitude + ',' + longitude + '?units=si'

    request({ url: weatherURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (response.body.error) {
            callback(response.body.error, undefined);
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' The temperature is: ' + response.body.currently.temperature + 'c and the chance of rain is: ' + response.body.currently.precipProbability + '%.')
        }
    })
}

module.exports = forecast;