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

//Get product details
app.get('/products/:productId', async(req,res)=>{
    const { productId } = req.params;

    try {
        const response = await request(''+baseUrl+'&url=https://www.amazon.com/dp/'+productId);
        res.json(JSON.parse(response));
    }
    catch (err) {
        res.json(err);

    }
});

//Get Product Review :- Amazon link code: 404
app.get('/products/:productId/reviews', async(req,res)=>{
    const { productId } = req.params;

    try {
        const response = await request(''+baseUrl+'&url=https://www.amazon.com/product-reviews/'+productId);
        res.json(JSON.parse(response));
    }
    catch (err) {
        res.json(err);

    }
});

//Search Product
app.get('/search/:searchQuery', async(req,res)=>{
    const { searchQuery } = req.params;

    try {
        const response = await request(''+baseUrl+'&url=https://www.amazon.com/s?k='+searchQuery);
        res.json(JSON.parse(response));
    }
    catch (err) {
        res.json(err);

    }
});



app.listen(PORT, ()=> console.log('Server on port '+PORT));

