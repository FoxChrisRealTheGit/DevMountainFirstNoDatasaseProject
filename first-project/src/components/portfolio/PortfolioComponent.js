import React ,{Component} from 'react';

import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';

import Crypto from './cryptoApp/CryptoAppComponent';

export default class PortfolioComponent extends Component{

    render(){

        return(
            <section>
            <Header />
            <Crypto />
            <Footer />
            </section>
        )
    }
}