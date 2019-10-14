const coords = require('./utils/coords')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    console.log("Please enter a location...")
} else {
    coords(encodeURIComponent(location), (error, { latitude, longitude, location: locationLong }) => {
        if (error)
            return console.log(error)

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(locationLong)
            console.log(forecastData)
        })
    })
}