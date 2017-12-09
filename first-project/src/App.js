import React, { Component } from 'react';
import './css/reset.css';
import './css/app.css';
import Home from './Components/Home/HomeComponent'
import router from './router';

class App extends Component {
  render() {
    return (
      <div >
       {router}
      </div>
    );
  }
}

export default App;
