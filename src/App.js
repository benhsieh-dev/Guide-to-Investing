import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component';
import RealEstate from './components/real_estate/real_estate.component'; 
import Equities from './components/Equities/equities.component';
import CryptoCurrencies from './components/crypto_currencies/crypto_currencies.component';
import PreciousMetals from './components/precious_metals/precious_metals.component';
import Bonds from './components/bonds/bonds.component'; 

import Investing from './images/dollar-cost-vs-lump-sum-investing-2.jpg'; 

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/real_estate">Real Estate</Link></li>
                <li><Link to="/equities">Equities</Link></li>
                <li><Link to="/crypto_currencies">Crypto Currencies</Link></li>
                <li><Link to="/precious_metals">Precious Metals</Link></li>
                <li><Link to="/bonds">Bonds</Link></li>
              </ul>

              <hr />

                <Route exact path="/" component={HomePage} />
                <Route path="/real_estate" component={RealEstate} />
                <Route path="/equities" component={Equities} />
                <Route path="/crypto_currencies" component={CryptoCurrencies} />
                <Route path="/precious_metals" component={PreciousMetals} />
                <Route path="/bonds" component={Bonds} />
                
            </div>
            <div className="image">
                <img src={Investing} alt='Investing' />
            </div>  
        </div>
      </HashRouter> 
    );
  }
}

export default App;
