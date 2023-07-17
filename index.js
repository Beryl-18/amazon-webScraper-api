const express = require('express');

const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 4000;

const apiKey = 'ee6f1250d682c98740c6f4026f57e6bc';
const baseUrl = 'http://api.scraperapi.com?api_key='+apiKey+'&autoparse=true';


app.use(express.json());

app.get('/', (req,res)=>{
    res.send("<h1>Welcome to Amazon web scraper API</h1>");
})

app.listen(PORT, ()=> console.log('Server on port '+PORT));

