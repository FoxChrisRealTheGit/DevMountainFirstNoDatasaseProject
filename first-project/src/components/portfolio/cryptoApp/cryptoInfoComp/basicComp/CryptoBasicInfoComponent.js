import React ,{Component} from 'react';
import axios from 'axios';

import '../../../../../css/components/Crypto/cryptoInfo.css';

export default class CryptoBasicInfoComponent extends Component{
    constructor(){
        super();
        this.state={
            currentDisplay:['btc', 'eth', 'dash', 'aug'],
            todayPercentChange:['2%', '3%', '4%', '6%'],
            marketCap:['16,000,000', '2,000,000', '6,000,000', '4,000,000'],
            dollarPrice:['$16,000,000', '$1,000,000', '$600,000', '$900,000'],
            yuanPrice:['¥1,000,000', '¥1,000,000', '¥1,000,000', '¥1,000,000'],
            euroPrice:['€2,000,000', '€1,000,000', '€4,000,000', '€3,000,000'],
            rublePrice:['₽3,000,000', '₽4,000,000', '₽3,000,000', '₽3,000,000'],
            bitcoinPrice: 2300
        }
    }

componentWillReceiveProps(nextProps){

}

componentWillMount(){
    axios.get("http://localhost:9001/api/").then(res=>{
    this.setState({
            bitcoinPrice: res.data
        })
    }).catch(err=>console.log(err))
}

    render(){
        
        return(
            <div className="CryptoTableBox">
            <h2 className="CryptoHeading">basic information</h2>
            <table className="CryptoTable">
            <thead>
                <tr>
                    <th>    </th>
                    <th>BTC </th>
                    <th>ETH </th>
                    <th>DASH</th>
                    <th>AUG </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="Left-Head">Price in {this.props.money}:</th>
                    <td>{this.state.bitcoinPrice}</td>
                    <td>{this.props.priceDisplay[1]}</td>
                    <td>{this.props.priceDisplay[2]}</td>
                    <td>{this.props.priceDisplay[3]}</td>
                </tr>
                <tr>
                    <th className="Left-Head">Today % Change:</th>
                    <td>{this.state.todayPercentChange[0]}</td>
                    <td>{this.state.todayPercentChange[1]}</td>
                    <td>{this.state.todayPercentChange[2]}</td>
                    <td>{this.state.todayPercentChange[3]}</td>
                </tr>
                <tr>
                    <th className="Left-Head">Market Cap:</th>
                    <td>{this.state.marketCap[0]}</td>
                    <td>{this.state.marketCap[1]}</td>
                    <td>{this.state.marketCap[2]}</td>
                    <td>{this.state.marketCap[3]}</td>
                </tr>
                </tbody>
            </table>
            </div>
        )
    }
}