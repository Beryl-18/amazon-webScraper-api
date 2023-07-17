const express = require('express');

const request = require('require-promise');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Welcome to Amazon web scraper API');
})

app.listen(PORT, ()=> console.log('Server on port ${PORT}'));
