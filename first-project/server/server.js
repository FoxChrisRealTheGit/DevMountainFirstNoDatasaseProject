const express = require('express');
const app = express();
const axios = require('axios');

const CryptoPrice = require('./controller/CryptoPriceController');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('E:/DevMountain/Cohort/DevMountainFirstNoDatabaseProject/first-project'));
const port = 9003;



app.get("/api/BTCComp", CryptoPrice.getBTCComparisonData);
app.get("/api/ETHComp", CryptoPrice.getETHComparisonData);
app.get("/api/AUGComp", CryptoPrice.getAUGComparisonData);
app.get("/api/DASHComp", CryptoPrice.getDASHComparisonData);


// app.get("/api/data", (req, res)=>{
//     axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=38").then( response => {
//         res.send(response.data);
//     });

//     res.send(res.data);
// }),

//USD data
//app.get("api/test", CryptoPrice.getUSDCryptoPrices);

//EUR data
//https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=38

//RUB data
//https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=38

//CNY data 
//https://api.coinmarketcap.com/v1/ticker/?convert=CNY&limit=38

// app.get("/api/", (res, req)=>{
//     res.send(btcPrice);
// })

app.listen(port, ()=>{
    console.log(`This server is running OVER 9000 because it's on port ${port}`)
})