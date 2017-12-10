import React ,{Component} from 'react';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';

//Children
import HomeHeroComponent from './HomeComponentFolder/HomeHeroComponent';
import HomeRecent from './HomeComponentFolder/HomeRecentWorkComponent';
import HomeBlog from './HomeComponentFolder/HomeBlogComponent';
import HomePublications from './HomeComponentFolder/HomePublicationsComponent';

export default class HomeComponent extends Component{

    render(){
        return(
            <div>
                <Header />
                <HomeHeroComponent />
                <HomeRecent />
                <HomeBlog />
                <HomePublications />
                <Footer />
            </div>
        )
    }
}