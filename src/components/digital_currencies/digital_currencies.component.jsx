import axios from 'axios';
import React, { useEffect, useState } from 'react';

import digitalCurrenciesModule from './digital_currencies.module.css';

// export default ({name, image, symbol, price, volume}) => {
export default () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=> {
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data); 
      })
      .catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  
  // filteredCoins.map(coin => {
  //   return (
  //     <div 
  //       key = {coin.id}
  //       name = {coin.name}
  //       image = {coin.image}
  //       symbol = {coin.symbol}
  //       volume = {coin.market_cap}
  //       price = {coin.current_price}
  //       ></div>
  //   )
  // })

  return (
      <div className={digitalCurrenciesModule.digitalCurrencies}>
        <h1>Digital Currencies</h1>
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <form>
            <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
          </form>
        </div>  
        <p><strong>Bitcoin</strong> has emerged as the leading digital currency in the market. Athough bitcoin was valued at less than $0.01 in May 2010, bitcoin value has risen to over $6,000 according to recent price data. Hence, digital currencies may 
        be an interesting way to diversify an investment portfolio.</p>
        <p><strong>Ethereum</strong></p>
        <p><strong>Cardano</strong></p>   

        { filteredCoins.map(coin => {
          return (
            <div className="coin-container">
              <div className="coin-row">
                <div className="coin">
                  <img src={coin.image} alt="crypto" />
                  <h1>{coin.name}</h1>
                  <p className="coin-symbol">{coin.symbol}</p>
                </div>
              <div className="coin-data">
                <p className="coin-price">${coin.current_price}</p>
                <p className="coin-volume">${coin.market_cap.toLocaleString()}</p>
              </div>
            </div>
        </div>
          )})}
    </div>
  )
}


  ;

