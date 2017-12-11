
// // all crypto array
// var cryptoUSDArray = [];
// var cryptoEURArray = [];
// var cryptoCNYArray = [];
// var cryptoRUBArray = [];

// // CryptoData//
// var BTCUSDData = [];
// var ETHUSDData = [];
// var DASHUSDData = [];
// var AUGUSDData = [];


// // visual array
// var basicVisualArray = [];
// var comparisonVisualArray = [];
// var historicalVisualArray = [];

// var tempArray = [];

var priceBTC = 17000;
var priceETH = 470;
var priceDASH = 800;
var priceAUG = 30;

var BTCComparisonPrice = [1.0, priceBTC / priceETH, priceBTC / priceDASH, priceBTC / priceAUG]
var ETHComparisonPrice = [priceETH / priceBTC, 1.0, priceETH / priceDASH, priceETH / priceAUG];
var DASHComparisonPrice = [priceDASH / priceBTC, priceDASH / priceETH, 1.0, priceDASH / priceAUG];
var AUGComparisonPrice = [priceAUG / priceBTC, priceAUG / priceETH, priceAUG / priceDASH, 1.0];

module.exports = {
    getBTCComparisonData: (req, res) => {
        console.log("test")
        res.send(BTCComparisonPrice)
    },
    getETHComparisonData: (req, res) => {
        res.send(ETHComparisonPrice)
    },
    getAUGComparisonData: (req, res) => {
        console.log("test")
        res.send(AUGComparisonPrice)
    },
    getDASHComparisonData: (req, res) => {
        res.send(DASHComparisonPrice)
    },

    //     getComparisonCryptoPrices: (req, res)=>{
    //             cryptoUSDArray: res.data;
    //              BTCUSDData.push(res.data[0].symbol, res.data[0].price_usd, res.data[0].percent_change_24h, res.data[0].market_cap_usd);
    // //              ETHUSDData.push();
    // //              AUGUSDData.push();
    // //              DASHUSDData.push();
    // //
    //              basicVisualArray.push(BTCUSDData);


    //      res.status(200).send(basicVisualArray)
    //     }


    //get all EUR crypto data and save to array of objects
    //     getUSDCryptoPrices(req, res).then(res=>{
    //             cryptoUSDArray: res.data
    //     }).catch(err=>console.log(err))
    // }
    //get all CNY crypto data and save to array of objects
    //     getUSDCryptoPrices(req, res).then(res=>{
    //             cryptoCNYArray: res.data
    //     }).catch(err=>console.log(err))
    // }
    //get all RUB crypto data and save to array of objects
    //     getUSDCryptoPrices(req, res).then(res=>{
    //             cryptoRUBArray: res.data
    //     }).catch(err=>console.log(err))
    // }


    //get specfic data from saved array
    //get USD prices for BTC, ETH, DASH, AUG
    // getBasicUSDCrypto().then(res=>{
    //      BTCUSDData.push();
    //
    //
    //      basicVisualArray.push()
    //})

    //put spec currency to visual array



    //delete currency from visual array


}