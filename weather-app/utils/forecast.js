const request = require('request')
const fs = require("fs");

const token = JSON.parse(fs.readFileSync('../tokens.json').toString()).darkSkyToken

if (!token) {
    console.log("Missing Dark Sky Token. Please enter it inside of tokens.json in the root directory.")
}

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + token + '/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (body.error) {
            callback(body.error, undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' The temperature is: ' + body.currently.temperature + 'c and the chance of rain is: ' + body.currently.precipProbability + '%.')
        }
    })
}

module.exports = forecast;