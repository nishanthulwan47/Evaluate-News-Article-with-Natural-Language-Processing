// Hidden api key

const dotenv = require('dotenv');
dotenv.config();

//depedencies

var path = require('path')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

//Server

const express = require('express')
const app = express()

// Middleware

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Cors 

const cors = require('cors');
const { response } = require('express');
app.use(cors());

// Project folder

app.use(express.static('dist'))
console.log(__dirname)

// MeaningCloud credentials API

const baseURL = 'https://api.meaningcloud.com/lang-4.0/identification';
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);



// Get route
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Post route

const formdata = new FormData();
formdata.append("key", "API_KEY");
formdata.append("txt", "Your text here");

const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
.then( response => ({
    status: response.status,
    body: response.json()
}))
.then({status, body} => console.log(status, body))
.catch(error => console.log('error', error));