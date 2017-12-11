import React ,{Component} from 'react';
import axios from 'axios';

import '../../../../../css/components/Crypto/cryptoInfo.css';

export default class CryptoComparisonComponent extends Component{
    constructor(){
        super();
        this.state={
            btcComparison: [],
            ethComparison: [],
            dashComparison: [],
            augComparison: [],
        }
    }    

componentDidMount(){
    axios.get('/api/BTCComp').then(res=>{
        this.setState({
            btcComparison: res.data
        });
    });
    axios.get('/api/ETHComp').then(res=>{
        this.setState({
            ethComparison: res.data
        });
    });
    axios.get('/api/AUGComp').then(res=>{
        this.setState({
            augComparison: res.data
        });
    });
    axios.get('/api/DASHComp').then(res=>{
        this.setState({
            dashComparison: res.data
        });
    });

}


    render(){
        console.log(this.state.btcComparison);
        return(
            <div className="CryptoTableBox">
            <h2 className="CryptoHeading" id="comparisonCryptoTable">comparison table</h2>
                <table className="CryptoTable">
                <thead>
                    <tr>
                        <th className="Empty-Corner">    </th>
                        <th>BTC </th>
                        <th>ETH </th>
                        <th>DASH</th>
                        <th>AUG </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th className="Left-Head">Bitcoin (BTC):</th>
                        <td>{this.state.btcComparison[0]}</td>
                        <td>{this.state.btcComparison[1]}</td>
                        <td>{this.state.btcComparison[2]}</td>
                        <td>{this.state.btcComparison[3]}</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">Ethereum (ETH):</th>
                        <td>{this.state.ethComparison[0]}</td>
                        <td>{this.state.ethComparison[1]}</td>
                        <td>{this.state.ethComparison[2]}</td>
                        <td>{this.state.ethComparison[3]}</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">Dash (DASH):</th>
                        <td>{this.state.dashComparison[0]}</td>
                        <td>{this.state.dashComparison[1]}</td>
                        <td>{this.state.dashComparison[2]}</td>
                        <td>{this.state.dashComparison[3]}</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">Augur (AUG):</th>
                        <td>{this.state.augComparison[0]}</td>
                        <td>{this.state.augComparison[1]}</td>
                        <td>{this.state.augComparison[2]}</td>
                        <td>{this.state.augComparison[3]}</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">Gnosis (GNO):</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">Golumn (GOL):</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}