let apiData;

let projectData;

const dotenv = require('dotenv');
dotenv.config();

const baseurl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = `${process.env.API_KEY}&of=json&txt`;
const lang = '&lang=en';

const fetch = require("node-fetch");
var path = require('path')

const express = require('express');
const mockAPIResponse = require('./mockAPI.js')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
const { response } = require('express');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.listen(8081, function () {
    console.log('Example app listening on port 8081');
})

app.get('/all', sendData);
function sendData (req, res) {
    res.send(projectData);
};

app.post('/article', addData);
function addData (req, res) {
    let entry = req.body.ft;
    apiData = retrieveData(baseurl, apiKey, entry, lang)
    .then(function(apiData) {
        projectData = {data: apiData};
        console.log(projectData);
        res.send(projectData);
    })
};

const retrieveData = async (url, key, text, ln) => {
    const request = await fetch(url+key+text+ln);
    try {
        const data = await response.json()
        return data;
    } catch (error) {
        console.log("error", error);
    }
};