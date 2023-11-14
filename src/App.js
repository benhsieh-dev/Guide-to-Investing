import React, { useEffect} from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 

import './App.css';

import HomePage from './pages/homepage.component';
import RealEstate from './components/real_estate/real_estate.component'; 
import Equities from './components/Equities/equities.component';
import CryptoCurrencies from './components/crypto_currencies/crypto_currencies.component';
import PreciousMetals from './components/precious_metals/precious_metals.component';
import Bonds from './components/bonds/bonds.component'; 

import Investing from './images/dollar-cost-vs-lump-sum-investing-2.jpg'; 
import Collectibles from './components/collectibles/collectibles.component';


 

function App() {

  useEffect(() => {
    fetch("http://localhost:8080/investing")
      .then((response) => response.text())
      .then((result) => console.log(result));
  }, []);

  return (
    <HashRouter basename="/">
      <div className="App">
        <div>
          <Tabs defaultIndex={0}>
            <TabList>
              <Tab>
                <Link to="/">Home</Link>
              </Tab>
              <Tab>
                <Link to="/bonds">Bonds</Link>
              </Tab>
              <Tab>
                <Link to="/collectibles">Collectibles</Link>
              </Tab>
              <Tab>
                <Link to="/crypto_currencies">Crypto Currencies</Link>
              </Tab>
              <Tab>
                <Link to="/equities">Equities</Link>
              </Tab>
              <Tab>
                <Link to="/precious_metals">Precious Metals</Link>
              </Tab>
              <Tab>
                <Link to="/real_estate">Real Estate</Link>
              </Tab>
            </TabList>

            <TabPanel>{/* <h2>Any content 1</h2>*/}</TabPanel>
            <TabPanel>{/* <h2>Any content 2</h2>*/}</TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>

          <Route exact path="/" component={HomePage} />
          <Route path="/bonds" component={Bonds} />
          <Route path="/collectibles" component={Collectibles} />
          <Route path="/crypto_currencies" component={CryptoCurrencies} />
          <Route path="/equities" component={Equities} />
          <Route path="/precious_metals" component={PreciousMetals} />
          <Route path="/real_estate" component={RealEstate} />
        </div>
        <div className="image">
          <img src={Investing} alt="Investing" />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
