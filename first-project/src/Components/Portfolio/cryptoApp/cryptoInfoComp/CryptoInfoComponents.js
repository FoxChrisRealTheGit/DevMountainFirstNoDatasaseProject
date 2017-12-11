import React, { Component } from 'react';
import axios from 'axios';


import ComparisonComponent from './comparisonComp/CryptoComparisonComponent';
import HistoricalComponent from './historicalComp/CryptoHistoricalComponent';

import '../../../../css/components/Crypto/cryptoInfo.css';

export default class CryptoInfoComponents extends Component {
    constructor() {
        super();
        this.state = {
            // all crypto array
            cryptoUSDArray: [],
            cryptoEURArray: [],
            cryptoCNYArray: [],
            cryptoRUBArray: [],
            //USD crypto array
            BTCUSDData: [],
            ETHUSDData: [],
            DASHUSDData: [],
            AUGUSDData: [],

            AUGEURData: [],
            BTCEURData: [],
            ETHEURData: [],
            DASHEURData: [],

            AUGRUBData: [],
            BTCRUBData: [],
            ETHRUBData: [],
            DASHRUBData: [],

            AUGCNYData: [],
            BTCCNYData: [],
            ETHCNYData: [],
            DASHCNYData: [],

            //FiatVisualArray
            currentFiat: "Dollar",
            BTCVisualArray: [],
            ETHVisualArray: [],
            DASHVisualArray: [],
            AUGVisualArray: [],



        }

        this.fiatSelector = this.fiatSelector.bind(this);
    }
    componentDidMount() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=38").then(res => {

            let btcInfo = [];
            let ethInfo = [];
            let dashInfo = [];
            let augInfo = [];
            btcInfo.push(res.data[0].symbol, res.data[0].price_usd, res.data[0].percent_change_24h, res.data[0].market_cap_usd);
            ethInfo.push(res.data[1].symbol, res.data[1].price_usd, res.data[1].percent_change_24h, res.data[1].market_cap_usd);
            dashInfo.push(res.data[6].symbol, res.data[6].price_usd, res.data[6].percent_change_24h, res.data[6].market_cap_usd);
            augInfo.push(res.data[30].symbol, res.data[30].price_usd, res.data[30].percent_change_24h, res.data[30].market_cap_usd);

            this.setState({
                cryptoUSDArray: res.data,
                BTCUSDData: btcInfo,
                ETHUSDData: ethInfo,
                DASHUSDData: dashInfo,
                AUGUSDData: augInfo
            })
        }).catch(err => console.log(err));

        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=38").then(res => {
            let btcInfo = [];
            let ethInfo = [];
            let dashInfo = [];
            let augInfo = [];
            btcInfo.push(res.data[0].symbol, res.data[0].price_eur, res.data[0].percent_change_24h, res.data[0].market_cap_eur);
            ethInfo.push(res.data[1].symbol, res.data[1].price_eur, res.data[1].percent_change_24h, res.data[1].market_cap_eur);
            dashInfo.push(res.data[6].symbol, res.data[6].price_eur, res.data[6].percent_change_24h, res.data[6].market_cap_eur);
            augInfo.push(res.data[37].symbol, res.data[37].price_eur, res.data[37].percent_change_24h, res.data[37].market_cap_eur);

            this.setState({
                cryptoEURArray: res.data,
                BTCEURData: btcInfo,
                ETHEURData: ethInfo,
                DASHEURData: dashInfo,
                AUGEURData: augInfo
            })
        }).catch(err => console.log(err))

        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=RUB&limit=38").then(res => {
            let btcInfo = [];
            let ethInfo = [];
            let dashInfo = [];
            let augInfo = [];
            btcInfo.push(res.data[0].symbol, res.data[0].price_rub, res.data[0].percent_change_24h, res.data[0].market_cap_rub);
            ethInfo.push(res.data[1].symbol, res.data[1].price_rub, res.data[1].percent_change_24h, res.data[1].market_cap_rub);
            dashInfo.push(res.data[6].symbol, res.data[6].price_rub, res.data[6].percent_change_24h, res.data[6].market_cap_rub);
            augInfo.push(res.data[37].symbol, res.data[37].price_rub, res.data[37].percent_change_24h, res.data[37].market_cap_rub);

            this.setState({
                cryptoRUBArray: res.data,
                BTCRUBData: btcInfo,
                ETHRUBData: ethInfo,
                DASHRUBData: dashInfo,
                AUGRUBData: augInfo
            })
        }).catch(err => console.log(err))
        axios.get("https://api.coinmarketcap.com/v1/ticker/?convert=CNY&limit=38").then(res => {
            let btcInfo = [];
            let ethInfo = [];
            let dashInfo = [];
            let augInfo = [];
            btcInfo.push(res.data[0].symbol, res.data[0].price_cny, res.data[0].percent_change_24h, res.data[0].market_cap_cny);
            ethInfo.push(res.data[1].symbol, res.data[1].price_cny, res.data[1].percent_change_24h, res.data[1].market_cap_cny);
            dashInfo.push(res.data[6].symbol, res.data[6].price_cny, res.data[6].percent_change_24h, res.data[6].market_cap_cny);
            augInfo.push(res.data[37].symbol, res.data[37].price_cny, res.data[37].percent_change_24h, res.data[37].market_cap_cny);

            this.setState({
                cryptoCNYArray: res.data,
                BTCCNYData: btcInfo,
                ETHCNYData: ethInfo,
                DASHCNYData: dashInfo,
                AUGCNYData: augInfo
            })
        }).catch(err => console.log(err))
    }



    fiatSelector(val) {
        this.setState({ currentFiat: val });

        if (this.state.currentFiat === "Dollar") {
            this.setState({
                BTCVisualArray: this.state.BTCUSDData,
                ETHVisualArray: this.state.ETHUSDData,
                DASHVisualArray: this.state.DASHUSDData,
                AUGVisualArray: this.state.AUGUSDData
            });
        } else if (this.state.BTCVisualArray === "Yuan") {
            this.setState({
                BTCVisualArray: this.state.BTCCNYData,
                ETHVisualArray: this.state.ETHCNYData,
                DASHVisualArray: this.state.DASHCNYData,
                AUGVisualArray: this.state.AUGCNYData
            });
        } else if (this.state.currentFiat === "Euro") {
            this.setState({
                BTCVisualArray: this.state.BTCEURData,
                ETHVisualArray: this.state.ETHEURData,
                DASHVisualArray: this.state.DASHEURData,
                AUGVisualArray: this.state.AUGEURData
            });
        } else if (this.state.currentFiat === "Ruble") {
            this.setState({
                BTCVisualArray: this.state.BTCRUBData,
                ETHVisualArray: this.state.ETHRUBData,
                DASHVisualArray: this.state.DASHRUBData,
                AUGVisualArray: this.state.AUGRUBData
            });
        }
    }


    render() {


        return (
            <section className="CryptoInfoComponents">
                <div className="CryptoInfoSelectors">
                    <select className="CryptoMoneyType"
                        onClick={(e) => this.fiatSelector(e.target.value)}
                        onChange={(e)=>this.fiatSelector(e.target.value)}>
                        <option value="Dollar">Dollar</option>
                        <option value="Euro">Euro</option>
                        <option value="Yuan">Yuan</option>
                        <option value="Ruble">Ruble</option>
                    </select>
                    <select className="CryptoSet">
                        <option value="default">Default</option>
                        <option value="set1">Set 1</option>
                        <option value="set2">Set 2</option>
                    </select>
                    <select className="CryptoCustomSelector">
                        <option value="btc" >BitCoin (BTC)</option>
                        <option value="eth" >Ethereum (ETH)</option>
                        <option value="dash">Dash (DASH)</option>
                        <option value="xmr">Monero (XMR)</option>
                        <option value="rep" >Augur (AUG)</option>
                        <option value="gnt">Golem (GNT)</option>
                        <option value="zec">Zcash (ZEC)</option>
                    </select>
                </div>
                <div className="CryptoTableBox">
                    <h2 className="CryptoHeading" id="basicCryptoInfo">basic information</h2>
                    <table className="CryptoTable">
                        <thead>
                            <tr>
                                <th>    </th>
                                <th>{this.state.BTCVisualArray[0]}</th>
                                <th>{this.state.ETHVisualArray[0]}</th>
                                <th>{this.state.DASHVisualArray[0]}</th>
                                <th>{this.state.AUGVisualArray[0]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="Left-Head">Price in {this.state.currentFiat}:</th>
                                <td>{this.state.BTCVisualArray[1]}</td>
                                <td>{this.state.ETHVisualArray[1]}</td>
                                <td>{this.state.DASHVisualArray[1]}</td>
                                <td>{this.state.AUGVisualArray[1]}</td>
                            </tr>
                            <tr>
                                <th className="Left-Head">Today % Change:</th>
                                <td>{this.state.BTCVisualArray[2]}</td>
                                <td>{this.state.ETHVisualArray[2]}</td>
                                <td>{this.state.DASHVisualArray[2]}</td>
                                <td>{this.state.AUGVisualArray[2]}</td>
                            </tr>
                            <tr>
                                <th className="Left-Head">Market Cap:</th>
                                <td>{this.state.BTCVisualArray[3]}</td>
                                <td>{this.state.ETHVisualArray[3]}</td>
                                <td>{this.state.DASHVisualArray[3]}</td>
                                <td>{this.state.AUGVisualArray[3]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ComparisonComponent />
                <HistoricalComponent />
            </section>
        )
    }
}
