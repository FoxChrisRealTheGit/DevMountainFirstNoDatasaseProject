import React ,{Component} from 'react';
import CryptoChildTitleComponent from './CryptoChildTitleComponent';
import CryptoDescriptionComponent from './CryptoDescriptionComponent';

import '../../../../css/components/Crypto/cryptoTitle.css';

export default class CryptoTitleComponent extends Component{

    render(){

        return(
            <div className="LargeTitle">
                <CryptoChildTitleComponent />
                <CryptoDescriptionComponent />
            </div>
        )
    }
}