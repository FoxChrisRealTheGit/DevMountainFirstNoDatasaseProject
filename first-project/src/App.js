import React, { Component } from 'react';
import './css/reset.css'
import './css/App.css';
import CryptoAppComponent from './Components/Portfolio/cryptoApp/CryptoAppComponent';

class App extends Component {
  render() {
    return (
      <div >
       <CryptoAppComponent />
      </div>
    );
  }
}

export default App;
