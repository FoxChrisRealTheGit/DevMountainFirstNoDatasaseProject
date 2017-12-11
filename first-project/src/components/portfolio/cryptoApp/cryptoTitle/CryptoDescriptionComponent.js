import React, { Component } from 'react';

import '../../../../css/components/Crypto/cryptoTitle.css';

export default class CryptoDescriptionComponent extends Component {


    render() {
        return (
            <div className="CryptoDescription">
                <p>Below is the first major project that I made during my time at DevMoutain. It is a simple CryptoCurrency readout in table form. The web app utilizes a few api calls to render data corrctly on page load.</p>
            </div>
    )
    }

}