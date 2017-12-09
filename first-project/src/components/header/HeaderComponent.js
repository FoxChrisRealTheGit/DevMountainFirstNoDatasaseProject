import React from 'react';
import '../../css/header-footer/header.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Header() {


    return (
       
        <header className="main-header">
            <img className="brand" src="../images/SVG/foxtail2-1.svg" alt="Fox Tail Logo" />
            <nav>
                <ul className="main-nav">
                    <li><Link to="/" >home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/resume">resume</Link></li>
                    <li><Link to="/portfolio">portfolio</Link></li>
                </ul>
                
            </nav>
        </header>
        
    )

}