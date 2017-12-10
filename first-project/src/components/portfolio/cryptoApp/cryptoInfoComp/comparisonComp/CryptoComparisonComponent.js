import React ,{Component} from 'react';

import '../../../../../css/components/Crypto/cryptoInfo.css';

export default class CryptoComparisonComponent extends Component{
    
    render(){
        return(
            <div className="CryptoTableBox">
            <h2 className="CryptoHeading">comparison table</h2>
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
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">Ethereum (ETH):</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">Dash (DASH):</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">Augur (AUG):</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
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