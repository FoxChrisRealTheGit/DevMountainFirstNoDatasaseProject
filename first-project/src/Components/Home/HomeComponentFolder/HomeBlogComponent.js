import React ,{Component} from 'react';

import '../../../css/components/Main-Pages/home.css';

export default class HomeBlogComponent extends Component{

    render(){

        return(
            <section className="whole-wrapper">
            <h2 className="section-head">the written word</h2>
            <section className="blog-holder">
            <div className="Blog-block">
            </div>

            <div className="Blog-block">
            </div>


            <div className="Blog-block">
            </div>
            </section>
            <h6 className="home-mini-links">More Blog Posts...</h6>
            </section>
        )
    }
}