// import React from 'react';
// import React, {useEffect, useState} from 'react';
import React, {useEffect} from 'react';
import axios from "axios";

import './precious_metals.css';

export default () => {

  // const [cprices, setCprices] = useState([]);

  const options = {
    method: "GET",
    url: "https://current-precious-metal-price.p.rapidapi.com/metals/v1/1",
    headers: {
      "x-rapidapi-key": "b519a2b20amsh014be75ec062cdap1aaac1jsn918f03506c38",
      "x-rapidapi-host": "current-precious-metal-price.p.rapidapi.com",
    },
  };

  useEffect(()=> {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          // setCprices(response.data); 
        })
        .catch(function (error) {
          console.error(error);
        });
  }, [options])

  return (
    <div className="precious_metals">
      <h1>Precious Metals</h1>
      <p>
      Gold is a popular investment in times of global uncertainties. Keeping gold bullions at 
      home, however, can be a hassle. So investing in a gold funds such as <strong>SPDR Gold 
      Shares (ticker symbol: GLD) </strong> appears to be more logical. 
      </p>
    </div>
  )};
