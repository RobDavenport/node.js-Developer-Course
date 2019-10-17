const path = require('path');
const express = require('express');
const hbs = require('hbs');

const port = 8080;

//Define paths for Express config
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const app = express();

//Setup handlebars engine & views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static dir to serve
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Robbie Davenport'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Robbie Davenport'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Some helpful text...',
        name: 'Robbie Davenport'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'asdf',
        location: 'qwer'
    })
})

app.listen(port, () => {
    console.log('Server is up on ' + port);
})