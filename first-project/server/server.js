const express = require('express');
const app = express();
const axios = require('axios');

const CryptoPrice = require('./controller/CryptoPriceController');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = 9001;


// var btcPrice = [0];

// axios.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/").then(res=>{
//         btcPrice: res.data[0].price_usd
// }).catch(err=>console.log(err))

// app.get("/api/", (res, req)=>{
//     res.send(btcPrice);
// })

app.listen(port, ()=>{
    console.log(`This server is running OVER 9000 because it's on port ${port}`)
})