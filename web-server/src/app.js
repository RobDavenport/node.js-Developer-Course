const path = require('path')
const express = require('express');

const port = 8080;
const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'asdf',
        location: 'qwer'
    })
})

app.listen(port, () => {
    console.log('Server is up on ' + port);
});