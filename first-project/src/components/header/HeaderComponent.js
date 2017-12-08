import React , {Component} from 'react';
import '../../css/header-footer/header.css';

export default class Header extends Component{

    render(){
        return(
            <header className="main-header">
                <img className="brand" src="../images/SVG/foxtail2-1.svg" alt="Fox Tail Logo" />
                <nav>
                    <ul className="main-nav">
                        <li>home</li>
                        <li>about</li>
                        <li>resume</li>
                        <li>portfolio</li>
                    </ul>
                </nav>
            </header>
        )
    }
}