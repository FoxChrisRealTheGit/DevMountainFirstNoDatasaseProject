import React, {Component} from 'react';
import '../../css/header-footer/footer.css';

export default class Footer extends Component{


    render(){
        return(
            <footer className="main-footer">
                <section className="connectWithMe">
                    <div>
                        <h5>Connect With Me!</h5>
                    </div>
                    <div className="social-media-links" >
                        <a href="https://www.facebook.com/FoxChrisRealThe" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://twitter.com/foxchrisrealthe" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/foxchrisrealthe/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                </section>
                <div className ="copyright-line">
                    <h6>Copyright @ 2017 - All Rights Reserved - <a href="www.FoxChrisRealThe.com">Fox Design Agency</a></h6>
                </div>
            </footer>
        )
    }
}