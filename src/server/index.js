const fetch = require('node-fetch')
const dotenv = require('dotenv');
dotenv.config();

//MeaningCloud API
const API_KEY = process.env.API_KEY;
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?";

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

//listening to the port

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/dist/views/index.html'))
})

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req,res) {
    res.send(mockAPIResponse)
});

app.post("/article", async (req, res) => {
    const response = await fetch(`${baseUrl}${API_KEY}&lang=auto&url=${req.body.url}`);

    try {
        const data = await response.json();
        response.send(data);
    } catch (error) {
        console.log("error", error);
    }
});