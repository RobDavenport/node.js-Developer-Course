const coords = require('./utils/coords')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    console.log("Please enter a location...")
} else {
    coords(encodeURIComponent(location), (error, data) => {
        if (error) {
            return console.log(error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
        })
    })
}