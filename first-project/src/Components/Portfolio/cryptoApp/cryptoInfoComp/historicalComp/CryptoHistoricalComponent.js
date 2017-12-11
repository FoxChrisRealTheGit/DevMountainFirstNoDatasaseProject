import React, { Component } from 'react';

import '../../../../../css/components/Crypto/cryptoInfo.css';

export default class CryptoHistoricalComponent extends Component {

    render() {
        return (
            <div>
                <h2 className="CryptoHeading" id="historicalCryptoData">historical data from past year</h2>
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
                        <th className="Left-Head">1 Week %:</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">1 Month %:</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">1 Year %:</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">1 Year High:</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">1 Year Median:</th>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <th className="Left-Head">1 Year Low:</th>
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