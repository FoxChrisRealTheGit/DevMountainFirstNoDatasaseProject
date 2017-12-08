import React ,{Component} from 'react';
import Header from '../../Header/HeaderComponent';
import Footer from '../../Footer/FooterComponent';
import CryptoTitleComponent from '../cryptoApp/cryptoTitle/CryptoTitleComponent';
import CryptoInfoComponents from '../cryptoApp/cryptoInfoComp/CryptoInfoComponents';


export default class CryptoAppComponent extends Component{
    
    render(){

        return(
            <div>             
                <Header />
                <CryptoTitleComponent />
                <CryptoInfoComponents />
                <Footer />
            </div>
        )
    }
}