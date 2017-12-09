import React from 'react';
import { Switch, Route} from 'react-router';

//import all main components
import Home from './Components/Home/HomeComponent';
import About from './Components/About/AboutComponent';
import Resume from './Components/Resume/ResumeComponent';
import Portfolio from './Components/Portfolio/PortfolioComponent';


export default (
<Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route path="/about" component={ About }></Route>
        <Route path="/resume" component={ Resume }></Route>
        <Route path="/portfolio" component={ Portfolio }></Route>
</Switch>
)