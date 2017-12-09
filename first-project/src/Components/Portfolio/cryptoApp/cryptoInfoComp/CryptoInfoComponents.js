import React , {Component} from 'react';

import BasicComponent from './basicComp/CryptoBasicInfoComponent';
import ComparisonComponent from './comparisonComp/CryptoComparisonComponent';
import HistoricalComponent from './historicalComp/CryptoHistoricalComponent';

import '../../../../css/components/Crypto/cryptoInfo.css';

export default class CryptoInfoComponents extends Component{
    constructor(){
        super();
        this.state={
            currentFiat: "Dollar",
            FiatDisplay: ['$16,000,000', '$1,000,000', '$600,000', '$900,000'],
            cryptoSelected: ["btc", "eth", "dash", "aug"],
            dollarPrice:['$16,000,000', '$1,000,000', '$600,000', '$900,000'],
            yuanPrice:['¥1,000,000', '¥1,000,000', '¥1,000,000', '¥1,000,000'],
            euroPrice:['€2,000,000', '€1,000,000', '€4,000,000', '€3,000,000'],
            rublePrice:['₽3,000,000', '₽4,000,000', '₽3,000,000', '₽3,000,000']


        }

        this.fiatSelector = this.fiatSelector.bind(this);
    }

    //componentWillMount{ //load in Crypto Information}

    fiatSelector(val){
        this.setState({currentFiat: val});

        if(this.state.currentFiat === "Dollar"){
            this.setState({FiatDisplay: this.state.dollarPrice});
        }else if(this.state.currentFiat === "Yuan"){
            this.setState({FiatDisplay:  this.state.yuanPrice});
        }else if(this.state.currentFiat === "Euro"){
            this.setState({FiatDisplay:  this.state.euroPrice});
        }else if (this.state.currentFiat === "Ruble"){
            this.setState({FiatDisplay:  this.state.rublePrice});
        }
    }
    

    render(){
        
        return(
            <section className="CryptoInfoComponents">
                <div className="CryptoInfoSelectors">
                    <select className="CryptoMoneyType"
                        onClick={(e)=>this.fiatSelector(e.target.value)}>
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
                
                <BasicComponent 
                    money={this.state.currentFiat}
                    priceDisplay={this.state.FiatDisplay}/>
                <ComparisonComponent />
                <HistoricalComponent />
            </section>
        )
    }
}