import React ,{Component} from 'react';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';

export default class AboutComponent extends Component{

    render(){
        return(
            <section>
               <Header />
                <div>
                    About
                    </div>
               <Footer />
            </section>
        )
    }
}